import { Nunito } from "next/font/google";
import ProfileCard from "@/components/molecules/ProfileCard";
import QRCode from "@/components/molecules/QRCode";
import Wall from "@/components/molecules/Wall";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});
export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-between p-20 ${nunito.className}`}
    >
      <div className="flex w-full mt-8">
        <div className="w-407 flex flex-col mr-8">
          <ProfileCard />
          <QRCode />
        </div>
        <div className="w-4/5">
          <Wall />
        </div>
      </div>
    </main>
  );
}
