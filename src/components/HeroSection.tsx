import { useState, useEffect, useRef } from 'react';
import { useSectionCursor } from '../hooks/useSectionCursor';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isHovered } = useSectionCursor(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen flex items-center justify-center overflow-hidden transition-all duration-300 ${
        isHovered ? 'cursor-none' : 'cursor-pointer'
      }`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>
        )}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};