import type { Metadata } from "next";
import "./globals.css";
import CursorEffects from "@/components/CursorEffects";

export const metadata: Metadata = {
  title: "The Varied",
  description: "A creative entity. Los Angeles.",
  openGraph: {
    title: "The Varied",
    description: "A creative entity. Los Angeles.",
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
        <CursorEffects />
        {/* Content sits above spotlight layer */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
