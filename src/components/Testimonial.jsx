import { useState, useEffect, useRef } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Minhas",
      date: "2025-06-22",
      content: "Very quick response and friendly service Recommended",
      rating: 5
    },
    {
      id: 2,
      name: "Et Mm",
      date: "2025-06-22",
      content: "I had some repairs done on two garage door openers today and Mohammed Salem came to do the service. He arrived right on time. He was very friendly, patient, professional and knowledgeable...",
      rating: 5
    },
    {
      id: 3,
      name: "Muhammad Minhas",
      date: "2025-06-22",
      content: "Very quick response and friendly service Recommended",
      rating: 5
    },
    {
      id: 4,
      name: "John",
      date: "2025-06-22",
      content: "Excellent TIG reviews on Google",
      rating: 5
    },
    {
      id: 5,
      name: "Anas",
      date: "2025-06-22",
      content: "I had some openers in the service. He was very friendly, patient, professional and knowledgeable...",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (carouselRef.current && cardRefs.current[currentIndex]) {
      const cardWidth = cardRefs.current[currentIndex].offsetWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="bg-[#EEFCFD] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w- text-gray-900 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold lg:text-left text-center mb-12">What Our Clients Say</h2>
        
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-6 pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={el => cardRefs.current[index] = el}
              className="flex-shrink-0 snap-start w-full sm:w-96 bg-white p-6 rounded-3xl shadow-sm border border-gray-200"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Client Image */}
               <div className="flex-shrink-0">
                  <FaUserCircle className="text-5xl text-[#1AA7AD]" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      {testimonial.name && <h3 className="font-bold text-lg">{testimonial.name}</h3>}
                      {testimonial.date && <p className="text-gray-500 text-sm mt-1">{testimonial.date}</p>}
                    </div>
                  
                  </div>
                </div>
              </div>
              
              {testimonial.content && (
                <p className="text-gray-700 pl-2">
                  {testimonial.content}
                  {!testimonial.content && <span className="invisible">Placeholder</span>}
                </p>
              )}
                <div className="flex space-x-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
            </div>
            
          ))}
          
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-[#1AA7AD] w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;