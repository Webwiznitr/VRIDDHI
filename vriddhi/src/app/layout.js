import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vriddhi 2023 | Sports Fest, NIT Rourkela",
  description:
    "Vriddhi 2023 | Vriddhi is the annual sports fest of NIT Rourkela, one of India's premier technical universities. It is a three-day extravaganza of sports, culture, and entertainment. The fest features a wide range of sporting events, including cricket, football, basketball, volleyball, badminton, table tennis, and more. Vriddhi is a celebration of the spirit of sportsmanship and the joy of competition. It is a festival of fun, frolic, and friendship. Vriddhi 2023 will be held from 10th to 12th November 2023.",
  keywords: [
    "vriddhi sports fest",
    "vriddhi sports day",
    "vriddhifestival",
    "vriddhi athletic meet",
    "vriddhi sports championship",
    "vriddhi games",
    "vriddhi",
    "nit Rourkela sports fest",
    "nit Rourkela sports day",
    "nit Rourkelafestival",
    "nit Rourkela athletic meet",
    "nit Rourkela sports championship",
    "nit Rourkela games",
    "nit Rourkela",
    "vriddhi 2023",
    "vriddhi sports fest 2023",
    "nit Rourkela sports fest 2023",
    "vriddhi sports fest nit Rourkela",
    "nit Rourkela sports fest nit Rourkela",
    "vriddhi nitr",
    "sports fest nitr",
    "vriddhi 2023 nitr",
    "sports fest 2023 nitr",
    "Vriddhi",
    "sports fest",
    "NIT Rourkela",
    "India",
    "sports",
    "culture",
    "entertainment",
    "cricket",
    "football",
    "basketball",
    "volleyball",
    "badminton",
    "table tennis",
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://vriddhi.co/",
    title: "Vriddhi 2023 | Sports Fest, NIT Rourkela",
    description:
      "Vriddhi 2023 | Vriddhi is the annual sports fest of NIT Rourkela, one of India's premier technical universities. It is a three-day extravaganza of sports, culture, and entertainment. The fest features a wide range of sporting events, including cricket, football, basketball, volleyball, badminton, table tennis, and more. Vriddhi is a celebration of the spirit of sportsmanship and the joy of competition. It is a festival of fun, frolic, and friendship. Vriddhi 2023 will be held from 10th to 12th November 2023. ",
    images: [
      {
        url: "https://vriddhi.co/og.png",
        width: 800,
        height: 600,
      },
    ],
    site_name: "Vriddhi 2023",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vriddhi 2023 | Sports Fest, NIT Rourkela",
    description:
      "Vriddhi 2023 | Vriddhi is the annual sports fest of NIT Rourkela, one of India's premier technical universities. It is a three-day extravaganza of sports, culture, and entertainment. The fest features a wide range of sporting events, including cricket, football, basketball, volleyball, badminton, table tennis, and more. Vriddhi is a celebration of the spirit of sportsmanship and the joy of competition. It is a festival of fun, frolic, and friendship. Vriddhi 2023 will be held from 10th to 12th November 2023. ",

    images: ["https://vriddhi.co/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
