import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import Products from "@/components/layout/Products";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div

      className={`${geistSans.className} ${geistMono.className}  font-[family-name:var(--font-geist-sans)]`}
    >
      <Banner />
      <Products />
      <Footer />

    </div>
  );
}
