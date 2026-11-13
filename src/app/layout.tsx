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
  title: "Lazarus Mugo | Android & iOS App Developer",
  description:
    "Mobile app development and consulting for founders, small businesses, and product teams. Android, iOS, app improvements, and ongoing maintenance.",
  keywords: [
    "Lazarus Mugo",
    "Mobile Engineer",
    "Android Developer",
    "iOS Developer",
    "Mobile App Consultant",
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
      <body className={`${quicksand.variable} ${questrial.variable}`}>
        {children}
      </body>
    </html>
  );
}
