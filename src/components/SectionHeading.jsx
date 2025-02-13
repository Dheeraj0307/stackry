import React from 'react'

const SectionHeading = ({ para, color = '#0087db' }) => {
    return (
        <div className='flex flex-col items-center mb-8'>
            <h2 className={`headings text-[${color}]`}>{para}</h2>
            <img src="/images/sections/Seperator.svg" alt="seprator" width={100} />
        </div>
    )
}
export default SectionHeading