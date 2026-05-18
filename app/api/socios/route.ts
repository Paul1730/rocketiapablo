import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { slugify } from '@/lib/slugify';

export async function POST(req: NextRequest) {
  const { nombre, apellido, link } = await req.json();

  if (!nombre?.trim() || !apellido?.trim() || !link?.trim()) {
    return NextResponse.json({ error: 'Todos los campos son requeridos.' }, { status: 400 });
  }

  const slug = slugify(nombre.trim(), apellido.trim());

  // Check duplicado por nombre + apellido (case-insensitive)
  const { data: existing } = await supabase
    .from('socios')
    .select('id')
    .ilike('nombre', nombre.trim())
    .ilike('apellido', apellido.trim())
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { error: `Ya existe una página para ${nombre.trim()} ${apellido.trim()}.` },
      { status: 409 }
    );
  }

  const { error } = await supabase
    .from('socios')
    .insert({ nombre: nombre.trim(), apellido: apellido.trim(), slug, link: link.trim() });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ slug }, { status: 201 });
}

export async function GET() {
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

  const { error } = await supabase.from('socios').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
