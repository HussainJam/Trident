// components/HeroSection.js
import Image from "next/image";
import HerosectionImg from "../assets/HS.svg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with CSS class */}
      <div className="absolute inset-0 hero-bg-pattern"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unlocking The Power Of Data Extraction
            </h1>
            <p className="text-xl text-white mb-10">
              Our Company Specializes In Providing Cutting-Edge, Accurate, And
              Scalable Data Scraping Solutions That Empower Businesses To Unlock
              The Wealth Of Data Hidden Behind Online Interfaces.
            </p>
            <button className="bg-[#6bf8ff] hover:bg-[#0E7985] text-black hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 border-2 border-transparent hover:border-white">
              Let's Talk
            </button>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <div className="p-2 transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
                <Image
                  src={HerosectionImg}
                  alt="Data extraction visualization"
                  width={300}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="absolute inset-0 bg-gradient-to-br from-[#0E7985] to-[#6bf8ff]"> */
}
{
  /* <div className="absolute bottom-0 left-0 w-full h-60">
  <svg
    viewBox="0 0 1200 100"
    preserveAspectRatio="none"
    className="w-full h-full"
  >
    <path
      d="M1200 50 C1000 0 800 0 600 50 C400 100 200 100 0 50"
      stroke="white"
      strokeWidth="20"
      fill="none"
    />
  </svg>
</div> */
}
{
  /* </div> */
}
