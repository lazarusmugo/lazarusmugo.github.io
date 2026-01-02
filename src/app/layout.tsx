import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";

export const metadata: Metadata = {
  title: "Lazarus Mugo",
  description: "Personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
