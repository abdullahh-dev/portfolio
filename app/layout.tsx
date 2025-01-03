import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import CustomCursor from "./components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Abdullah",
  description: "Potfolio Website of Muhammad Abdullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <div className="bg-grid-pattern bg-[size:25px_25px] min-h-screen flex items-center justify-center">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
