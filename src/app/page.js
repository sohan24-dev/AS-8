import AnimalForHome from "@/components/AnimalForHome";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-6">
      <Hero></Hero>
      <AnimalForHome></AnimalForHome>
    </div>
  );
}
