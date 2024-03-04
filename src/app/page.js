import { Nunito } from "next/font/google";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Tab from "@/components/atoms/Tab";
import HThree from "@/components/atoms/HThree";
import Links from "@/components/atoms/Links";
import InfoCard from "@/components/atoms/InfoCard";
import profile from "@/components/assets/profile.svg";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700']
})
export default function Home() {
  return (
    <main className={`flex min-h-screen items-center justify-between p-24 ${nunito.className}`}>
        <Links className="text-pink font-bold">
          Home
        </Links>
        <Links className="text-gray font-normal">
          Blog
        </Links>
        <Button>Submit</Button>
        <Tab>Products</Tab>
        <HThree>
          Hala Ahmed
        </HThree>
        <Text>I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.</Text>
        <InfoCard img="/profile.svg" Bnumber={5} text='following' />
    </main>
  );
}
