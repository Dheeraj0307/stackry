import React from 'react'
import { FiPhone } from "react-icons/fi";
import { CiAt, CiGlobe } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

import { LuBookOpenText } from "react-icons/lu";
import { AiFillDollarCircle } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";

import { BsStack } from "react-icons/bs";
import { LiaPercentageSolid } from "react-icons/lia";
import { GiTrophy, GiCutDiamond } from "react-icons/gi";
import Msection from './Msection';
import { FaShippingFast, FaGlobeAmericas, FaPaperPlane, FaCreditCard } from "react-icons/fa";

import { IoCalculatorSharp } from "react-icons/io5";
import { BiSolidPackage } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";

import { PiWarningCircleBold } from "react-icons/pi";
import { CiNoWaitingSign } from "react-icons/ci";

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Navbar = () => {
    return (
        <nav className='shadow-[0_2px_10px_#0000000d]'>

            <div className='flex items-center justify-between  px-8 py-4 bg-[#052d4b] text-white max-lg:hidden' >
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2 text-sm'>
                        <span><FiPhone color='#48bbd5' size={20} /></span>
                        <span>+1 781-491-0874</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                        <span><CiAt color='#48bbd5' size={20} /></span>
                        <span className='cursor-pointer'>support@stackry.com</span>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='flex items-center gap-2'>
                        <span><CiGlobe color='#48bbd5' size={20} /></span>
                        <span className='cursor-pointer'>Shipping Calculator</span>
                    </div>
                    <div>
                        <select className='bg-[#052d4b] text-white border-none w-20 cursor-pointer'>
                            <option value="#">English</option>
                            <option value="#">Portuques</option>
                            <option value="#">Hindi</option>
                            <option value="#">Punjabi</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex px-8 max-lg:justify-between max-lg:flex-wrap'>
                    <div className='cursor-pointer max-lg:w-fit'>
                        <img src="/images/logo/logo.svg" alt="logo" className='w-[10vw] h-[60px] max-lg:w-fit' />
                    </div>

                    <ul className='flex flex-1 items-center justify-end gap-[20px] capitalize font-medium pr-[20px]  max-lg:hidden'>
                        <li className='nav-list'>getting started</li>
                        <li className='nav-list'>pricing & shipping</li>
                        <li className='nav-list'>resources & help</li>
                        <li className='nav-list'>stackery for business</li>
                    </ul>

                    <div className='flex items-center justify-end gap-4 max-lg:w-fit'>
                        <button className='nav-btn-type1'>sign up</button>
                        <button className='nav-btn-type2'>login</button>
                        <button><IoMdMenu size={30} color='rgb(2, 173, 224)' className='lg:hidden' /></button>
                    </div>

                    {/* fvbsdfjklsdkjdh */}




                    <div className='mobile-nav w-full lg:hidden'>
                        <div className='top-short-nav border-b  border-b-[#1d1d1f1a] '>
                            <ul>
                                <li><FiPhone color='#48bbd5' size={23} /> <p>+1 781-491-0874</p>  </li>
                                <li><CiAt color='#48bbd5' size={25} /><p>support@stackry.com</p> </li>
                                <li><CiGlobe color='#48bbd5' size={25} /><p>Shipping Calculator</p> </li>
                            </ul>
                        </div>
                        <div>

                            <Accordion
                                allowMultipleExpanded={true}
                                allowZeroExpanded={true}
                            >

                                <AccordionItem uuid={1} className='border-t border-t-[#1d1d1f1a] cursor-pointer '>
                                    <AccordionItemHeading >

                                        <AccordionItemButton className='font-medium  py-3 relative'>
                                            getting started
                                            <div className='absolute right-0 top-3 active:rotate-180 '>^</div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <div className='pl-10 max-md:pl-0 flex flex-col gap-10 py-6'>
                                            <div>
                                                <h2 className='font-bold text-lg capitalize'>getting started</h2>
                                                <Msection logo={<LuBookOpenText size={23} />} heading={'How it Works'} para={'learn how our service works and how to get started shipping items from the US'} />

                                                <Msection logo={<AiFillDollarCircle size={23} />} heading={'How You Save $$$'} para={'Learn how you can save money on consolidating and shipping internationally'} />

                                                <Msection logo={<SiGnuprivacyguard size={23} />} heading={'sign up'} para={'Sign up to the Stackry service for free and get your US mailing address'} />
                                            </div>

                                            <div>
                                                <h2 className='font-bold text-lg capitalize'>Why choose Stackry</h2>
                                                <Msection logo={<BsStack size={23} />} heading={'About Stackry'} para={'Learn more about how we lead the way for consolidation and international shipping services'} />

                                                <Msection logo={<LiaPercentageSolid size={23} />} heading={'Who uses Stackry?'} para={'See a broad spectrum of customers we help navigate their international shipping needs'} />

                                                <Msection logo={<GiTrophy size={23} />} heading={'Customer reviews'} para={'Hear from our customers and how we’ve helped them with their shipping needs'} />
                                            </div>

                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>

                            <div>
                                <h3>getting started</h3>

                                <div className='pl-10 max-md:pl-0 flex flex-col gap-10 py-6'>
                                    <div>
                                        <h2 className='font-bold text-lg capitalize'>getting started</h2>
                                        <Msection logo={<LuBookOpenText size={23} />} heading={'How it Works'} para={'learn how our service works and how to get started shipping items from the US'} />

                                        <Msection logo={<AiFillDollarCircle size={23} />} heading={'How You Save $$$'} para={'Learn how you can save money on consolidating and shipping internationally'} />

                                        <Msection logo={<SiGnuprivacyguard size={23} />} heading={'sign up'} para={'Sign up to the Stackry service for free and get your US mailing address'} />
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-lg capitalize'>Why choose Stackry</h2>
                                        <Msection logo={<BsStack size={23} />} heading={'About Stackry'} para={'Learn more about how we lead the way for consolidation and international shipping services'} />

                                        <Msection logo={<LiaPercentageSolid size={23} />} heading={'Who uses Stackry?'} para={'See a broad spectrum of customers we help navigate their international shipping needs'} />

                                        <Msection logo={<GiTrophy size={23} />} heading={'Customer reviews'} para={'Hear from our customers and how we’ve helped them with their shipping needs'} />
                                    </div>

                                </div>
                            </div>

                            <div>
                                <h3>Pricing & Shipping</h3>
                                <div className='pl-10 max-md:pl-0 flex flex-col gap-10 py-6'>
                                    <div>
                                        <h2 className='font-bold text-lg capitalize'>Shipping Costs</h2>
                                        <Msection logo={<FaCreditCard size={23} />} heading={'Calculate your shipping costs to countries worldwide'} />

                                        <Msection logo={<IoCalculatorSharp size={23} />} heading={'Learn how carriers calculate the cost based on both the weight and size of the package'} />

                                        <Msection logo={<FaPaperPlane size={23} />} heading={'Additional handling & services'} para={'Need photos, returns, fragile packaging and value protection? Understand the costs'} />

                                        <Msection logo={<AiFillDollarCircle size={23} />} heading={'Duties and taxes'} para={'Learn about the collection of duties and taxes for your country'} />

                                        <Msection logo={<GiCutDiamond size={23} />} heading={'Package protection'} para={`Learn about Stackry's Shipment Value Protection`} />
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-lg capitalize'>Consolidation & Shipping Services</h2>
                                        <Msection logo={<FaShippingFast size={23} />} heading={'International shipping options'} para={'Our shipping partners include DHL, Fedex, USPS, GlobalMail and Aramex'} />

                                        <Msection logo={<BiSolidPackage size={23} />} heading={'Package consolidation'} para={'Our expert team will consolidate and repack your items into one more cost effective shipment.'} />

                                        <Msection logo={<FaBoxesPacking size={23} />} heading={'Repacking'} para={'No need for consolidation; we also repack your individual packages to save space and reduce shipping costs'} />

                                        <Msection logo={<FaGlobeAmericas size={23} />} heading={'Countries we ship to'} para={'We ship worldwide, calculate shipping costs to you'} />
                                    </div>

                                    <div>
                                        <h2 className='font-bold text-lg capitalize'>Shipping Restrictions</h2>
                                        <Msection logo={<CiNoWaitingSign color='red' size={23} />} heading={'Items cannot ship'} para={'Leam which items are prohibted by law and cannot be shipped'} />

                                        <Msection logo={<PiWarningCircleBold color='orange' size={23} />} heading={'Restricted & special handling items'} para={'Learn which items can be shipped with limitations and possibly additional costs'} />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </nav>
        // 
    )
}

export default Navbar