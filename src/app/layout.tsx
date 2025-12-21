import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM4M - Accept Me 4 Me | Find Love & Acceptance",
  description: "Connect with others who appreciate you for who you are. Find real connections in an ultra-connected world. Where authenticity meets belonging.",
  keywords: ["dating", "connection", "love", "acceptance", "relationships", "authentic", "community"],
  openGraph: {
    title: "AM4M - Accept Me 4 Me",
    description: "Connect with others who appreciate you for who you are.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Satoshi - Modern geometric sans-serif */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=cabinet-grotesk@700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
