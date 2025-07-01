// components/HeroSection.js
import Image from "next/image";
import Scraping from "../assets/scraping.svg";
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-primary">
            <h1 className="text-4xl md:text-5xl font-bold ">
             intelligent Web Scraping with AI-Powered Data Enrichment
            </h1>
            <p className="text-xl"> “Beyond scraping — we extract meaning”</p>
            <p className="text-xl text-gray-900 mt-6 mb-10">
              Intelligent Web Scraping with AI-Powered Data Enrichment.
Our advanced web scraping engine doesn’t just collect raw HTML. It integrates AI-powered data enrichment, enabling real-time entity recognition, sentiment analysis, data classification, and even trend forecasting across scraped datasets.
            </p>
           <button className="flex items-center gap-2 bg-[#6bf8ff] hover:bg-[#0E7985] text-black hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 border-2 border-transparent hover:border-white">
      View All
      <FaArrowRight className="text-sm" />
    </button>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <div className="p-2 transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
                <Image
                  src={Scraping}
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
