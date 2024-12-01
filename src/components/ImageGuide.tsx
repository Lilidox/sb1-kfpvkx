import React from 'react';
import { motion } from 'framer-motion';

interface ImageStepProps {
  image: string;
  title: string;
  description: string;
}

export function ImageGuide() {
  const images: ImageStepProps[] = [
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255209990814175272/image.png?ex=674c99e6&is=674b4866&hm=199aebda5e12145f7f21db2b0776c779b56cb21ae5a4032105545f93b0d3c55c&=&format=webp&quality=lossless",
      title: "Fichier Thorami BOT",
      description: "Le fichier .rar contenant le bot et l'injecteur"
    },
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255210393354113054/image.png?ex=674c9a46&is=674b48c6&hm=b84f151fa89716ba7500b7a4fa632f085a06503cf86c15d5ec56ddfd5eeff769&=&format=webp&quality=lossless",
      title: "Extraction du fichier",
      description: "Utilisez WinRAR pour extraire les fichiers"
    },
    {
      image: "https://cdn.discordapp.com/attachments/1255193860968288446/1255210732749066341/image.png?ex=674c9a97&is=674b4917&hm=405006bc6dd82ef7c03c602a980a9fda3f72c77675059ad652da57f27ff89bdc&",
      title: "Contenu du dossier",
      description: "Les dossiers Bot DLL et Injector Xenos"
    },
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255210977205420103/image.png?ex=674c9ad1&is=674b4951&hm=1d3e0a397cf58a4727265e6aa488bbc0989307e9c4b0e64f1c7ab601adfc0e91&=&format=webp&quality=lossless",
      title: "Xenos Injector",
      description: "Interface de l'injecteur Xenos"
    },
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255211246589055038/image.png?ex=674c9b11&is=674b4991&hm=589c2a20380451e667c93e24490c88dfc8a2e6fc96950ec3c91f55bbe31073ef&=&format=webp&quality=lossless",
      title: "Sélection du processus", 
      description: "Sélectionnez RocketLeague.exe dans la liste"
    },
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255212429499957258/LILIDOX_1.png?ex=674c9c2b&is=674b4aab&hm=a89c188ead11ca699d8e71f873f789ff4bcdfe9275e7341baf9467c50bc8bcb9&=&format=webp&quality=lossless",
      title: "Sélection du fichier DLL",
      description: "Sélectionnez le fichier ThoramiBot dans le dossier Bot DLL"
    },
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255212760598446100/image.png?ex=674c9c7a&is=674b4afa&hm=768883ec8812b27c061a30bb552f8cb057950a226b22fe1bf3b11939257497b5&=&format=webp&quality=lossless",
      title: "Ajout du DLL",
      description: "Le fichier DLL est ajouté à la liste des images à injecter"
    },
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255213882247741530/image.png?ex=674c9d86&is=674b4c06&hm=5ba5ff72cfe1eff3249457757840e5d8a83197a9df3c82b5b2073e39cfa05169&=&format=webp&quality=lossless",
      title: "Configuration vidéo",
      description: "Désactivez la synchronisation verticale et réglez les FPS à 120"
    },
    {
      image: "https://media.discordapp.net/attachments/1255193860968288446/1255214678121123902/LILIDOX_2.png?ex=674c9e44&is=674b4cc4&hm=e2ad6efd8cd2b9ed60cfc28ae88a49366688437fef9fa77f54c802e0e41a118a&=&format=webp&quality=lossless",
      title: "Vérification en jeu",
      description: "Le bot est prêt à être utilisé dans tous les modes de jeu supportés"
    }
  ];

  return (
    <div className="mt-12 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('https://cdn.discordapp.com/attachments/930217137140813855/1312765976340594728/presentation_soutenance_de_memoire_de_fin_detudes_moderne_3D_orange_violet_et_blanc_1.png?ex=674db016&is=674c5e96&hm=d66b350292712eaefb3f275327774ff1ac68ee538f5624d2eb4f10b7c4198b29&')",
          zIndex: -1
        }}
      />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Guide Visuel</h3>
        <div className="grid gap-8">
          {images.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl"
            >
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Étape {index + 1}: {step.title}
                </h4>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <div className="relative rounded-lg overflow-hidden border-2 border-purple-500/30">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto max-h-[400px] object-contain bg-gray-900/90 p-4"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}