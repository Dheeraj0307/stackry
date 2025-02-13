import React from 'react'
import SectionHeading from './SectionHeading'
import { IoPlayOutline } from "react-icons/io5";

const Section1 = () => {
    return (
        <section className='responsive'>
            <div className='containerr'>

                <SectionHeading para={'Using Stackry: A Simple Guide'} />

                <div className='grid grid-cols-3 gap-2 max-md:grid-cols-1' >
                    <div className='px-4'>
                        <img src="/images/sections/section1/1.png" alt="sections" />
                        <h3 className='font-semibold text-[20px] mb-4'> <span className='text-[#02ade0]'>Sign up for free  </span>and go shop!</h3>
                        <p className='text-[17px] mb-10'>Shop at any of your favorite U.S. stores, like Amazon, eBay, Macy’s, Sephora, Nordstrom, and hundreds more, and use your Stackry address at checkout!</p>
                    </div>
                    <div className='px-4'>
                        <img src="/images/sections/section1/2.webp" alt="sections" />
                        <h3 className='font-semibold text-[20px] mb-4'>Packages arrive at Stackry</h3>
                        <p className='text-[17px] mb-10'>After your packages arrive at Stackry, you'll have 45 days of free storage, giving you plenty of time to shop, consolidate your items, and maximize your savings before shipping!</p>
                    </div>
                    <div className='px-4'>
                        <img src="/images/sections/section1/3.webp" alt="sections" />
                        <h3 className='font-semibold text-[20px] mb-4'>Ship home with confidence</h3>
                        <p className='text-[17px] mb-10'>Ship from Stackry to your home with confidence using DHL, FedEx, Aramex, or USPS. Our multi-lingual support team is dedicated to guiding you every step of the way!</p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button className='nav-btn-type2 text-xl flex items-center gap-2'>Watch how Stackry works <IoPlayOutline size={25} stroke='rgb(85, 215, 240)' /></button>
                </div>

            </div>
        </section>
    )
}

export default Section1