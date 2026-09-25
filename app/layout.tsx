import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maotaudio.ru"),

  title: "MAOT Audio — автомобильные аудиосистемы",

  description:
    "Автомобильные аудиосистемы MAOT. Установка в Москве. Доставка по всей России.",

  openGraph: {
    title: "MAOT Audio — автомобильные аудиосистемы",
    description:
      "Plug & Play аудиосистемы для BMW, Mercedes, Li, Zeekr и Audi.",
    url: "https://maotaudio.ru",
    siteName: "MAOT Audio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAOT Audio — автомобильные аудиосистемы",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MAOT Audio — автомобильные аудиосистемы",
    description:
      "Plug & Play аудиосистемы для BMW, Mercedes, Li, Zeekr и Audi.",
    images: ["/og-image.png"],
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