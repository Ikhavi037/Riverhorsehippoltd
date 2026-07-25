'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTooltipOpen(true);
    }, 3000);
    const closeTimer = setTimeout(() => setTooltipOpen(false), 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, []);

  const href = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2"
        >
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="relative max-w-[220px] rounded-xl bg-navy-900 px-4 py-3 text-sm text-white shadow-xl"
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-navy-700 text-white"
                  aria-label="Close tooltip"
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="font-medium text-gold-400">Need help?</p>
                <p className="mt-0.5 text-xs text-white/80">Chat with our team on WhatsApp for quick answers.</p>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
          >
            <MessageCircle className="h-7 w-7" fill="white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
