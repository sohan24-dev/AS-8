import AnimalForHome from "@/components/AnimalForHome";
import CowHealthCard from "@/components/CowHealthCard";
import Hero from "@/components/Hero";
import Tips from "@/components/Tips";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <AnimalForHome></AnimalForHome>
      <Tips></Tips>
      <CowHealthCard></CowHealthCard>
    </div>
  );
}
