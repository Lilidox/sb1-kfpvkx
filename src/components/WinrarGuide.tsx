import React from 'react';
import { motion } from 'framer-motion';
import { Download, Archive, CheckCircle2, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function WinrarGuide() {
  const { t } = useTranslation();

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="winrar" className="py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), rgba(29, 78, 216, 0.2), rgba(67, 56, 202, 0.2))',
            'linear-gradient(to bottom right, rgba(67, 56, 202, 0.2), rgba(88, 28, 135, 0.2), rgba(29, 78, 216, 0.2))',
            'linear-gradient(to bottom right, rgba(29, 78, 216, 0.2), rgba(67, 56, 202, 0.2), rgba(88, 28, 135, 0.2))',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-500/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            x: [-20, 20],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[200px] h-[500px] bg-gradient-to-t from-purple-500/0 via-purple-500/10 to-purple-500/0 rotate-45"
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: '20%',
            left: '-10%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block relative"
            >
              <Archive className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <motion.div
                className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">{t('winrar.title')}</h2>
            <p className="text-gray-400">{t('winrar.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{t('winrar.why.title')}</h3>
              <ul className="space-y-3 text-gray-300">
                {t('winrar.why.reasons', { returnObjects: true }).map((reason, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{t('winrar.guide.title')}</h3>
              <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                {t('winrar.guide.steps', { returnObjects: true }).map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{t('winrar.download.title')}</h3>
                <p className="text-gray-300">{t('winrar.download.subtitle')}</p>
              </div>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.win-rar.com/download.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>{t('winrar.download.button')}</span>
                </motion.a>
                <motion.a
                  href="https://www.win-rar.com/support.html?&L=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>{t('winrar.download.support')}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              {t('winrar.next')}
              <br />
              <a href="#installation" className="text-purple-400 hover:text-purple-300 transition-colors">
                {t('winrar.viewGuide')}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}