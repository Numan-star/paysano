import React from 'react'
import Image from 'next/image'

// Importing Components
import Navbar from '@/components/LandingPage/Sections/HomeTop/Navbar'

// Importing Assets
import image from '@/public/underconstruction/image.png'

const Underconstruction = () => {
    return (
        <>
            <section id="underconstruction">
                <div className="content my-3 lg:my-20 p-4">
                    <Navbar />
                  
                    <div className="container mx-auto flex justify-center items-center mt-5">
                        <div className="w-5/6 lg mt-20">
                            <Image src={image} alt='image' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Underconstruction
