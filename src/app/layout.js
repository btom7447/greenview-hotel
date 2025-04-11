import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";

import { Open_Sans, Playfair_Display } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Greenview Hotel LTD",
  description: "At Greenview Hotel LTD, we redefine hospitality by offering a luxurious, relaxing and unforgettable experience tailored to your comfort.",
  keywords: ["hotel", "luxury stay", "vacation", "resort"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfair.variable} antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
