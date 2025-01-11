import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
function Services({ isDark, setIsDark }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services'
      className='w-full px-[12%] py-10 scroll-mt-20 '
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        What I offers
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=' text-center mb-12 max-w-2xl mx-auto mt-5 font-Ovo'
      >
        I specialize in creating responsive and visually appealing web
        applications using React.js, Next.js, and Tailwind CSS, with seamless
        API integration and state management through Redux. Additionally, I
        offer expertise in UI/UX design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className=' grid grid-cols-auto gap-4 my-10'
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{scale:1.05}}
            className='border border-gray-400 rounded-lg px-8 py-12  cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover'
            key={index}
          >
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>
              {title}
            </h3>
            <p className='text-sm leading-5 text-gray-600 dark:text-white/80'>
              {description}
            </p>
            <a className='flex items-center gap-2 text-sm mt-5 ' href={link}>
              Read more{" "}
              <Image alt='' className='w-4' src={assets.right_arrow} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services
