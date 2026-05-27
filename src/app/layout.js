import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "JEEvant Classes | JEE Mains, Jee Advance, NEET & CBSE Coaching Institute",
  description:
    "JEEvant Classes provides expert coaching for JEE, NEET and CBSE students with experienced faculty, excellent results and personal guidance.",

  keywords: [
    "JEE coaching",
    "NEET coaching",
    "CBSE coaching",
    "JEEvant Classes",
    "Coaching Institute",
    "Noida coaching",
    "Noida Sec-104, Sec-110, Sec-93 coaching"
  ],

  openGraph: {
    title: "JEEvant Classes",
    description:
      "Best Coaching Institute for JEE, NEET & CBSE Preparation",
    url: "https://www.jeevantclasses.com",
    siteName: "JEEvant Classes",
    locale: "en_IN",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

