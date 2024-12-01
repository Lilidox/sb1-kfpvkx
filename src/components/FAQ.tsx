import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FAQ() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 bg-[#0f172a] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 justify-center mb-12">
            <AlertCircle className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl font-bold text-white">{t('faq.title')}</h2>
          </div>

          <div className="space-y-6">
            {t('faq.questions', { returnObjects: true }).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 text-white cursor-pointer">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}