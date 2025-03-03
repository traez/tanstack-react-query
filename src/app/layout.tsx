import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { TanstackProvider } from "@/lib/TanstackProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tanstack React Query",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased flex flex-col justify-center items-center min-h-screen w-full font-trebuchetMs bg-[#b0bbba]">
        <TanstackProvider>
          <Header />
          <main className="flex-grow h-full w-full max-w-[1440px] bg-white">
            {children}
          </main>
          <Footer />
        </TanstackProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
