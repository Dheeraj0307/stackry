import React from 'react'
import useWindowWidth from '../customHooks/useWindowWidth';

const Hero = () => {

    const width = useWindowWidth();

    return (
        <div className='responsive'>
            <div className='containerr  max-md:px-0'>

                <div className='flex gap-4 py-5  max-md:flex-col'>
                    <div className='flex flex-col gap-6 w-[55%] max-md:w-[100%]'>
                        <h1 className='text-[40px] text-[#0087db] font-thin leading-[43px] '>
                            Welcome to Stackry, the world’s most trusted international package forwarder
                        </h1>
                        <p className='text-xl'>
                            Stackry provides a free U.S. based address for all your worldwide shipping needs. Sign up and use your Stackry address when checking out at any U.S. store.
                        </p>
                        <div className='flex justify-start gap-4 flex-wrap'>
                            <button className='nav-btn-type1 text-xl'> {width > 768 ? 'How does Stackry work?' : 'sign up'}</button>
                            <button className='nav-btn-type2 text-xl'>{width > 768 ? 'Estimate your shipping costs' : 'login'}</button>
                        </div>
                    </div>

                    <div className='w-[45%] self-center justify-items-center max-md:w-max'>
                        <img src="/images/hero/hero-pic.webp" alt="hero-pic" className='max-w-[350px] max-md:max-w-[80vw] ' />
                    </div>
                </div>

                <div className='p-4 flex items-center gap-4 flex-wrap max-md:flex-col'>
                    <div className='flex-1'>
                        <p className='text-2xl font-semibold px-10'>20,000+ five star reviews</p>
                        <img width='100%' className='max-w-[350px]' src="/images/hero/ratings.svg" alt="ratings" />
                    </div>
                    <p className='w-fit'>Rated ‘Excellent’ by</p>
                    <img className='w-[110px] max-md:w-[220px]' src="/images/hero/1.webp" alt="img" />
                    <img className='w-[110px] max-md:w-[220px]' src="/images/hero/google.webp" alt="img" />
                    <img className='w-[110px] max-md:w-[220px]' src="/images/hero/sitejabber.webp" alt="img" />

                </div>
            </div>

        </div>
    )

}

export default Hero