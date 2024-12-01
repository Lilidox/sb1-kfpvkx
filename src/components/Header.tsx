import React from 'react';
import { Download, Menu, Users } from 'lucide-react';
import { IconBrandDiscord } from '@tabler/icons-react';
import { Link } from './Link';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-[#0f172a] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://media.discordapp.net/attachments/934199082203897856/1312539487347146772/APOCALYPSE_6.png?ex=674cdd27&is=674b8ba7&hm=c4520f8320902b5fe62e6f558896cb6cee8fba63ffd86c7745dd7d35faf552ee&=&format=webp&quality=lossless&width=905&height=905" 
            alt="RLBot Elite Logo" 
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Thorami BOT
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features">{t('header.features')}</Link>
          <Link href="#winrar">{t('header.winrar')}</Link>
          <Link href="#installation">{t('header.installation')}</Link>
          <Link href="#faq">{t('header.faq')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <a 
            href="https://discord.gg/8s8SHvzuc9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <IconBrandDiscord className="w-5 h-5" />
            <span>{t('header.server')}</span>
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300">
            <Download size={20} />
            {t('header.download')}
          </button>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}