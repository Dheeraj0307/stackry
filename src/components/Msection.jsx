
import React from 'react'

const Msection = ({ logo, heading, para }) => {

    console.log(logo, 'asd')
    return (
        <div className='flex items-center py-4 gap-4 group '>
            <div className='bg-gray-300 p-2 rounded-sm group-hover:bg-[rgb(0,135,219)]'>
                {logo}
            </div>
            <div >
                <h3 className='text-xs font-bold text-[#052d4b] group-hover:text-[rgb(0,135,219)]'>
                    {heading}
                </h3>
                <p className='text-sm tracking-tight text-[#052d4b]'>
                    {para}
                </p>
            </div>
        </div>
    )
}

export default Msection