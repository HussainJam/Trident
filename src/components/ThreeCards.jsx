import Image from "next/image";
import { FaBullseye, FaBrain, FaHandshake } from "react-icons/fa";

const WhyWe = () => {
  const cards = [
    {
      title: "Our Mission",
      content: "At the core of our company, we are driven by a mission to revolutionize the way businesses access and utilize data. We believe that the power of web scraping can unlock unprecedented insights, driving innovation and fueling strategic decision-making.",
      icon: <FaBullseye className="text-3xl text-[#1AA7AD]" />
    },
    {
      title: "Our Expertise",
      content: "With a team of seasoned data engineers, web scraping specialists, and software developers, we possess a deep understanding of the latest techniques and technologies in the field. Our expertise spans everything from custom scraper development to scalable data extraction solutions.",
      icon: <FaBrain className="text-3xl text-[#1AA7AD]" />
    },
    {
      title: "Our Commitment",
      content: "We are dedicated to providing our clients with exceptional service, tailored solutions, and a seamless experience. Our commitment to customer satisfaction is at the heart of everything we do, ensuring that our clients can focus on leveraging the data they need to drive their business forward.",
      icon: <FaHandshake className="text-3xl text-[#1AA7AD]" />
    }
  ];

  return (
    <div className="bg-[#EEFCFD] py-16">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
             <span className="text-[#1AA7AD]">Why Towasic Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mt-4 mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto relative">
          {/* Decorative line connecting icons */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-[#1AA7AD] opacity-20 mx-auto w-4/5" />
          
          {cards.map((card, index) => (
            <div key={index} className="relative">
              {/* Icon positioned above card */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full border-2 border-[#1AA7AD] shadow-md">
                {card.icon}
              </div>
              
              {/* Card */}
              <div className="bg-white border border-[#61F7FF] p-8 pt-12 flex flex-col items-center shadow-lg 
                            rounded-tr-[20px] rounded-bl-[20px] rounded-tl-md rounded-br-md
                            hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                  {card.title}
                </h3>
                <p className="text-center text-gray-700">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWe;