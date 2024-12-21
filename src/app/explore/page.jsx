'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExploreContent() {
  return (
    <div className="bg-[url('/Asset/Images/BG.png')] bg-cover bg-center min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* UNICEF Logo */}
      <motion.div
        className="absolute top-4 right-4 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Asset/Images/Landing-Page_Unicef_Button.png"
            alt="UNICEF Logo"
            width={96}
            height={96}
            className="w-16 md:w-24 lg:w-32 fade-in"
          />
        </a>
      </motion.div>

      <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-56  pt-[150px] sm:pt-0">
        {/* My Digital Diary Section */}
        <motion.div
          className="flex flex-col items-center w-full md:w-auto "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[450px] h-[400px] md:w-[450px] md:h-[700px] mb-4 ">
            <Image
              src="/Assets/Images/Landing-Page_Diary.png"
              alt="My Digital Diary"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full max-w-[550px]">
            {/* Link to Page2 */}
            <Link href="/welcome" className="block w-full">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-full"
              >
                <Image
                  src="/Assets/Images/Landing-Page_Explore_Button.png"
                  alt="Explore Button"
                  width={600}
                  height={500}
                  className="w-full cursor-pointer fade-in"
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Character Image */}
        <motion.div
          className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[600px] md:pt-[77px] md:ml-[50px] lg:ml-[100px] "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <Image
            src="/Assets/Images/Landing-Page_Character.png"
            alt="Landing Page Character"
            width={400}
            height={400}
            className="w-full h-auto object-contain "
          />
        </motion.div>
      </div>
    </div>
  );
}