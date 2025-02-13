import React from 'react'
import SectionHeading from './SectionHeading'

const Section2 = () => {
    return (
        <section className='py-8'>

            <div className='containerr2  max-sm:px-5'>
                <SectionHeading para={'Why Stackry?'} />

                <div className='grid grid-cols-[0.5fr_1fr] gap-5  p-5 max-md:grid-cols-1' >
                    <div className=' max-md:mx-auto' >
                        <img src="/images/sections/section2/1.webp" alt="imgs" />
                    </div>

                    <div>
                        <h2 className='text-xl mb-5'><b>Expertise matters in international shipping; Stackry’s got it</b></h2>

                        <ul className='list-disc pl-10'>
                            <li className='mb-4'>The Stackry team has handled over 3 million packages through our secure U.S. operations center</li>
                            <li className='mb-4'>Carriers and destination countries often have complex shipping restrictions; the Stackry team has seen it all and has you covered</li>
                            <li className='mb-4'>Stackry won’t charge you to talk to real people; get support from our expert team by chat, email or phone</li>
                        </ul>
                    </div>
                </div>

                <div className='grid grid-cols-[1fr_0.5fr] gap-5  p-5 max-md:grid-cols-1 '>
                    <div className='max-md:order-2'>
                        <h2 className='text-xl mb-5'><b>Access top U.S. retailers from anywhere in the world</b></h2>

                        <ul className='list-disc pl-10'>
                            <li className='mb-4'>Shop multiple U.S. retailers, ship to your Stackry address and save BIG with package consolidation</li>
                            <li className='mb-4'>Never pay U.S. sales tax when you ship to Stackry; a savings of up to 7.25% on your U.S. purchase</li>
                            <li className='mb-4'>Sign up is FREE, and so is your first 45 days of storage</li>
                        </ul>
                    </div>

                    <div className='max-md:order-1 max-md:mx-auto'>
                        <img src="/images/sections/section2/2.webp" alt="imgs" />
                    </div>

                </div>

                <div className='grid grid-cols-[0.5fr_1fr] gap-5  p-5 max-md:grid-cols-1'>
                    <div className=' max-md:mx-auto'>
                        <img src="/images/sections/section2/3.webp" alt="imgs" />
                    </div>

                    <div>
                        <h2 className='text-xl mb-5'><b>The Package Forwarder who will get the job done right</b></h2>

                        <ul className='list-disc pl-10'>
                            <li className='mb-4'>Stackry has shipped more than half a million packages in over a decade in business</li>
                            <li className='mb-4'>Discounted shipping with top carriers including DHL, Fedex, Aramex, USPS and more…</li>
                            <li className='mb-4'>Express delivery to over 200 countries in as little as 3 business days</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Section2