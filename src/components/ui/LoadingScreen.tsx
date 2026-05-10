'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const t = setTimeout(() => setVisible(false), 1600); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'var(--accent)' }}>
            <Code2 size={32} className="text-white" />
          </motion.div>
          <div className="w-48 h-0.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
            <motion.div className="h-full rounded-full" style={{ background: 'var(--accent)' }}
              initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.4, ease: 'easeInOut' }} />
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-4 text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
            Initializing portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
