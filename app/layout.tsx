import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import { LanguageProvider } from '@/context/LanguageContext';


const sharpSans = localFont({
  src: [
    {
      path: '../fonts/Sharp-Sans-Extrabold.otf',
      weight: '800',
      style: 'normal',
    },

    {
      path: '../fonts/Sharp-Sans-Light.otf',
      weight: '300',
      style: 'normal',
    },

    {
      path: '../fonts/Sharp-Sans-Medium.otf',
      weight: '500',
      style: 'normal',
    },

    {
      path: '../fonts/Sharp-Sans-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Sharp-Sans-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Sharp-Sans.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SharpSansBold.otf',
      weight: '700',
      style: 'normal',
    },
    // Add more font variations as needed
  ],
});

export const metadata: Metadata = {
  title: "Paysano",
  description: "Near to nature",
};

export default function RootLayout({
  children, }
  : Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={sharpSans.className} >{children}</body>
      </LanguageProvider>
    </html>
  );
}
