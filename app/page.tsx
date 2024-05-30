import Image from "next/image";
import Hero from "@/components/Hero";
import Skill from "@/components/Skills";
import Encyption from "@/components/Encyption"
import Projects from "@/components/Projects";

export default function Home() {
  return (
     <main className="h-full , w-full">
      <div className=" flex flex-col gap-20">
    <Hero/>
<Skill/>
<Encyption/>
<Projects/>

      </div>
     </main>
  );
}
