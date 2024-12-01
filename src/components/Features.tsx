import React from 'react';
import { Gamepad2, Target, Rocket, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: t('features.controls.title'),
      description: t('features.controls.description')
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: t('features.aim.title'),
      description: t('features.aim.description')
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: t('features.boost.title'),
      description: t('features.boost.description')
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: t('features.ai.title'),
      description: t('features.ai.description')
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://op.market/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroup2790.6037e23a.png&w=3840&q=100)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 to-[#0f172a]/40 z-1" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-12 text-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('features.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#0f172a]/40 backdrop-blur-sm p-6 rounded-xl text-center overflow-hidden border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="text-purple-400 mb-4 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-white mb-2 relative z-10 text-shadow">
                {feature.title}
              </h3>
              <p className="text-gray-200 relative z-10 text-shadow">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}