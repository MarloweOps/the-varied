import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Varied — Production Craft. Operational Intelligence.",
  description:
    "Los Angeles production company. Commercial, music video, and branded content. Commercial production for brands that demand precision.",
  openGraph: {
    title: "The Varied — Production Craft. Operational Intelligence.",
    description:
      "Los Angeles production company. Commercial, music video, and branded content. Commercial production for brands that demand precision.",
    type: "website",
    siteName: "The Varied",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Varied",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
