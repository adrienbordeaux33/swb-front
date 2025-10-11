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
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
// le suppressHydrationWarning={true} est pour eviter l'erreur de react qui dit que le html genere par le serveur est different de celui genere par le client. Cela peut arriver si on utilise des choses qui changent entre le serveur et le client, comme des dates ou des heures. Ici, on n'en a pas besoin, mais c'est pour eviter l'erreur si jamais on en ajoute plus tard.
