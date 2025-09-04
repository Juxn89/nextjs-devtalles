import type { Metadata } from "next";
import { inter } from '@/config/fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Teslo Shop - Your one-stop shop for the latest and greatest in tech and fashion.",
};

interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${inter.className } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
