import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import { Open_Sans, Playfair_Display } from "next/font/google";
import { Provider } from "react-redux";
import { ReduxProvider } from "@/store/ReduxProvider";

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
  openGraph: {
    title: "Greenview Hotel LTD",
    description: "Experience luxury and comfort at Greenview Hotel LTD.",
    url: "https://greenviewhotelltd.com",
    images: [
      {
        url: "https://greenviewhotelltd.com/images/greenview-logo.png",
        width: 800,
        height: 600,
        alt: "Greenview Hotel Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenview Hotel LTD",
    description: "Experience luxury and comfort at Greenview Hotel LTD.",
    image: "https://greenviewhotelltd.com/images/greenview-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfair.variable} antialiased`}
      >
        <ReduxProvider>
          <Header />
            {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            zindex={9999}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
