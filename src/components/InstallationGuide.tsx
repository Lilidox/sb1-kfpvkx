import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Settings, Shield, MonitorCheck, Power, Gauge } from 'lucide-react';
import { ImageGuide } from './ImageGuide';
import { VideoQuiz } from './VideoQuiz';

export function InstallationGuide() {
  const steps = [
    {
      icon: <FileDown className="w-6 h-6" />,
      title: "Téléchargement",
      description: "Téléchargez le fichier .rar depuis le canal thorami-release",
      important: "Assurez-vous d'avoir WinRAR installé pour l'extraction."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Désactiver l'Antivirus",
      description: "Désactivez temporairement votre antivirus. L'injecteur peut être signalé comme un virus mais il est sûr à utiliser.",
      important: "Cette étape est cruciale pour le bon fonctionnement de l'injecteur."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Configuration",
      description: "Lancez Rocket League et l'injecteur Xenos. Sélectionnez le processus Rocket League et ajoutez le fichier DLL du bot.",
      important: "Ne modifiez pas le fichier DLL du bot."
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Injection",
      description: "Cliquez sur le bouton Inject une fois. Si aucun message d'erreur n'apparaît, l'injection est réussie.",
      important: "N'injectez qu'une seule fois."
    },
    {
      icon: <MonitorCheck className="w-6 h-6" />,
      title: "Vérification",
      description: "Entrez en mode entraînement pour vérifier que le bot fonctionne en observant s'il bouge tout seul.",
      important: "Le bot devrait commencer à fonctionner automatiquement."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Paramètres de Jeu",
      description: "Configurez le jeu à 120 FPS maximum et désactivez V-Sync pour des performances optimales.",
      important: "Une bonne connexion internet est nécessaire."
    }
  ];

  return (
    <section id="installation" className="py-20 bg-[#1a2234] relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Side Image Container */}
          <div className="lg:sticky lg:top-20 lg:w-[500px] flex-shrink-0 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://media.discordapp.net/attachments/934199082203897856/1312541860870225930/Black_Ethereal_Trendy_Modern_Album_Cover_1.png?ex=674cdf5d&is=674b8ddd&hm=49dda6294ae3f23831ef44da0a8225b60a659d5cde25349e6e0f6c276ee88cf9&=&format=webp&quality=lossless&width=350&height=350"
                alt="RLBot Elite Artwork Left"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cdn.discordapp.com/attachments/1243298654291361833/1290405197440487445/Rocket_League_2024.09.30_-_21.46.22.04.DVR_-_Trim.mp4?ex=674cc27d&is=674b70fd&hm=e9fe0a2016777685d5ea7d4b640dadf48d0c332daac53a487b5a8516129b129e&"
                  type="video/mp4"
                />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <VideoQuiz />
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 px-4 lg:px-8"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Guide d'Installation</h2>

            <div className="grid gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-6 relative overflow-hidden group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Étape {index + 1}: {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      {step.important && (
                        <div className="bg-purple-900/30 border border-purple-500/30 rounded p-3">
                          <p className="text-purple-300 text-sm">
                            <strong>Important:</strong> {step.important}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              ))}
            </div>

            <ImageGuide />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 bg-gray-800/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Notes Additionnelles</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Pour désactiver le bot, fermez simplement Rocket League</li>
                <li>• Vous pouvez toujours utiliser le contrôleur pendant que le bot est actif</li>
                <li>• Pour désactiver temporairement le bot, augmentez les FPS dans les paramètres</li>
                <li>• Le bot fonctionne mieux avec une connexion internet stable</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side Image Container */}
          <div className="lg:sticky lg:top-20 lg:w-[500px] flex-shrink-0 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://media.discordapp.net/attachments/934199082203897856/1312541840792354816/Black_Ethereal_Trendy_Modern_Album_Cover.png?ex=674cdf58&is=674b8dd8&hm=10a01e1bc14aa92049d012a33fef199c36a4c59cdd020bbbd67ba53f07164a95&=&format=webp&quality=lossless&width=350&height=350"
                alt="RLBot Elite Artwork Right"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://cdn.discordapp.com/attachments/1243298654291361833/1276873849220239390/Rocket_League_64-bit_DX11_Cooked_2024-08-18_12-26-30.mp4?ex=674da170&is=674c4ff0&hm=e64dccc236764a768d91bb6c6a6ec1efff793271a5b2d9030e6a3bef8cb255ce&"
                  type="video/mp4"
                />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <VideoQuiz />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}