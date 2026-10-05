import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Questrial } from "next/font/google";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lazarus Mugo | Mobile Engineer",
  description:
    "Mobile engineer specializing in Kotlin, Kotlin Multiplatform, Jetpack Compose, and Compose Multiplatform, with a background in frontend and UI and UX design.",
  keywords: [
    "Lazarus Mugo",
    "Mobile Engineer",
    "Android Engineer",
    "Kotlin Multiplatform",
    "Jetpack Compose",
    "Compose Multiplatform",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${questrial.className}`}>
        {children}
      </body>
    </html>
  );
}
