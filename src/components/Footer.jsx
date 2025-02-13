import React from 'react'
import { PiFacebookLogoFill } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='pt-9'>
            <div className=' flex py-4 items-center justify-center bg-[#08406a] max-md:flex-col max-md:gap-5'>
                <h2 className='text-xl text-white font-medium'>We're proud to partner with</h2>
                <img src="/images/sponsers/1.svg" alt="" width={100} />
                <img src="/images/sponsers/2.svg" alt="" width={100} />
                <img src="/images/sponsers/3.svg" alt="" width={100} />
                <img src="/images/sponsers/4.svg" alt="" width={100} />
            </div>

            <div className='bg-[#052d4b] p-[60px_80px_32px]'>

                <div className='grid grid-cols-[repeat(4,1fr)] max-md:grid-cols-[1fr] max-md:gap-[30px]'>
                    <div className='w-fit mx-auto text-white'>
                        <h2 className='footer-heading'>our company</h2>
                        <ul className='footer-ul'>
                            <li><a href="#">Contact us</a> </li>
                            <li><a href="#">About Stackry</a></li>
                            <li><a href="#">Who uses Stackry</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Additional handling and services</a></li>
                            <li><a href="#">Rewards</a></li>
                            <li><a href="#">Refer a Friend</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Cookie policy</a></li>
                            <li><a href="#">Terms and conditions</a></li>
                        </ul>
                    </div>

                    <div className='w-fit mx-auto text-white'>
                        <h2 className='footer-heading'>learn more</h2>
                        <ul className='footer-ul'>
                            <li><a href="#"> Package consolidation</a></li>
                            <li><a href="#">Repacking</a></li>
                            <li><a href="#">Package protection</a></li>
                            <li><a href="#">Items you cannot ship</a></li>
                            <li><a href="#">Restricted and special handling items</a></li>
                            <li><a href="#">How shipping costs are calculated</a></li>
                            <li><a href="#">International shipping options</a></li>
                            <li><a href="#">Retail partners</a></li>
                            <li><a href="#">Frequently asked questions</a></li>
                            <li><a href="#">Vulnerability reporting</a></li>
                        </ul>
                    </div>

                    <div className='w-fit mx-auto text-white'>
                        <h2 className='footer-heading'>contact us</h2>
                        <ul className='footer-ul'>
                            <li>Amherst St Nashua, NH</li>
                            <li><a href="#">+1 781-491-0874</a></li>
                            <li><a href="#">support@stackry.com</a></li>
                            <li>9:00 AM - 5:00 PM EST</li>
                            <li>Local Time: 12:08 AM</li>
                        </ul>
                    </div>

                    <div className='w-fit mx-auto'>
                        <h2 className='footer-heading'>social links</h2>
                        <div className='flex gap-3 mt-5 items-center '>
                            <div className='rounded-full w-6 h-6 overflow-hidden object-contain'>
                                <PiFacebookLogoFill color='#52ad7b' size={25} />
                            </div>
                            <div className='rounded-full w-6 h-6 overflow-hidden object-contain'>
                                <FaSquareXTwitter color='#52ad7b' size={25} className='rounded-xs' />
                            </div>
                            <div className='rounded-full w-6 h-6 overflow-hidden object-contain'>
                                <FaInstagramSquare color='#52ad7b' size={25} className='rounded-xs' />
                            </div>

                        </div>
                    </div>
                </div>


                <div className='flex gap-5 mt-30 border-b border-b-[#c4c4c45c] pb-2 max-md:flex-col  max-md:w-fit max-md:m-auto imgWidth max-md:py-[30px]'>
                    <p className='text-white text-xl'>Secure payments with:</p>
                    <img src="/images/payment/visa.svg" alt="" />
                    <img src="/images/payment/master.svg" alt="" />
                    <img src="/images/payment/american.svg" alt="" />
                    <img src="/images/payment/discover.svg" alt="" />
                    <img src="/images/payment/paypal.svg" alt="" />
                </div>

                <div>
                    <p className='text-white text-xl py-2 max-md:text-center '>© 2012-2024 Stackry, LLC</p>
                </div>


            </div>
        </footer>
    )
}

export default Footer