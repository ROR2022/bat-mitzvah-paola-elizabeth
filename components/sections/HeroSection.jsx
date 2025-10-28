// 🏠 HeroSection - Sección principal/portada

import React, { useEffect, useState } from "react";
//import Image from 'next/image'
import { Heart } from "lucide-react";
import { quinceMainData } from "@/components/sections/data/main-data";
import BackgroundCarrousel from "../../components/sections/BackgroundCarrousel";
//import { getOverlayStyle } from '@/utils/overlay'
//import { useScrollAnimation } from '@/hooks/useScrollAnimation'
//import { getAnimationConfig } from '@/data/animationConfig'

export default function HeroSection() {
  //const { couple, wedding } = weddingData;
  //const { heroSection } = styling
  const { hero } = quinceMainData;
  const { backgroundCarrouselImages } = hero;
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(false);

  const basicClass = "font-script text-4xl text-sky-700 mb-4 italic";
  const completeClass =
    "font-script text-4xl text-sky-700 mb-4 scale-up-center italic";

  useEffect(() => {
    const handleScroll = () => {
      //console.log('Scroll position:', window.scrollY);
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 0 && scrollPosition < 300) {
      setIsVisible(true);
    }
  }, [scrollPosition]);

  return (
    <section
      //ref={sectionRef}
      style={{
        backgroundImage: `url('/images/marcoFlores1.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        //backgroundColor: "#89ac76",
        position: "relative",
      }}
      //id="home"
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      {/* <BackgroundCarrousel images={backgroundCarrouselImages}/> */}

      {/* Contenido principal - Usar solo animación CSS, no scroll-based */}
      <div
        style={
          {
            //backgroundColor:'#C8BFE780'
          }
        }
        className="flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 lg:py-40"
      >
        <h1
          style={{
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
            display: "none",
          }}
          className={isVisible ? completeClass : basicClass}
        >
          {hero.subtitle.split(" ").map((word, index) => (
            <span key={index}>
              {index === 1 ? <span className="italic">{word}</span> : word}
              {index < hero.subtitle.split(" ").length - 1 && " "}
            </span>
          ))}
        </h1>

        <div className="space-y-2">
          <div
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
            }}
            className="text-6xl text-amber-500 font-main-text"
          >
            {hero.name}
          </div>
        </div>

        

        
      </div>
    </section>
  );
}
