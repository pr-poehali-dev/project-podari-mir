import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <h3 className="absolute top-12 right-6 text-yellow-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Онлайн прямо сейчас
      </h3>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-6">
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-yellow-400">1 200+</div>
          <div className="text-white uppercase text-xs tracking-widest mt-1">Игроков онлайн</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-yellow-400">50+</div>
          <div className="text-white uppercase text-xs tracking-widest mt-1">Фракций</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-yellow-400">5 лет</div>
          <div className="text-white uppercase text-xs tracking-widest mt-1">На рынке</div>
        </div>
      </div>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10 text-right font-bold">
        Твоя история начинается здесь. Войди — и стань легендой <span className="text-yellow-400">Nebraska RP</span>.
      </p>
    </div>
  );
}