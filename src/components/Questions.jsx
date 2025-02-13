import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Questions = () => {
    const items = [
        {
            id: `1`,
            heading: `Which shipping carriers does Stackry work with?`,
            content: `Stackry customers can ship with DHL, FedEx, Aramex and the U.S. Postal Service. See Stackry's international shipping options page for more detail on service levels.Stackry customers can ship with DHL, FedEx, Aramex and the U.S. Postal Service. See Stackry's international shipping options page for more detail on service levels.`
        },
        {
            id: `2`,
            heading: `Where does Stackry ship?`,
            content: `Stackry ships to destinations worldwide. Estimate shipping costs by entering your destination country/territory and package weight and dimensions on Stackry's shipping calculator. If your country/territory does not appear, contact Stackry support for a shipping quote.`
        },
        {
            id: `3`,
            heading: `How will I know when one of my packages arrives at Stackry?`,
            content: `Stackry emails customers once a package is checked in at our secure operations center. Login to Stackry after receiving notification and view a photo of your package, enter customs information, re-pack or consolidate.`
        },
        {
            id: `4`,
            heading: `What is package consolidation and how does this service help save on shipping costs?`,
            content: `The concept is simple, the savings are BIG! Shop at any U.S. retailer and ship one or multiple packages to your Stackry U.S. address. Stackry will hold each package in your locker for up to 45 days for FREE. When you're done shopping and ready to ship, login to your Stackry account, choose your items and Stackry's expert team will consolidate them into one more cost effective shipment. Stackry charges $2 per package consolidated, with a $25 cap per consolidation. Login to your Stackry dashboard if you're ready to save and start consolidating received packages.`
        },
        {
            id: `5`,
            heading: `What is the estimated delivery time for my shipment and how can I track it?`,
            content: `Delivery time varies by location, international shipping carrier and service level (express, priority, etc…).Express delivery arrives in as little as 3 business days. Stackry will provide the carrier’s tracking number for your international shipment. Please see Stackry’s International Shipping Options page for a breakdown of estimated delivery times.`
        },
    ]

    const [expanded, setExpanded] = useState([]);


    return (
        <section className='responsive'>
            <div className="containerr ">
                <SectionHeading para={'Your questions answered'} />

                <Accordion
                    allowMultipleExpanded={true}
                    allowZeroExpanded={true}
                    onChange={setExpanded}
                >
                    {items.map((item) => (
                        <AccordionItem key={item.id} uuid={item.id} className='border-t border-t-[#1d1d1f1a] cursor-pointer '>
                            <AccordionItemHeading >

                                <AccordionItemButton className='font-medium  py-3 relative'>
                                    {item.heading}
                                    <div className='absolute right-0 top-3 active:rotate-180 '>^</div>
                                    {console.log()}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: expanded.includes(item.id) ? 150 : 0,
                                    opacity: expanded.includes(item.id) ? 1 : 0,
                                }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                style={{ overflow: "hidden" }}
                            >
                                <AccordionItemPanel className='p-3 bg-white h-full'  >
                                    {item.content}
                                </AccordionItemPanel>
                            </motion.div>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    )
}

export default Questions