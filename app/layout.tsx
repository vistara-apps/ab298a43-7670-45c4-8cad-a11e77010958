import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "BIM Reality Reporter",
  description: "On-chain construction discrepancy reporting & team coordination on Base",
  openGraph: {
    title: "BIM Reality Reporter",
    description: "On-chain construction discrepancy reporting & team coordination on Base",
    images: ["/og-image.png"],
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
