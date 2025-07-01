import Image from "next/image";
import Rectangle from "../assets/Rectangle.svg";

const WhySolution = () => {
  return (
    <div className="relative h-[200px] md:h-[300px] lg:h-[300px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={Rectangle}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-cover"
        />
      </div>
      
      {/* Color Overlay with Opacity */}
      <div className="absolute inset-0 bg-[#1AA7AD] bg-opacity-70 z-10"></div>
      
      {/* Centered Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Why Towasic Solutions
        </h1>
      </div>
    </div>
  );
};

export default WhySolution;