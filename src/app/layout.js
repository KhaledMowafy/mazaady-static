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
    
      <body className={inter.className}>
      <div className="hidden md:block">
      <Nav/>
      </div>
      <div className="fixed md:hidden">
      <MobileNav/>
      </div>
        {children}
        </body>
    </html>
  );
}
