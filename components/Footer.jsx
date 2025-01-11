import { assets } from "@/assets/assets"
import Image from "next/image"

function Footer({isDark}) {
    const date = new Date()
    const year = date.getFullYear();
    
    return (
      <div className='mt-20 '>
        <div className='text-center '>
          <Image src={isDark?assets.logo_dark:assets.logo} alt='' className='w-36 mx-auto mb-2' />
        </div>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDark?assets.mail_icon_dark:assets.mail_icon} alt='' className='w-6' />
          yaserziad24@gmail.com
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6  ">
          <p>Copyright © {year} Ziad Yasser. All rights reserved.</p>
          <ul className="flex items-center gap-10 justify-center mt-4  sm:mt-0  ">
            <li>
              <a target='_blank' href='https://github.com/Ziad507'>
                GitHub
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='www.linkedin.com/in/ziad-yasser-804201192'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target='_blank' href='https://www.facebook.com/ziad.gwily.3/'>
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Footer
