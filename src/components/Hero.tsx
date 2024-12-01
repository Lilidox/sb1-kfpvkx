import React from 'react';
import { Download, Shield, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-[#0f172a] text-white py-20 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Game Screenshots Carousel */}
          <motion.div 
            className="relative h-64 mb-12 rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute inset-0 flex gap-4 animate-scroll">
              <img src="https://media.graphassets.com/resize=fit:clip,height:720,width:1280/output=format:webp/QXjLW0nQC2NxxI8osiJk" alt="Rocket League Gameplay" className="rounded-xl object-cover" />
              <img src="https://www.rocketleague.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fresize%3Dfit%3Aclip%2Cheight%3A1080%2Cwidth%3A1920%2Foutput%3Dformat%3Awebp%2F3LjPWwYRBqQ8th5yL0WS&w=3840&q=75" alt="Rocket League Arena" className="rounded-xl object-cover" />
              <img src="https://media.graphassets.com/resize=fit:clip,height:720,width:1280/output=format:webp/QXjLW0nQC2NxxI8osiJk" alt="Rocket League Action" className="rounded-xl object-cover" />
              <img src="https://www.rocketleague.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fresize%3Dfit%3Aclip%2Cheight%3A1080%2Cwidth%3A1920%2Foutput%3Dformat%3Awebp%2F3LjPWwYRBqQ8th5yL0WS&w=3840&q=75" alt="Rocket League Arena" className="rounded-xl object-cover" />
            </div>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button 
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="group-hover:animate-bounce" />
              {t('hero.downloadNow')}
            </motion.button>
            <motion.button 
              className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.viewGuide')}
            </motion.button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-12 h-12" />, title: t('hero.features.secure'), desc: t('hero.features.secureDesc') },
              { icon: <Zap className="w-12 h-12" />, title: t('hero.features.update'), desc: t('hero.features.updateDesc') },
              { icon: <Users className="w-12 h-12" />, title: t('hero.features.support'), desc: t('hero.features.supportDesc') }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}