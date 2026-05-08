import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/39ec6d45-d70f-44ec-b524-18ad89640899/bucket/596a2576-f9d6-4e8c-9b86-67a75631db7d.jpeg"
          alt="Nebraska RP mountain"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="inline-block border border-yellow-400 text-yellow-400 text-xs uppercase tracking-widest px-4 py-1 mb-6">
          Nebraska RP • SA:MP
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 uppercase">
          NEBRASKA RP
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Живой мир, реальные истории. Стань частью крупнейшего ролевого сервера на платформе SA:MP — тысячи игроков, уникальная экономика и настоящий RP-опыт.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#join"
            className="bg-yellow-400 text-black font-bold px-8 py-3 uppercase tracking-widest text-sm hover:bg-yellow-300 transition-colors duration-300"
          >
            Начать играть
          </a>
          <a
            href="#features"
            className="border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300"
          >
            О сервере
          </a>
        </div>
      </div>
    </div>
  );
}