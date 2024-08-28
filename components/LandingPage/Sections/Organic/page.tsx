'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'

const Organic = () => {


    const [showComponent, setShowComponent] = useState(false);

   
    useEffect(() => {

        const handleScroll = () => {
            const bottom = window.innerHeight + window.scrollY;
            const element = document.getElementById('organic');
            if (element && bottom >= element.offsetTop) {
                setShowComponent(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[])



    return (
        <div id='organic' className={` m-5 mx-auto md:w-[95%] lg:max-w-6xl mt-[150px] bg-white rounded-xl shadow-2xl transition-all duration-1000 ease-in-out ${showComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col lg:flex-row">
                {/* Image on the left */}
                <div className="md:flex-shrink-0">
                    <Image
                        src="./organicSection/Organicpeas.svg"
                        alt="vegetables"
                        height={560}
                        width={480}
                        className='p-6 w-[100%]'
                    />
                </div>
                <div className="p-8">
                    {/* Text on the right */}
                    <div className="tracking-wide text-4xl font-semibold hover:text-green">Fresh Organic Peas</div>
                    <p className="mt-2 text-gray-500">Fresh organic peas are a vibrant green legume celebrated for their crisp texture and sweet, delicate flavor. Bursting with nutrients, they are a rich source of vitamins, minerals, and antioxidants. Their tender pods house plump, succulent peas that add a burst of freshness to salads, stir-fries, or enjoyed on their own. </p>

                    <div className='mt-12 flex justify-between'>
                        <span className='font-semibold text-2xl'>Estimated Delivery Time</span>
                        <span className='text-textGray flex items-center'>
                            <Image
                                src="./organicSection/clock.svg"
                                alt="vegetables"
                                height={50}
                                width={50}
                                className='p-3'
                            /> 2-3 days</span>
                    </div>

                    <div className='mt-12 flex justify-between'>
                        <span className='font-semibold text-2xl'>VAT Value</span>
                        <span className='text-green flex items-center font-semibold'>  4%</span>
                    </div>

                    <div className='mt-12 flex justify-between '>
                        <span className='font-semibold text-4xl text-green'>$27.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organic;
