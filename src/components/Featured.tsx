const features = [
  { icon: "🏙️", title: "Живой город", desc: "Динамичный мир с реальной экономикой, бизнесом и недвижимостью" },
  { icon: "👮", title: "Фракции и банды", desc: "Полиция, мафия, армия — выбери свою сторону и построй карьеру" },
  { icon: "💼", title: "Работа и карьера", desc: "Десятки профессий: от таксиста до олигарха. Всё честно заработано" },
  { icon: "🎭", title: "Настоящий RP", desc: "Строгое соблюдение RP-правил, опытные администраторы 24/7" },
  { icon: "🏆", title: "Ивенты и турниры", desc: "Еженедельные события с реальными призами внутри игры" },
  { icon: "🔧", title: "Уникальные скрипты", desc: "Собственные разработки: авто, дома, оружие, магазины" },
];

export default function Featured() {
  return (
    <div id="features" className="min-h-screen px-6 py-20 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-yellow-400">Почему именно мы</h3>
        <p className="text-3xl lg:text-5xl mb-16 text-white leading-tight font-bold max-w-2xl">
          Всё, что делает RP-игру настоящей — уже здесь.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="border border-neutral-800 p-6 hover:border-yellow-400 transition-colors duration-300">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-2">{f.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}