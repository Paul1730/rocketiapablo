'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Copy, Check, Rocket, Users, Link2, Mail, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { slugify } from '@/lib/slugify';
import type { SocioRow } from '@/lib/supabase';
import PhoneInput from '@/components/PhoneInput';

const BASE_URL =
  typeof window !== 'undefined' ? window.location.origin : '';

export default function AdminPage() {
  const [nombre,    setNombre]    = useState('');
  const [apellido,  setApellido]  = useState('');
  const [email,     setEmail]     = useState('');
  const [link,      setLink]      = useState('');
  const [whatsapp,  setWhatsapp]  = useState('');
  const [loading,  setLoading]  = useState(false);
  const [socios,   setSocios]   = useState<SocioRow[]>([]);
  const [fetching, setFetching] = useState(true);
  const [msg,      setMsg]      = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copied,   setCopied]   = useState<string | null>(null);

  const previewSlug = nombre.trim() && apellido.trim()
    ? slugify(nombre.trim(), apellido.trim())
    : null;

  const fetchSocios = useCallback(async () => {
    setFetching(true);
    const res = await fetch('/api/socios');
    if (res.ok) setSocios(await res.json());
    setFetching(false);
  }, []);

  useEffect(() => { fetchSocios(); }, [fetchSocios]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const res = await fetch('/api/socios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, apellido, email, link, whatsapp }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setMsg({ type: 'error', text: data.error });
      return;
    }

    setMsg({
      type: 'success',
      text: `Página creada: ${BASE_URL}/${data.slug}`,
    });
    setNombre('');
    setApellido('');
    setEmail('');
    setLink('');
    setWhatsapp('');
    fetchSocios();
  };

  const handleDelete = async (id: string, nombre: string, apellido: string) => {
    if (!confirm(`¿Eliminar la página de ${nombre} ${apellido}?`)) return;
    await fetch('/api/socios', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchSocios();
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      className="min-h-screen grid-bg"
      style={{ background: 'radial-gradient(ellipse at top, #0d1535 0%, #050814 60%)' }}
    >
      {/* Header */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(0,210,255,0.1)', background: 'rgba(5,8,20,0.8)', backdropFilter: 'blur(16px)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,36,36,0.15)', border: '1px solid rgba(255,36,36,0.3)' }}
          >
            <Rocket size={18} className="text-rocket-red" />
          </div>
          <div>
            <span className="font-display font-black text-white">Rocket <span className="text-gradient-iA">iA</span>™</span>
            <span className="ml-2 text-xs font-bold uppercase tracking-widest text-white/30">Admin</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1
            className="font-display font-black text-white mb-2 leading-tight"
            style={{ fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.02em' }}
          >
            Gestión de <span className="text-gradient-cta">Socios</span>
          </h1>
          <p className="text-white/45 text-sm">
            Crea una página personalizada para cada socio con su propio link de afiliado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ── FORM ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div
              className="rounded-3xl p-7"
              style={{
                background: 'rgba(10,15,35,0.85)',
                border: '1.5px solid rgba(0,210,255,0.15)',
                boxShadow: '0 0 60px rgba(0,210,255,0.04)',
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,210,255,0.1)', border: '1px solid rgba(0,210,255,0.25)' }}
                >
                  <Plus size={18} className="text-rocket-cyan" />
                </div>
                <h2 className="font-display font-bold text-white text-lg">Nueva Página</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    placeholder="Ej: Ana"
                    required
                    className="w-full px-4 py-3 rounded-xl font-medium text-white placeholder:text-white/20 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,210,255,0.4)')}
                    onBlur={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                {/* Apellido */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                    placeholder="Ej: García"
                    required
                    className="w-full px-4 py-3 rounded-xl font-medium text-white placeholder:text-white/20 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(0,210,255,0.4)')}
                    onBlur={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="socio@email.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl font-medium text-white placeholder:text-white/20 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(0,210,255,0.4)')}
                      onBlur={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                </div>

                {/* Link */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                    Link de Afiliado
                  </label>
                  <div className="relative">
                    <Link2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
                    <input
                      type="url"
                      value={link}
                      onChange={e => setLink(e.target.value)}
                      placeholder="https://belezateam.com/link/page/..."
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl font-medium text-white placeholder:text-white/20 outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(0,210,255,0.4)')}
                      onBlur={e  => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                    WhatsApp <span className="normal-case font-medium text-white/25">(opcional)</span>
                  </label>
                  <PhoneInput value={whatsapp} onChange={setWhatsapp} />
                </div>

                {/* URL preview */}
                <AnimatePresence>
                  {previewSlug && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="rounded-xl px-4 py-3 overflow-hidden"
                      style={{ background: 'rgba(0,210,255,0.06)', border: '1px solid rgba(0,210,255,0.2)' }}
                    >
                      <p className="text-[11px] font-bold uppercase tracking-widest text-rocket-cyan/60 mb-1">
                        URL que se generará
                      </p>
                      <p className="text-sm font-bold text-white break-all">
                        {BASE_URL}/<span className="text-rocket-cyan">{previewSlug}</span>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Feedback message */}
                <AnimatePresence>
                  {msg && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 rounded-xl px-4 py-3"
                      style={{
                        background: msg.type === 'success'
                          ? 'rgba(16,185,129,0.08)'
                          : 'rgba(255,36,36,0.08)',
                        border: `1px solid ${msg.type === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(255,36,36,0.3)'}`,
                      }}
                    >
                      {msg.type === 'success'
                        ? <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                        : <AlertCircle  size={16} className="text-rocket-red flex-shrink-0 mt-0.5" />
                      }
                      <p className="text-sm font-semibold break-all"
                        style={{ color: msg.type === 'success' ? '#4ade80' : '#ff6b6b' }}>
                        {msg.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl font-black text-white transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: loading
                      ? 'rgba(0,210,255,0.15)'
                      : 'linear-gradient(90deg, #00D2FF, #8B5CF6)',
                    boxShadow: loading ? 'none' : '0 0 30px rgba(0,210,255,0.25)',
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading
                    ? <><Loader2 size={18} className="animate-spin" /> Creando...</>
                    : <><Plus size={18} /> Crear Página</>
                  }
                </button>
              </form>
            </div>
          </motion.div>

          {/* ── LIST ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-7 h-full"
              style={{
                background: 'rgba(10,15,35,0.85)',
                border: '1.5px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}
                >
                  <Users size={18} className="text-rocket-purple" />
                </div>
                <h2 className="font-display font-bold text-white text-lg">
                  Socios activos
                  {!fetching && (
                    <span
                      className="ml-2 px-2 py-0.5 rounded-full text-xs font-black"
                      style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa' }}
                    >
                      {socios.length}
                    </span>
                  )}
                </h2>
              </div>

              {fetching ? (
                <div className="flex items-center justify-center py-16">
                  <Loader2 size={28} className="animate-spin text-white/20" />
                </div>
              ) : socios.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <Users size={36} className="text-white/10 mb-3" />
                  <p className="text-white/30 text-sm font-semibold">Aún no hay socios registrados.</p>
                  <p className="text-white/20 text-xs mt-1">Crea el primero con el formulario.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                  {socios.map((s) => {
                    const url = `${BASE_URL}/${s.slug}`;
                    return (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="group flex items-center justify-between gap-3 p-4 rounded-2xl transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        <div className="min-w-0">
                          <p className="font-bold text-white text-sm truncate">
                            {s.nombre} {s.apellido}
                          </p>
                          <p className="text-xs text-rocket-cyan/70 truncate font-medium mt-0.5">
                            /{s.slug}
                          </p>
                          <p className="text-xs text-white/30 truncate mt-0.5 flex items-center gap-1">
                            <Mail size={10} />
                            {s.email}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {/* Copy URL */}
                          <button
                            onClick={() => copyToClipboard(url, s.id)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                            style={{
                              background: 'rgba(0,210,255,0.08)',
                              border: '1px solid rgba(0,210,255,0.2)',
                            }}
                            title="Copiar URL"
                          >
                            {copied === s.id
                              ? <Check size={13} className="text-green-400" />
                              : <Copy size={13} className="text-rocket-cyan/70" />
                            }
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(s.id, s.nombre, s.apellido)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                            style={{
                              background: 'rgba(255,36,36,0.08)',
                              border: '1px solid rgba(255,36,36,0.2)',
                            }}
                            title="Eliminar"
                          >
                            <Trash2 size={13} className="text-rocket-red/70" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
