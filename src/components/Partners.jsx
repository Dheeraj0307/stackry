import React from 'react'
import SectionHeading from './SectionHeading'

const Partners = () => {

    const images = ['']

    return (
        <section className='responsive px-5'>
            <div className='containerr'>
                <SectionHeading para={'Shop any U.S. retailer'} />

                <div className='grid grid-cols-[repeat(6,1fr)] gap-1 max-lg:grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(2,1fr)]'>
                    {Array.from({ length: 18 }, (v, i) => (
                        <div key={i} className='group h-40 flex items-center justify-center hover:bg-black bg-[#f0f3f4]  '>
                            <img src={`/images/logo/${i + 1}.svg`} alt={`imageNo${i}`} className='group-hover:invert' />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Partners