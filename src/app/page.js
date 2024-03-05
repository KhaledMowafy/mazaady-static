import { Nunito } from "next/font/google";
import ProfileCard from "@/components/molecules/ProfileCard";
import QRCode from "@/components/molecules/QRCode";
import Wall from "@/components/molecules/Wall";
import MobileQRCode from "@/components/molecules/MobileQRCode";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-between px-3 py-20 md:px-20 ${nunito.className}`}
    >
      <div className="flex flex-col w-full mt-8 md:flex-row">
        <div className=" w-full flex flex-col mr-8 md:w-407">
          <ProfileCard />
          <div className="md:hidden">
            <MobileQRCode/>
          </div>
        <div className="hidden md:block">
          <QRCode />
          </div>
        </div>
        <div className="w-full mt-8 md:w-4/5 md:mt-0">
          <Wall />
        </div>
      </div>
    </main>
  );
}
