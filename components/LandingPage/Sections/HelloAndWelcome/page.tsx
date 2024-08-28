'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import axios from 'axios';
import { useLanguage } from '@/context/LanguageContext';
import RoundedButton from '@/common_views/RoundedButton';

interface Category {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
}

const HelloAndWelcome: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const { t } = useLanguage();

  useEffect(() => {
    // Fetch data from Categories API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/allCategories');
        if (response.data.status) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // Detect when the component comes into view
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY;
      const element = document.getElementById('helloAndWelcome');
      if (element && bottom >= element.offsetTop) {
        setShowComponent(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='helloAndWelcome' className={`mt-20 transition-all duration-1000 ease-in-out ${showComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className='container mx-auto grid grid-cols-1 gap-10'>

        <div className='text-center'>
          <h2 className='font-bold text-4xl'>{t('HELLO')}</h2>
          <div className=' mx-auto w-full md:w-3/6 '>
            <p dangerouslySetInnerHTML={{ __html: t('HELLO_DESCRIPTION') }}></p>
          </div>
        </div>

        {/* <div className='flex justify-center items-center'>
          <div className='bg-green h-[50px] w-[150px] rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:-translate-x-2'>
            <RoundedButton type="button" title="Restaurants" variant="text-black font-bold" full={true} />
          </div>
          <div className='bg-customGray text-textGray h-[50px] w-[175px] rounded-full flex text-center justify-center relative transform transition-transform duration-300 ease-in-out hover:translate-x-2' >
            <RoundedButton type='button' title="Stores" variant='text-black font-bold' full={true} />
          </div>
        </div> */}

        <div className=' flex items-center justify-center'>
          <div className='flex flex-row gap-5'>
            <div className=' flex items-center justify-center'>
              <div className='flex flex-row gap-5'>

                {categories.map((category) => (
                  <div key={category.id} className='relative flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:-translate-y-3 '>
                    <div className='relative w-14 md:w-20 h-80 my-4 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:w-64 overflow-hidden'>
                      <Image
                        src={`https://dashboard.paysano.it/public/storage/${category.image}`}
                        alt={category.name}
                        width={100}
                        height={100}
                        className='object-cover h-full w-full'
                      />
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='transform -rotate-90 text-white text-4xl font-bold'>
                          {category.name}
                        </div>
                      </div>
                    </div>

                    {/* ----------- This can be used for icon on the images --------------- */}

                    {/* <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                      <Image
                        src='./welcomeSection/healthyfood.svg'
                        alt='healthyfood'
                        width={20}
                        height={32}
                      />
                    </div> */}
                  </div>
                ))}

                {/*-------------- Without Apis This styling will be used -------------------- */}


                {/* <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Fruits.svg"
                      alt="fruits"
                      height={450}
                      width={100}
                    />
                    <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90 '>
                      Fruits
                    </div>
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/healthyfruits.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div> */}

                {/* <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Chinese.svg"
                      alt="chinese"
                      height={450}
                      width={100}
                    />
                    <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2   xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90 '>
                      Chinese
                    </div>
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/spaguetti.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div> 

                 <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Italian.svg"
                      alt="italian"
                      height={450}
                      width={100}
                    />
                    <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white  rotate-90 '>
                      Italian
                    </div>
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/pizza.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>
                </div>


                <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/FastFood.svg"
                      alt="fastfood"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold text-white rotate-90'>
                    FastFood
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/healthyfast.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div>

                <div className='relative hidden md:flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Beans.svg"
                      alt="beans"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2   xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90  '>
                    Beans
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/coffeebeans.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div>


                <div className='relative hidden md:flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2 ' >

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Drinks.svg"
                      alt="drinks"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white  rotate-90 '>
                    Drinks
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/poinseitta.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>


                </div>

                <div className='relative hidden md:flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2 '>

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Groceries.svg"
                      alt="groceries"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2   xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90  '>
                    Groceries
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/healthygrocery.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>


                </div> */}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default HelloAndWelcome;




