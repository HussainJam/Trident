'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import json from '../../public/logos/json.svg';
import aws from '../../public/logos/aws.svg';
import excel from '../../public/logos/excel.svg';
import play from '../../public/logos/playwright.svg';
import python from '../../public/logos/python.svg';
import se from '../../public/logos/se.svg';
import soup from '../../public/logos/soup.svg';

import BGdesign from "../../public/logos/logobg.svg";

export default function BrandsSection() {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleTouchStart = () => {
    setIsAnimating(false);
  };

  const handleTouchEnd = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    const animateScroll = () => {
      const scrollContainer = document.getElementById('scrollContainer');
      if (scrollContainer) {
        scrollContainer.style.animationPlayState = isAnimating ? 'running' : 'paused';
      }
    };

    animateScroll();
  }, [isAnimating]);

  const logos = [
    { src: json, alt: "JSON" },
    { src: aws, alt: "AWS" },
    { src: excel, alt: "Excel" },
    { src: play, alt: "Playwright" },
    { src: python, alt: "Python" },
    { src: se, alt: "SE" },
    { src: soup, alt: "Soup" },

  ];

  return (
    <div className="relative">
      <div className="mt-8 p-6" style={{
        backgroundColor: 'rgba(26, 167, 173, 0.80)', // 79% opacity
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}>
        {/* Logos for Desktop Screens */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mx-auto max-w-7x items-center text-center justify-center">
            <Image src={json} alt="JSON" width={110} height={110} className="h-20 mx-auto filter grayscale hover:filter-none transition-all" />
            <Image src={aws} alt="AWS" width={160} height={160} className="h-16 mx-auto filter grayscale hover:filter-none transition-all" />
            <Image src={excel} alt="Excel" width={150} height={150} className="h-24 mx-auto filter grayscale hover:filter-none transition-all" />
            <Image src={play} alt="Playwright" width={120} height={120} className="h-28 mx-auto filter grayscale hover:filter-none transition-all" />
            <Image src={python} alt="Python" width={160} height={160} className="h-16 mx-auto filter grayscale hover:filter-none transition-all" />
            <Image src={se} alt="SE" width={100} height={100} className="h-24 mx-auto filter grayscale hover:filter-none transition-all" />
            <Image src={soup} alt="SE" width={160} height={160} className="h-24 mx-auto filter grayscale hover:filter-none transition-all" />
          </div>
        </div>

        {/* Infinite Scrolling for Mobile Screens */}
        <div className="block md:hidden overflow-hidden">
          <div
            id="scrollContainer"
            className="flex mt-8 animate-scroll whitespace-nowrap gap-x-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={160}
                  className="h-40 w-40 object-contain mx-auto filter grayscale hover:filter-none transition-all"
                />
              </div>
            ))}

            {logos.map((logo, index) => (
              <div key={index + logos.length} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={160}
                  className="h-40 w-40 object-contain mx-auto filter grayscale hover:filter-none transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
          .paused {
            animation-play-state: paused;
          }

          @media (max-width: 640px) {
            .grid-cols-3 {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 480px) {
            .grid-cols-3 {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}</style>
      </div>
    </div>
  );
}