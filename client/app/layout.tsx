import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
import Header from "@/app/ui/header";

export const metadata: Metadata = {
  title: "Middas - Mercedes Poisson",
  description: "Prueba Técnica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="flex flex-col h-screen">
//       <Header />
//       <div className="flex-grow overflow-y-auto">
//         <div className="w-full mx-4 sm:mx-auto">
//           <body>{children}</body>
//         </div>
//       </div>
//     </html>
//   );
// }
