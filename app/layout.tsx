import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Providers } from "./providers";
import DevBanner from "./components/DevBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Xiaolongbao | BostonHacks Judging Site',
    template: '%s | Xiaolongbao'
  },
  description: "BostonHacks Judging Site",
  keywords: ["bostonhacks", "judging", "site", "hackathon", "projects"],
  openGraph: {
    title: 'Xiaolongbao',
    description: 'BostonHacks Judging Site',
    url: 'https://judging.bostonhacks.org',
    siteName: 'Xiaolongbao',
    // images: [
    //   {
    //     url: 'https://yourdomain.com/og-image.jpg',
    //     width: 1200,
    //     height: 630
    //   }
    // ],
    locale: 'en_US',
    type: 'website'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // dunnot how i feel about this line
    <html lang="en" suppressHydrationWarning> 

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <DevBanner />
          <Navbar />
          <main className="md:ml-40 ml-0 mt-15 md:mt-0">
            {children}

          </main>

        </Providers>
        {/* <Navbar />
        {children} */}
      </body>
    </html>
  );
}
