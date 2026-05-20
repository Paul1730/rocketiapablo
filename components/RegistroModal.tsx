'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VIDEO_URL =
  'https://anbshiqmblyizfzaqydn.supabase.co/storage/v1/object/public/VSL/RegistroGlobalRocket.mp4';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function RegistroModal({ open, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause when modal closes, play when opens
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
            style={{
              border: '1.5px solid rgba(139,92,246,0.35)',
              boxShadow: '0 0 80px rgba(139,92,246,0.2), 0 40px 100px rgba(0,0,0,0.6)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                background: 'linear-gradient(90deg, rgba(139,92,246,0.15), rgba(0,210,255,0.1))',
                borderBottom: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-rocket-purple/70 mb-0.5">
                  Rocket iA™
                </p>
                <h3 className="font-display font-black text-white text-lg leading-tight">
                  Video de <span className="text-gradient-iA">Registro</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                aria-label="Cerrar"
              >
                <X size={16} className="text-white/60" />
              </button>
            </div>

            {/* Video */}
            <div style={{ background: 'rgba(5,8,20,0.98)' }}>
              <video
                ref={videoRef}
                src={VIDEO_URL}
                controls
                playsInline
                className="w-full block"
                style={{ maxHeight: '65vh', objectFit: 'contain' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
