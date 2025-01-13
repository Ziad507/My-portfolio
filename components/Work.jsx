import { assets, SimpleWorkData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
function Work({ isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20 '
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className=' text-center mb-12 max-w-2xl mx-auto mt-5 font-Ovo first-letter:uppercase'
      >
        welcome to my web development portfolio! Explore a collection of
        projects showcase my expertise in front-end development
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto my-10 gap-5 dark:text-black '
      >
        {SimpleWorkData.map((project, index) => (
         
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              href={project.link}
              target='_blank'
              key={index}
              className=' aspect-square bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group  '
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
                <div className=''>
                  <h2 className='font-semibold  '>{project.title}</h2>
                  <p className='text-sm text-gray-700 '>
                    {project.description}{" "}
                  </p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]  group-hover:bg-lime-300 transition '>
                  <Image src={assets.send_icon} alt='' className='w-5' />
                </div>
              </div>
            </motion.a>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className='w-max flex items-center justify-center rounded-full  gap-2 text-gray-700 border-[0.5px] border-gray-700 px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover '
        href=''
      >
        Show more
        <Image
          src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt=''
          className='w-4'
        />
      </motion.a>
    </motion.div>
  );
}

export default Work;
