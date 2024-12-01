import React from 'react';
import { motion } from 'framer-motion';
import { IconBrandDiscord } from '@tabler/icons-react';
import { Github, Twitter, Heart, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://media.discordapp.net/attachments/934199082203897856/1312539487347146772/APOCALYPSE_6.png?ex=674cdd27&is=674b8ba7&hm=c4520f8320902b5fe62e6f558896cb6cee8fba63ffd86c7745dd7d35faf552ee&=&format=webp&quality=lossless&width=905&height=905" 
                alt="Thorami Bot Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Thorami BOT
              </span>
            </div>
            <p className="text-gray-400">
              Le bot Rocket League le plus avancé, créé pour améliorer votre expérience de jeu.
            </p>
          </div>

          {/* Créateurs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Créateurs</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-purple-500" />
                Site Web par Lilidox
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-purple-500" />
                Bot développé par Lilidox
              </li>
            </ul>
          </div>

          {/* Liens Utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-purple-400 transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#installation" className="hover:text-purple-400 transition-colors">
                  Guide d'Installation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact et Réseaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rejoignez-nous</h3>
            <div className="space-y-4">
              <motion.a
                href="https://discord.gg/8s8SHvzuc9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-lg transition-colors duration-300 w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandDiscord className="w-5 h-5" />
                <span>Serveur Discord</span>
              </motion.a>
              <div className="flex gap-4">
                <motion.a
                  href="mailto:contact@thoramibot.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/lilidox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/lilidox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Thorami BOT. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Politique de confidentialité
              </a>
              <span>•</span>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}