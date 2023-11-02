import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vriddhi 2023 | Sports Fest, NIT Rourkela",
  description: "Vriddhi 2023",
  keywords: [
    "vriddhi sports fest",
    "vriddhi sports day",
    "vriddhi athletics festival",
    "vriddhi athletic meet",
    "vriddhi sports championship",
    "vriddhi games",
    "vriddhi athletics",
    "nit Rourkela sports fest",
    "nit Rourkela sports day",
    "nit Rourkela athletics festival",
    "nit Rourkela athletic meet",
    "nit Rourkela sports championship",
    "nit Rourkela games",
    "nit Rourkela athletics",
    "vriddhi 2023",
    "vriddhi sports fest 2023",
    "nit Rourkela sports fest 2023",
    "vriddhi sports fest nit Rourkela",
    "nit Rourkela sports fest nit Rourkela",
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://vriddhi.co/",
    title: "Vriddhi 2023 | Sports Fest, NIT Rourkela",
    description: "Vriddhi 2023",
    image: "https://vriddhi.co/all_logo.png",
    site_name: "Vriddhi 2023",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vriddhi 2023 | Sports Fest, NIT Rourkela",
    description: "Vriddhi 2023",
    images: {
      url: "https://scontent.cdninstagram.com/v/t51.2885-15/313200299_618437863408828_5576021069347345303_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=3LSBoD6xeKYAX8Q3j3L&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDOaDftBGG9Q4KZI5vxlFVWs3BY_a8wjwdtz7H1ux3Ymg&oe=65491E91&_nc_sid=10d13b",
      alt: "Vriddhi 2023 | Sports Fest, NIT Rourkela",
    },
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
