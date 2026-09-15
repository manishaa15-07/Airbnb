import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Airbnb",
  description:
    "Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind. Entire serviced apartment · 3 guests · 1 bedroom · 1 bed · 1 bathroom.",
  openGraph: {
    title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
    description: "Entire serviced apartment in Candolim, India",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
