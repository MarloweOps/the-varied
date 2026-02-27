import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Varied",
  description: "Creative agency and production company. Los Angeles.",
  openGraph: {
    title: "The Varied",
    description: "Creative agency and production company. Los Angeles.",
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
      <body>
        {children}
      </body>
    </html>
  );
}
