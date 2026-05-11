import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const series = [
  "Все",
  "Глазами мамы / глазами дочки",
  "Красивые вещи",
  "Оставить свой след...",
  "Внутренний свет",
  "Отдельные работы",
];

const works = [
  {
    id: 1,
    title: "Вождь",
    year: "2024",
    series: "Отдельные работы",
    medium: "Холст на картоне, акрил, масло",
    size: "40 × 60 см",
    image: "/images/vozhd.jpg",
    images: ["/images/vozhd.jpg"],
    description:
      "На красном фоне изображен полуабстрактный портрет: различимы черты лица, силуэт, элементы мундира. Большая часть изображения составлена из фрагментов, напоминающих плоть, части тела, рентгеновские снимки.\n\nЯрко красный цвет фона — это цвет тревоги и опасности, но также мобилизации и борьбы.\nОбраз балансирует между узнаваемостью и распадом, между целостностью и фрагментарностью.\n\nРабота обращается к теме власти, насилия и исторической памяти. Визуальный язык построен на сочетании человеческого и обезличенного, телесного и механического, что усиливает внутреннее напряжение образа.",
  },
  {
    id: 2,
    title: "«Красоты» Алтая",
    year: "2025",
    series: "Оставить свой след...",
    medium: "Холст, масло",
    size: "140 × 90 см",
    image: "/images/krasoty-altaya.jpg",
    images: ["/images/krasoty-altaya.jpg"],
    description:
      "На картине изображен пейзаж Алтая: солнечный летний день, горный ландшафт перевала Чике-Таман, вид с возвышенности. На поверхности ландшафта видны надписи.\n\nПроизведение фиксирует столкновение природной среды и человеческого вмешательства. Живописное изображение включает в себя реальные следы вандализма человека, которые становятся неожиданной частью композиции.\n\nИдея выразить проблему вандализма через живопись пришла ко мне через личный опыт путешествия по этим местам, где впечатление от природной красоты смешалось с наблюдением за её изменением под воздействием человека.",
  },
  {
    id: 3,
    title: "Натюрморт",
    year: "2024",
    series: "Отдельные работы",
    medium: "Холст, масло",
    size: "80 × 100 см",
    image: "/images/natyurmort.jpg",
    images: ["/images/natyurmort.jpg"],
    description:
      "На картине изображен белый стол на фоне белой кафельной стены. На столе — композиция из различных медицинских предметов, связанных с детской стоматологией: модели челюстей, бокс с борами, лампа, эндомотор, маска для седации, блестящие стальные гладилки и зеркало, хирургические щипцы, россыпь удаленных зубов, марлевые тампоны со следами крови, а также детский рисунок, модель детского черепа, поп-ит и мягкая игрушка-медведь с огромными зубами для демонстрации правильной техники чистки зубов детям.\n\nКартина представляет собой нетипичный натюрморт, в котором соединяются предметы, вызывающие сложные и противоречивые ассоциации. Холодный свет, резкие тени, стерильность пространства и блеск инструментов создают ощущение отстраненности, равнодушия. Чувство тревоги и эмоциональное напряжение подчеркивается хирургическими щипцами, кровавыми марлями и удаленными зубами в контрасте с атрибутами детской игры. \n\nЯ — детский стоматолог по первому образованию. Это произведение — мое восприятие той части жизненного пути. Работа в медицине, работа с детьми — это всегда столкновение альтруизма, эмоциональной обнаженности, доброжелательности и страха, тревоги, боли, сопротивления.",
  },
  {
    id: 4,
    title: "Шторка для ванной",
    year: "2026 (не окончена, в процессе создания)",
    series: "Красивые вещи",
    medium: "Холст, масло",
    size: "150 × 150 см",
    image: "/images/shtorka-dlya-vannoy.jpg",
    images: ["/images/shtorka-dlya-vannoy.jpg"],
    description:
      "На холсте изображена копия картины Боттичелли\n«Рождение Венеры», нарисованная в виде шторки для ванной. Слева — фигура пожилой женщины в банном полотенце, выходящей из ванны.\n\nКлассический образ оказывается перенесён в бытовой контекст и деформируется складками ткани. В работе сосуществуют идеализированное изображение и повседневная телесность.\n\nПроизведение продолжает исследование темы трансформации представлений о красоте в повседневности.",
  },
  {
    id: 5,
    title: "Настенный календарь",
    year: "2025",
    series: "Красивые вещи",
    medium: "Холст, масло",
    size: "50 × 70 см",
    image: "/images/nastenny-kalendar.jpg",
    images: [
      "/images/nastenny-kalendar.jpg",
      "/images/nastenny-kalendar-detail-1.jpg",
      "/images/nastenny-kalendar-detail-2.jpg",
    ],
    description:
      "На картине изображена стена с выцветшими обоями в цветочек и висящий на ней календарь с изображением тропического пейзажа. Рядом — связка ключей.\n\nПервоначально внимание сосредотачивается на пейзаже, однако по мере рассматривания становится очевидно, что пейзаж — это часть бытового предмета.\n Работа исследует, каким образом представления о красоте включаются в повседневную среду и трансформируются в ней.",
  },
  {
    id: 6,
    title: "Будь светом самому себе",
    year: "2025",
    series: "Внутренний свет",
    medium: "МДФ, пластик PLA, ткань, светодиодные лампы, прожектор, акрил",
    size: "120 × 210 см",
    image: "/images/bud-svetom.jpg",
    images: [
      "/images/bud-svetom.jpg",
      "/images/bud-svetom-detail-1.jpg",
      "/images/bud-svetom-detail-2.jpg",
    ],
    coauthor: "Полина Шапкина, Илья Ершов",
    description:
      "На фоне пейзажа с водой и деревьями изображена фигура человека, протягивающего руки вперёд. Руки — скульптурный элемент, выходящий за пределы плоскости. Перед фигурой расположена гирлянда лампочек, одна из которых находится в руках персонажа и светится ярче остальных. На лампочках надпись: «Будь светом самому себе». Силуэт человека выполнен из полупрозрачного материала и взаимодействует со светом, меняясь в зависимости от освещения.\n\nИнсталляция обращается к теме внутреннего ресурса и способности человека влиять на своё состояние и окружающее пространство.",
  },
  {
    id: 7,
    title: "Автопортрет",
    year: "2024",
    series: "Внутренний свет",
    medium: "Холст на картоне, акрил, масло, гипс",
    size: "60 × 60 см",
    image: "/images/avtoportret.jpg",
    images: [
      "/images/avtoportret.jpg",
      "/images/avtoportret-detail-1.jpg",
      "/images/avtoportret-detail-2.jpg",
      "/images/avtoportret-detail-3.jpg",
      "/images/avtoportret-detail-4.jpg",
      "/images/avtoportret-detail-5.jpg",
      "/images/avtoportret-detail-6.jpg",
    ],
    description:
      "На картине изображен портрет девушки в теплых желтых тонах на темном фоне. Руки и часть лица — скульптурные элементы, выступающие за пределы холста.\n\nВыражение лица — сосредоточенное и отрешённое, взгляд направлен в пространство перед собой. Руки разведены, как будто в поиске. Свет выхватывает фигуру из темноты, создавая ощущение выхода из неё.\n\nЯ создавала этот автопортрет в период изменения жизненного пути в состоянии поиска и неопределённости. Объёмные элементы усиливают эффект присутствия, переводят изображение из плоскости в пространство, буквально вынося живопись из мира картины в наш реальный мир.",
  },
  {
    id: 8,
    title: "В школе",
    year: "2025",
    series: "Глазами мамы / глазами дочки",
    medium: "Холст, масло, масляная пастель",
    size: "145 × 95 см",
    image: "/images/v-shkole.jpg",
    images: [
      "/images/v-shkole.jpg",
      "/images/v-shkole-detail-1.jpg",
      "/images/v-shkole-detail-2.jpg",
      "/images/v-shkole-detail-3.jpg",
      "/images/v-shkole-detail-4.jpg",
    ],
    description:
      "На картине изображен школьный класс с типичной обстановкой российской школы начала 2000-х гг. За партами сидят ученики младших классов. Помимо предметов и персонажей, выполненных в реалистичной манере, на картине изображены персонажи детских рисунков, написанные в наивной экспрессивной манере, яркими чистыми цветами.\n\nЭто произведение из серии «Глазами мамы / глазами дочки» — продолжение разговора о разности взгляда на реальность взрослого и ребенка. Выразительность картины также построена на контрасте между взрослой, реалистической живописью и детской манерой рисования.",
  },
  {
    id: 9,
    title: "В песочнице",
    year: "2025",
    series: "Глазами мамы / глазами дочки",
    medium: "Холст, масло, масляная пастель",
    size: "100 × 80 см",
    image: "/images/v-pesochnitse.jpg",
    images: [
      "/images/v-pesochnitse.jpg",
      "/images/v-pesochnitse-detail-1.jpg",
      "/images/v-pesochnitse-detail-2.jpg",
    ],
    description:
      "На холсте изображен типовой многоэтажный дом, двор с песочницей, в песочнице — маленький ребенок. Вокруг песочницы расположены персонажи с детских рисунков, выполненные в наивной экспрессивной манере, яркими, чистыми цветами.\n\nКонтраст между двумя визуальными языками формирует напряжение между разными способами восприятия мира.\n\nСерия «Глазами мамы / глазами дочки», к которой относится это произведение, — это моя личная история. Я использую свои воспоминания и свой фотоархив, а детские рисунки создает моя шестилетняя дочка. Эти картины — результат нашего равноправного диалога и сотворчества.",
  },
  {
    id: 10,
    title: "Под грибочком",
    year: "2026",
    series: "Глазами мамы / глазами дочки",
    medium: "Холст на картоне, масло, масляная пастель",
    size: "40 × 60 см",
    image: "/images/pod-gribochkom.jpg",
    images: ["/images/pod-gribochkom.jpg"],
    description:
      "Абстрактная композиция с включёнными фигуративными элементами — фрагментом песочницы с зонтиком-«грибочком» и фигурой ребёнка.\n\nЭто произведение относится к серии «Глазами мамы / глазами дочки». Работа создана в два этапа: сначала абстрактную часть выполнила моя дочка, затем я встроила в неё элементы собственной визуальной памяти.",
  },
];

const statement = [
  "Художница исследует человеческую природу через саморефлексию, память, наблюдение. В её практике важную роль играют контрасты и противопоставления как способ высказывания.",
  "Она работает преимущественно с живописью, но также обращается к скульптуре и пространственным формам, расширяя границы изображения. В её работах различные уровни реальности могут наслаиваться друг на друга или выходить за пределы плоскости.",
  "В серии “Глазами мамы / глазами дочки” художница исследует изменение восприятия мира с возрастом, объединяя собственные воспоминания и визуальный язык ребёнка.",
  "В серии “Красивые вещи” внимание сосредоточено на том, как представления о красоте трансформируются в повседневном быте.",
  "Практика художницы связана с исследованием внутреннего состояния человека, эмоций и психологических процессов в современном контексте.",
];

function runDataTests() {
  console.assert(Array.isArray(works), "works должен быть массивом");
  console.assert(works.length === 10, "В портфолио должно быть 10 работ");
  console.assert(statement.length === 5, "Artist Statement должен содержать 5 абзацев");
  console.assert(
    works.every((work) => work.title && work.year && work.series && work.medium && work.size && work.image && work.description),
    "У каждой работы должны быть заполнены основные поля"
  );
  console.assert(
    works.every((work) => series.includes(work.series)),
    "Серия каждой работы должна присутствовать в списке фильтров"
  );
  console.assert(
    works.every((work) => Array.isArray(work.images) && work.images.length > 0),
    "У каждой работы должен быть массив изображений"
  );
}

runDataTests();

export default function App() {
  const [activeSeries, setActiveSeries] = useState("Все");
  const [selectedWork, setSelectedWork] = useState(works[0]);
  const [selectedImage, setSelectedImage] = useState(works[0].image);

  const filteredWorks = useMemo(() => {
    return activeSeries === "Все"
      ? works
      : works.filter((work) => work.series === activeSeries);
  }, [activeSeries]);

  const chooseWork = (work) => {
    setSelectedWork(work);
    setSelectedImage(work.image);
  };

  const handleSeriesChange = (name) => {
    setActiveSeries(name);
    const first = name === "Все" ? works[0] : works.find((work) => work.series === name);
    if (first) chooseWork(first);
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#191919]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f1ea]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="#home" className="text-lg tracking-wide">
            Полина Шапкина
          </a>
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] text-black/55 md:flex">
            <a className="hover:text-black" href="#works">Работы</a>
            <a className="hover:text-black" href="#statement">Statement</a>
            <a className="hover:text-black" href="#contact">Контакты</a>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end"
        >
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-black/45">
              Живопись · объект · инсталляция
            </p>
            <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-[-0.055em] md:text-7xl">
              Исследование памяти, телесности и внутреннего состояния человека.
            </h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-black/65">
            Полина Шапкина работает с живописью, скульптурными элементами и пространственными формами, соединяя личный опыт, наблюдение и разные уровни визуальной реальности.
          </p>
        </motion.div>
      </section>

      <section id="works" className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8 flex flex-col gap-6 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.22em] text-black/45">Portfolio</p>
            <h2 className="text-3xl font-light tracking-[-0.03em]">Работы</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {series.map((name) => (
              <button
                key={name}
                onClick={() => handleSeriesChange(name)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                  activeSeries === name
                    ? "border-black bg-black text-white"
                    : "border-black/15 text-black/55 hover:border-black/40 hover:text-black"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-1 lg:sticky lg:top-24 lg:self-start">
            {filteredWorks.map((work) => (
              <button
                key={work.id}
                onClick={() => chooseWork(work)}
                className={`w-full border-b border-black/10 py-5 text-left transition ${
                  selectedWork.id === work.id ? "opacity-100" : "opacity-50 hover:opacity-100"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-light">{work.title}</h3>
                    <p className="mt-1 text-sm text-black/45">{work.series}</p>
                  </div>
                  <span className="shrink-0 text-sm text-black/45">{work.year}</span>
                </div>
              </button>
            ))}
          </div>

          <motion.article
            key={selectedWork.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid gap-7"
          >
            <div className="overflow-hidden rounded-2xl bg-black/5 shadow-sm">
              <img
                src={selectedImage}
                alt={selectedWork.title}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>

            {selectedWork.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {selectedWork.images.map((image) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(image)}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border transition ${
                      selectedImage === image ? "border-black" : "border-black/10 opacity-65 hover:opacity-100"
                    }`}
                    aria-label={`Показать изображение работы ${selectedWork.title}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-[0.35fr_0.65fr]">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-black/40">{selectedWork.series}</p>
                <h3 className="text-3xl font-light tracking-[-0.03em]">{selectedWork.title}</h3>
                {selectedWork.coauthor && <p className="mt-2 text-sm text-black/55">{selectedWork.coauthor}</p>}
                <p className="mt-4 text-sm leading-6 text-black/55">
                  {selectedWork.year}<br />
                  {selectedWork.medium}<br />
                  {selectedWork.size}
                </p>
              </div>
              <p className="whitespace-pre-line text-lg font-light leading-8 text-black/68">
                {selectedWork.description}
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section id="statement" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.22em] text-black/45">Artist Statement</p>
            <h2 className="text-3xl font-light tracking-[-0.03em]">О практике</h2>
          </div>
          <div className="space-y-6 text-xl font-light leading-9 text-black/70">
            {statement.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-2xl border border-black/10 p-8 md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-black/45">Контакты</p>
          <h2 className="mb-8 max-w-3xl text-3xl font-light tracking-[-0.03em] md:text-5xl">
            Для выставочных предложений, сотрудничества и запросов о работах.
          </h2>
          <div className="flex flex-col gap-3 text-lg text-black/70 md:flex-row md:gap-8">
            <a className="hover:text-black" href="mailto:polinashapkina94@gmail.com">
              polinashapkina94@gmail.com
            </a>
            <a className="hover:text-black" href="https://www.instagram.com/polinashapkinaartist" target="_blank" rel="noreferrer">
              @polinashapkinaartist
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-8 text-center text-sm text-black/45">
        © 2026 Полина Шапкина
      </footer>
    </main>
  );
}
