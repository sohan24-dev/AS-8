import "animate.css";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
         <section className="relative w-full  h-[40vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">

            <Image
                src="https://i.ibb.co.com/DHLyxkMc/Chat-GPT-Image-Apr-29-2026-09-44-02-PM.png"
                alt="Hero Banner"
                fill
                sizes="100vw"
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

       
            <div className=" relative z-10 text-white px-4 max-w-3xl">
                <h1 className="animate__animated animate__backInDown text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Find Healthy Animals for Qurbani
                </h1>

                <p className="animate__animated animate__rotateInUpRight text-base md:text-lg lg:text-xl mb-6 text-gray-200">
                    Explore cows, goats, and more with full details and best prices
                </p>

                <Link href="/allanimals">
                    <button className="btn px-6 py-3 rounded-full text-white font-semibold 
  bg-black/30 backdrop-blur-lg border border-white/20 
  hover:bg-black/40 transition">
                        Browse Animals
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;