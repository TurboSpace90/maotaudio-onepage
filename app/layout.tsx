import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAOT Audio — автомобильные аудиосистемы",
  description:
    "Автомобильные аудиосистемы MAOT. Установка в Москве. Доставка по всей России.",
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