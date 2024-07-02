import { ThemeProvider } from "@/components/group/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nakoni opo wae | Nakon",
  description: "Share your link and give it to people to get surprised",
  metadataBase: "nakon.vercel.app",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    description: "Share your link and give it to people to get surprised",
    siteName: "nakon.vercel.app",
    title: "Nakoni opo wae | Nakon",
    url: "https://nakon.vercel.app",
    images: [
      {
        url: "https://nakon.vercel.app/sembereeee.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakoni opo wae | Nakon",
    description: "Share your link and give it to people to get surprised",
    creator: "@rizkirmdhnn",
    site: "nako.vercel.app",
    images: [
      {
        url: "https://nakon.vercel.app/sembereeee.png",
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
          defaultTheme="dark"
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
