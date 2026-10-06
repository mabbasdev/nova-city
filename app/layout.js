import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Nova City Islamabad | Exclusive Luxury Living & Real Estate",
  description:
    "Experience premier residential and commercial plots along the M-14 Motorway. Master-planned luxury living in the heart of Islamabad.",
  keywords: [
    "Nova City Islamabad",
    "Luxury Housing Islamabad",
    "Plots on Installments Islamabad",
    "Nova City Payment Plan",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#dd9b2a] selection:text-[#0B0B0B]">
        {children}
      </body>
    </html>
  );
}