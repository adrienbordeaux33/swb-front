import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Street Workout Bordeaux",

  description: "Association & Team Street Workout Bordeaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/lettering.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
