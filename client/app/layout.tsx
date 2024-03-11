import type { Metadata } from "next";
import "tailwindcss/tailwind.css";

export const metadata: Metadata = {
  title: "Middas - Mercedes Poisson",
  description: "Prueba Técnica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins text-middasyellow">{children}</body>
    </html>
  );
}
