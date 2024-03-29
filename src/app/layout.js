import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ClipCaptions",
  description: "Add captions to your clips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-blue-700 to-cyan-600 min-h-screen text-white"}>{children}</body>
    </html>
  );
}