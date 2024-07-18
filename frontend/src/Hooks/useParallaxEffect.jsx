// Add this in a useEffect hook or script tag in your component
import { useEffect } from "react";

const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const hero = document.querySelector(".header-content");
      hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useParallaxEffect;
