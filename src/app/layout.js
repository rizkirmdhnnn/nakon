import { ThemeProvider } from "@/components/group/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nakoni opo wae | Nakon",
  description: "Share your link and give it to people",
  metadataBase: "nakon.vercel.app",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    description: "Share your link and give it to people",
    siteName: "nakon.vercel.app",
    title: "Nakoni opo wae | Nakon",
    url: "https://nakon.vercel.app",
    images: [
      {
        url: "http://localhost:3000/_next/image?url=%2Fsembereeee.png&w=640&q=75",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakoni opo wae | Nakon",
    description:
      "Kumpulkan berbagai pertanyaan dari siapa saja secara anonim melaui aplikasi TanyaAja. Mudah, gratis dan terjamin rahasia.",
    creator: "@rizkirmdhnn",
    site: "nako.vercel.app",
    images: [
      {
        url: "http://localhost:3000/_next/image?url=%2Fsembereeee.png&w=640&q=75",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
