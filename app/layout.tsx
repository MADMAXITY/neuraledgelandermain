import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/layout/navigation";
import "./app.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NeuralEdge | AI Automation Solutions",
    template: "%s | NeuralEdge",
  },
  description: "Integrated AI agents that do the robot work so your team can do the human work. Production-ready AI automation for Social Media, SaaS, and Real Estate.",
  keywords: ["AI automation", "AI agents", "custom AI solutions", "n8n automation", "LLM operations", "production AI systems", "workflow automation"],
  authors: [{ name: "NeuralEdge" }],
  creator: "NeuralEdge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuraledge.live",
    siteName: "NeuralEdge",
    title: "NeuralEdge | AI Automation Solutions",
    description: "Integrated AI agents that do the robot work so your team can do the human work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuralEdge - AI Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralEdge | AI Automation Solutions",
    description: "Integrated AI agents that do the robot work so your team can do the human work.",
    images: ["/og-image.png"],
    creator: "@neuraledge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/nefavicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/nefavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* Noise texture overlay for subtle texture */}
        <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4' /%3E%3C/svg%3E")`
          }}
        />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
