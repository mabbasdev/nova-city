import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://novacitypk.vercel.app'),
  title: 'Nova City Islamabad | Premium Housing Project',
  description: 'Experience luxury living and modern architecture at Nova City Islamabad. Strategic location with world-class amenities.',
  openGraph: {
    title: 'Nova City Islamabad | Premium Housing Project',
    description: 'Experience luxury living and modern architecture at Nova City Islamabad. Strategic location with world-class amenities.',
    url: 'https://novacitypk.vercel.app',
    siteName: 'Nova City Islamabad',
    images: [
      {
        url: '/og-image.jpg', // Place og-image.jpg in your public folder
        width: 1200,
        height: 630,
        alt: 'Nova City Islamabad Preview Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova City Islamabad | Premium Housing Project',
    description: 'Experience luxury living and modern architecture at Nova City Islamabad.',
    images: ['/og-image.jpg'],
  },
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