import React from 'react'
import { FiPhone } from "react-icons/fi";
import { CiAt, CiGlobe } from "react-icons/ci";

const Navbar = () => {
    return (
        <div>

            <div className='flex items-center justify-between  px-8 py-4 bg-[#052d4b] text-white' >
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2 text-sm'>
                        <span><FiPhone color='#48bbd5' size={20} /></span>
                        <span>+1 781-491-0874</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <span><CiAt color='#48bbd5' size={20} /></span>
                        <span>support@stackry.com</span>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='flex items-center gap-2'>
                        <span><CiGlobe color='#48bbd5' size={20} /></span>
                        <span>Shipping Calculator</span>
                    </div>
                    <div>
                        <span>
                            <select className='bg-[#052d4b] text-white border-none w-20'>
                                <option value="#">English</option>
                                <option value="#">Portuques</option>
                                <option value="#">Hindi</option>
                                <option value="#">Punjabi</option>
                            </select>
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <ul>
                            <li>getting started</li>
                            <li>pricing & shipping</li>
                            <li>resources & help</li>
                            <li>stackery for business</li>
                        </ul>
                    </div>
                </div>
                <div></div>

            </div>


        </div>

    )
}

export default Navbar