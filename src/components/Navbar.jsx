import React, { useState } from 'react'
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

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaQuestion } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false)

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
                <div className='flex max-lg:flex-wrap'>
                    <div className='flex w-full max-lg:justify-between max-lg:flex-wrap px-8'>
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
                            <button><IoMdMenu size={30} color='rgb(2, 173, 224)' onClick={() => setOpenNav(!openNav)} className='lg:hidden' /></button>
                        </div>
                    </div>
                    {/* fvbsdfjklsdkjdh */}




                    {openNav ? <div className='mobile-nav w-full lg:hidden'>

                        <div className='top-short-nav border-b  border-b-[#1d1d1f1a] p-8'>
                            <ul>
                                <li><FiPhone color='#48bbd5' size={23} /> <p className='cursor-pointer'>+1 781-491-0874</p>  </li>
                                <li><CiAt color='#48bbd5' size={25} /><p className='cursor-pointer'>support@stackry.com</p> </li>
                                <li><CiGlobe color='#48bbd5' size={25} /><p className='cursor-pointer'>Shipping Calculator</p> </li>
                            </ul>
                        </div>
                        <div>

                            <Accordion
                                allowMultipleExpanded={false}
                                allowZeroExpanded={true}
                            >

                                <AccordionItem uuid={'1'} className='border-b border-b-transparent hover:border-b-[rgb(2_173_224)]  cursor-pointer px-8'>
                                    <AccordionItemHeading >
                                        <AccordionItemButton className='font-medium  py-3 relative capitalize'>
                                            getting started
                                            <div className='absolute right-0 top-3  '>^</div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className='pl-10 max-md:pl-0 flex flex-col gap-10 py-6'>
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
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid={'2'} className='border-b border-b-transparent hover:border-b-[rgb(2_173_224)]  cursor-pointer px-8'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='font-medium  py-3 relative'>
                                            <h3>Pricing & Shipping</h3>
                                            <div className='absolute right-0 top-3  '>^</div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='pl-10 max-md:pl-0 flex flex-col gap-10 py-6'>
                                        <div>
                                            <h2 className='font-bold text-lg capitalize'>Shipping Costs</h2>
                                            <Msection logo={<FaCreditCard size={23} />} heading={'Calculate shipping costs'} para={'Calculate your shipping costs to countries worldwide'} />

                                            <Msection logo={<IoCalculatorSharp size={23} />} heading={'How shipping costs are calculated'} para={'Learn how carriers calculate the cost based on both the weight and size of the package'} />

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
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid={'3'} className='border-b border-b-transparent hover:border-b-[rgb(2_173_224)]  cursor-pointer px-8'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='font-medium  py-3 relative'>
                                            <h3>Resource & Help</h3>
                                            <div className='absolute right-0 top-3  '>^</div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='pl-10 max-md:pl-0 flex flex-col gap-10 py-6'>
                                        <div>
                                            <h2 className='font-bold text-lg capitalize'>Help and Resources</h2>
                                            <Msection logo={<TfiHeadphoneAlt size={23} />} heading={'Contact us'} para={'Contact us by filling out the form and we’ll reply soon!'} />

                                            <Msection logo={<FaQuestion size={23} />} heading={'Frequently Asked Questions'} para={'Common questions and answers by our shipping experts'} />

                                            <Msection logo={<TbMessage size={23} />} heading={'Blog'} para={'Keeping you up to date with the latest sales and deals from US retailers!'} />

                                        </div>

                                        <div>
                                            <h2>Customer Support</h2>
                                            <section className='customer-section'>
                                                <div>
                                                    <h3>Contact us </h3>
                                                    <p>Contact us by filling out the form; we'll reply soon: <span> Contact form</span>  </p>
                                                </div>
                                                <div>
                                                    <h3> Call us</h3>
                                                    <p>Our team is happy to help with any questions: <span>+1 781-491-0894</span></p>
                                                </div>
                                                <div>
                                                    <h3> Email us</h3>
                                                    <p>Send us an email and our team will respond as soon as we can: <span>support@stackry.com</span> </p>
                                                </div>
                                                <div>
                                                    <h3> Where is Stackery located</h3>
                                                    <p>Address: Amherst Street, Nashua, NH 03063 - <span>Map</span></p>
                                                </div>
                                                <div>
                                                    <h3> Business hours</h3>
                                                    <p>9:00 AM - 5:00 PM EST  |
                                                        <span> Local Time</span></p>
                                                </div>
                                            </section>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid={'4'} className='border-b border-b-[#1d1d1f1a] hover:border-b-[rgb(2_173_224)]  cursor-pointer px-8'>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='font-medium  py-3  '>
                                            <h3>Stackery for Business</h3>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>

                                <AccordionItem uuid={'5'} className='cursor-pointer '>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='font-medium  py-3 relative mx-8'>
                                            <h3 className='text-[rgb(2_173_224)]'>English</h3>
                                            <div className='absolute right-0 top-3  '>
                                                ^
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='bg-[#00121b] p-8 text-white flex flex-col gap-3 mobile-language'>
                                        <p>English</p>
                                        <p>Español</p>
                                        <p>Portuquês</p>
                                        <p>العربية</p>

                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>
                            <div className='flex justify-center gap-3 py-5'>
                                <button className='nav-btn-type1'>sign up</button>
                                <button className='nav-btn-type2'>login</button>
                            </div>
                        </div>
                    </div> : ''}
                </div>

            </div>


        </nav>
        // 
    )
}

export default Navbar