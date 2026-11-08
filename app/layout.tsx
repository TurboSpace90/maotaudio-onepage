import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}