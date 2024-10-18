import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Home() {
  // Array of hero images
  const images = [
    'https://www.ritiriwaz.com/wp-content/uploads/2019/11/Jharkhand-Culture-696x392.jpg',
    'https://th.bing.com/th?id=OSK.HEROdWBDIYrGon5_z7qvlN-mp9QoAh4E8ZBh6_H1dYK7R30&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM',
    'https://th.bing.com/th?id=OIP.1InnSCcX7ynGFrkrt_JCuQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th/id/OIP.sWSabr6-iQyBCSXruYy28AHaEZ?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://th.bing.com/th?id=OIP.KCSfxWG94fAngHGxdBHc4AHaEx&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.dcjLhsHmtMjA6KT-oxb6hQHaGC&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
  ];

  // useState hook to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image index on hover
  const handleDotHover = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
          {/* Enlarged and Styled "जोहार" */}
          <motion.h1
            className="mb-4 font-bold text-yellow-400 text-7xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            जोहार
          </motion.h1>
          {/* Styled Welcome Text */}
          <motion.p
            className="text-2xl font-bold text-green-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to the Land of Forests
          </motion.p>
        </div>

        {/* Dots for switching images */}
        <div className="absolute flex justify-center w-full bottom-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-2 bg-white rounded-full cursor-pointer ${
                index === currentImageIndex ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}
              onMouseEnter={() => handleDotHover(index)} // Change image on hover
            ></div>
          ))}
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section
        className="px-4 py-12 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="mb-6 text-3xl font-bold text-center text-green-700"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            History of Jharkhand
          </motion.h2>
          <motion.p
            className="max-w-4xl mx-auto text-lg leading-relaxed text-center text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Jharkhand, the "Land of Forests," was formed in 2000 and is known for its rich cultural heritage and lush landscapes. The state has been home to many indigenous tribes for centuries. Jharkhand is famous for its scenic beauty, waterfalls, and wildlife, making it a prime destination for nature lovers.
          </motion.p>
        </div>
      </motion.section>

      {/* Additional Description Section */}
      <motion.section
        className="px-4 py-12 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <motion.h3
            className="mb-6 text-2xl font-semibold text-center text-green-600"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore Jharkhand
          </motion.h3>
          <motion.p
            className="max-w-4xl mx-auto text-lg leading-relaxed text-center text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Jharkhand is a vibrant blend of rich tribal culture and natural beauty. From the dense forests of Betla National Park to the serene waterfalls of Hundru, the state offers an unspoiled landscape for travelers. Explore the local traditions, taste the unique flavors of Jharkhand cuisine, and witness the vibrant tribal dances and festivals that bring the state's culture to life. Jharkhand is also a major contributor to India's mineral wealth, with rich deposits of coal, iron ore, and copper.
          </motion.p>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-6 bg-green-700">
        <div className="container mx-auto text-center text-white">
          <motion.p
            className="text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Jharkhand Tourism. All Rights Reserved.
          </motion.p>
          <motion.p
            className="mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore the beauty of Jharkhand - A land of rich culture and nature.
          </motion.p>
          <div className="flex justify-center mt-4 space-x-6">
            <motion.a
              href="#"
              className="text-white transition-transform duration-200 transform hover:text-yellow-300 hover:scale-110"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-white transition-transform duration-200 transform hover:text-yellow-300 hover:scale-110"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-white transition-transform duration-200 transform hover:text-yellow-300 hover:scale-110"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
