import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// components
import Navbar from "./components/Navbar";

export const metadata = {
  title: "MyProject Dashboard",
  description: "A colorful productivity dashboard for modern professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
