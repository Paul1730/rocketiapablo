export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { slugify } from '@/lib/slugify';

export async function POST(req: NextRequest) {
  const { nombre, apellido, email, link, whatsapp } = await req.json();

  if (!nombre?.trim() || !apellido?.trim() || !email?.trim() || !link?.trim()) {
    return NextResponse.json({ error: 'Todos los campos son requeridos.' }, { status: 400 });
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json({ error: 'El correo electrónico no es válido.' }, { status: 400 });
  }

  const supabase = getSupabase();
  const slug = slugify(nombre.trim(), apellido.trim());

  // Verificar duplicado por nombre + apellido
  const { data: existingName } = await supabase
    .from('socios')
    .select('id')
    .ilike('nombre', nombre.trim())
    .ilike('apellido', apellido.trim())
    .maybeSingle();

  if (existingName) {
    return NextResponse.json(
      { error: `Ya existe una página para ${nombre.trim()} ${apellido.trim()}.` },
      { status: 409 }
    );
  }

  // Verificar duplicado por email
  const { data: existingEmail } = await supabase
    .from('socios')
    .select('id, nombre, apellido')
    .ilike('email', email.trim())
    .maybeSingle();

  if (existingEmail) {
    return NextResponse.json(
      { error: `El correo ${email.trim()} ya está registrado para ${existingEmail.nombre} ${existingEmail.apellido}.` },
      { status: 409 }
    );
  }

  const { error } = await supabase
    .from('socios')
    .insert({
      nombre:   nombre.trim(),
      apellido: apellido.trim(),
      email:    email.trim().toLowerCase(),
      slug,
      link:     link.trim(),
      whatsapp: whatsapp?.trim() || '+50371807574',
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ slug }, { status: 201 });
}

export async function GET() {
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from('socios')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const supabase = getSupabase();

  const { error } = await supabase.from('socios').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
