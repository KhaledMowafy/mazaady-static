import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar/Nav";
import MobileNav from "@/components/navbar/MobileNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mazaady Static Page",
  description: "Mazaady Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="hidden md:fixed">
      <Nav/>
      </div>
      <div className="fixed md:hidden">
      <MobileNav/>
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
