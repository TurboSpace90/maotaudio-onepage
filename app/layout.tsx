import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://maotaudio.ru"),

  title:
    "MAOT — автомобильные аудиосистемы для BMW и других марок",

  description:
    "Аудиосистемы MAOT для установки в штатные места с сохранением заводской проводки и креплений. BMW, Mercedes, Li Auto, Zeekr и Audi. Доставка по России, установка в Москве.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "MAOT — автомобильные аудиосистемы",
    description:
      "Аудиосистемы MAOT для BMW, Mercedes, Li Auto, Zeekr и Audi. Доставка по России, установка в Москве.",

    url: "https://maotaudio.ru/",
    siteName: "MAOT Audio",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAOT — автомобильные аудиосистемы",
      },
    ],

    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MAOT — автомобильные аудиосистемы",
    description:
      "Аудиосистемы MAOT для установки в штатные места автомобиля.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}

        {/* Яндекс Метрика */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){
                  (m[i].a=m[i].a||[]).push(arguments)
                };
                m[i].l=1*new Date();
                for(var j=0;j<document.scripts.length;j++){
                  if(document.scripts[j].src===r){return;}
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

              ym(114129309, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                accurateTrackBounce: true,
                trackLinks: true
              });
            `,
          }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/114129309"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}