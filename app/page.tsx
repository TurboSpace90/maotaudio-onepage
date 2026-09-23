import Image from "next/image";

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.7 3.3c-.3-.3-.8-.4-1.3-.2L2.9 9.8c-.7.3-1.1.7-1 1.2 0 .5.5.8 1.2 1l4.5 1.4 1.7 5.2c.2.6.5 1 .9 1.1.4.1.8-.1 1.2-.5l2.5-2.4 4.4 3.2c.5.4 1 .5 1.4.3.4-.2.7-.6.8-1.2l2.1-14.5c.1-.6-.1-1-.4-1.3ZM9 12.8l8.7-5.5-6.8 6.6-.3 3.2L9 12.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-5 sm:px-10 lg:px-16 xl:px-20">

        {/* HEADER */}
        <header className="flex h-[72px] flex-none items-center justify-between border-b border-[#eeeeee] sm:h-[86px]">
          <Image
            src="/images/maot-logo.png"
            alt="MAOT"
            width={125}
            height={40}
            priority
            className="h-auto w-[90px] sm:w-[120px]"
          />

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://t.me/a_leshalesha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex items-center gap-2 text-[#3e3a39] transition-colors duration-200 hover:text-[#ff6900]"
            >
              <TelegramIcon />
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.08em] xl:inline">
                Telegram
              </span>
            </a>

            <span className="h-[16px] w-px bg-[#e5e5e5]" />

            <a
              href="https://www.instagram.com/maot_audio?stkn=bmM4ZjU1YWR0dnhm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 text-[#3e3a39] transition-colors duration-200 hover:text-[#ff6900]"
            >
              <InstagramIcon />
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.08em] xl:inline">
                Instagram
              </span>
            </a>

            <span className="hidden h-[16px] w-px bg-[#e5e5e5] sm:block" />

            <a
              href="tel:+79264918988"
              className="hidden text-[11px] font-bold tracking-[0.08em] text-[#3e3a39] transition-colors duration-200 hover:text-[#ff6900] sm:block"
            >
              +7 (926) 491-89-88
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="grid flex-1 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">

          {/* LEFT */}
          <div className="relative z-10 pt-10 sm:pt-12 lg:pt-0">

            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-[6px] w-[6px] flex-none rounded-full bg-[#ff6900]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#777777] sm:text-[11px] sm:tracking-[0.2em]">
                Автомобильные аудиосистемы
              </p>
            </div>

            <h1 className="text-[46px] font-black uppercase leading-[0.88] tracking-[-0.055em] text-[#3e3a39] min-[390px]:text-[50px] sm:text-[68px] lg:max-w-[680px] lg:text-[76px] xl:text-[88px]">
              Услышь
              <br />
              автомобиль
              <br />
              <span className="text-[#ff6900]">
                по-новому.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <div className="mt-7 max-w-[570px] text-[14px] leading-[1.65] text-[#777777] sm:text-[15px] sm:leading-6">
              <p>
                Аудиосистема MAOT — готовое решение для установки в штатные
                места с сохранением заводской проводки и креплений в BMW,
                Mercedes, Li, Zeekr и Audi.
              </p>

              <p className="mt-3">
                Осуществляем доставку по всей России. Предоставляем услуги
                установки в Москве.
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-7">
              <a
                href="tel:+79264918988"
                className="group inline-flex h-[50px] items-center gap-5 rounded-full bg-[#ff6900] px-6 text-[9px] font-bold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(255,105,0,0.22)] sm:h-[52px] sm:gap-7 sm:px-7 sm:text-[10px]"
              >
                Связаться с менеджером

                <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col items-center pt-14 pb-6 lg:h-full lg:min-h-0 lg:justify-center lg:pt-0 lg:pb-0">

            {/* PRODUCT TITLE */}
            <div className="relative z-10 w-full text-center lg:absolute lg:left-0 lg:top-[8%]">
              <p className="font-black uppercase leading-[1.08] tracking-[-0.025em]">
                <span className="block text-[20px] text-[#ff6900] sm:text-[22px] lg:text-[25px] xl:text-[29px]">
                  Эксклюзивная
                </span>

                <span className="mt-1 block text-[23px] text-[#3e3a39] sm:text-[25px] lg:text-[25px] xl:text-[29px]">
                  Plug & Play система
                </span>

                <span className="block text-[23px] text-[#3e3a39] sm:text-[25px] lg:text-[25px] xl:text-[29px]">
                  улучшения звука
                </span>
              </p>
            </div>

            {/* GLOW */}
            <div className="pointer-events-none absolute left-1/2 top-[55%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,105,0,0.045)_0%,rgba(255,255,255,0)_68%)] sm:h-[520px] sm:w-[520px]" />

            {/* PRODUCT */}
            <div className="relative mt-3 h-[390px] w-full sm:h-[470px] lg:mt-10 lg:h-[520px] xl:h-[590px]">
              <Image
                src="/images/maot-kit.png"
                alt="Автомобильная аудиосистема MAOT с усилителем"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-[4%] right-0 hidden text-right lg:block">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff6900]">
                MAOT
              </p>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#bbbbbb]">
                Automotive Audio Systems
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}