import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";
import { RootLayout as AppRootLayout } from "@/components/layouts/RootLayout";
import clsx from 'clsx';
import { golosTextFont, steppeFont } from '@/fonts/steppe';

export const metadata: Metadata = {
  title: "FEMC - Far Eastern Minecraft Community",
  description: "Дальневосточный сервера майнкрафт",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(steppeFont.variable, golosTextFont.variable)}>
        <AppRootLayout>
          {children}
        </AppRootLayout>
      </body>
    </html>
  );
}
