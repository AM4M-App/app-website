import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AM4M - Find Love & Acceptance",
  description: "Connect with others who appreciate you for who you are. Find real connections in an ultra-connected world.",
  keywords: ["dating", "connection", "love", "acceptance", "relationships"],
  openGraph: {
    title: "AM4M - Find Love & Acceptance",
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
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
