import {
  FaShoppingCart,
  FaGlobe,
  FaMobile,
  FaHome,
  FaInstagram,
  FaNewspaper,
  FaTiktok,
  FaLinkedin,
  FaRobot,
  FaChartLine,
  FaBitcoin,
  FaCar,
  FaBasketballBall,
  FaArrowRight,
} from "react-icons/fa";
import { RiShieldKeyholeFill } from "react-icons/ri";

const ServicesGrid = () => {
  const services = [
    { icon: <FaShoppingCart />, title: "E-commerce Data Scraping" },
    { icon: <FaGlobe />, title: "Website Data Scraping Services" },
    { icon: <FaMobile />, title: "Mobile App/Data Scraping Services" },
    { icon: <FaHome />, title: "Real Estate Web Scraping Services" },
    { icon: <FaInstagram />, title: "Instagram Data Extractor" },
    { icon: <FaNewspaper />, title: "Extract Google News Data scraping" },
    { icon: <FaTiktok />, title: "Scrape TikTok Data" },
    { icon: <FaLinkedin />, title: "Scrape linkedin Data" },
    { icon: <RiShieldKeyholeFill />, title: "Captcha Scraping" },
    { icon: <FaCar />, title: "Scraping Hotel, Travel And Airline Data" },
    {
      icon: <FaRobot />,
      title: "Web Scraping API to Robotic Process Automation",
    },
    {
      icon: <FaChartLine />,
      title: "Competitor Price Scraping and Monitoring Services",
    },
    { icon: <FaBitcoin />, title: "Scrape Cryptocurrency Data" },
    { icon: <FaCar />, title: "Used Car Data Scraping" },
    { icon: <FaBasketballBall />, title: "NBA Web Data Scraping Services" },
  ];

  return (
    <div className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid - Centered with custom column count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border-2 border-[#82F2F8] rounded-3xl pt-10 pb-10 px-4 my-3 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(46,213,222,0.5)] w-full max-w-[250px]"
            >
              {/* Icon positioned on top border */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#2ED5DE] rounded-full flex items-center justify-center border-4 border-white shadow-md">
                <div className="text-white text-2xl">{service.icon}</div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-4">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 bg-[#6bf8ff] hover:bg-[#0E7985] text-black hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 border-2 border-transparent hover:border-white">
            View All
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
