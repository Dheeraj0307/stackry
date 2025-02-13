import React from 'react'
import SectionHeading from './SectionHeading'

const Features = () => {

    const arrayOfData = [
        <>Sign up for a Stackry account and U.S. address. It’s FREE and so is our membership</>,
        <> <b>Pay no U.S. sales tax when you shop</b> – a savings of up to 7.25% on your purchases</>,
        <> <b>Store packages FREE </b > at Stackry for up to 45 days</>,
        <>Consolidate multiple items or re-pack a single box and<b> save BIG on shipping</b></>,
        <>100% transparent pricing. <b>No hidden fees.</b></>
    ]


    return (
        <section className='responsive bg-[#052d4b]'>
            <div className='containerr'>
                <SectionHeading para={'SAVE and only pay for what you use, when you use it'} color={'#55d7f0'} />

                <div className='grid grid-cols-[repeat(5,1fr)] gap-4  max-md:grid-cols-[repeat(2,1fr)] '>
                    {Array.from(arrayOfData, (v, i) => (
                        <div key={i} className='max-md:justify-items-center max-md:text-center'>
                            <img src={`/images/features/${i + 1}.webp`} alt="imgs" />
                            <p className='text-lg text-white '>
                                {v}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Features