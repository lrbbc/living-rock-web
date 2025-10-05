import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Fade Transition */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Church hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-primary-foreground/90 text-sm md:text-base tracking-[0.3em] mb-4 animate-fade-in uppercase">
          Church Theme
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in text-shadow-lg">
          JOIN THE PRAYER
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mb-12 animate-fade-in leading-relaxed">
          Visit your local church and become a part of the flock by contributing to
          <br className="hidden md:block" />
          the community in any way you possibly can.
        </p>
        <Button
          onClick={scrollToContent}
          variant="outline"
          size="lg"
          className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 px-12 py-6 text-base tracking-wider animate-fade-in"
        >
          SEE MORE
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
