// HelloAndWelcome.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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

interface Props {
  checkButton: boolean;
  HELLO: string;
  setSelectedCategoryId: (id: number) => void;
}

const HelloAndWelcome: React.FC<Props> = ({ checkButton, HELLO, setSelectedCategoryId }) => {
  const pathname = usePathname();
  const isClickable = pathname === '/products';

  const [showComponent, setShowComponent] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<'stores' | 'restaurants'>('stores');
  const { t } = useLanguage();

  // Fetch categories based on active button
  const fetchCategories = async (categoryType: 'stores' | 'restaurants') => {
    try {
      const response = await axios.get(
        categoryType === 'stores'
          ? 'https://dashboard.paysano.it/public/api/landingPage/allStoreCategories'
          : 'https://dashboard.paysano.it/public/api/landingPage/allRestaurantCategories'
      );
      if (response.data.status) {
        setCategories(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories(activeCategory);
  }, [activeCategory]);

  useEffect(() => {
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
    <section id='helloAndWelcome' className={`mt-20 transition-all duration-1000 bg-gray-50 ease-in-out ${showComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className='container mx-auto grid grid-cols-1 gap-10'>
        <div className='text-center'>
          <h2 className='font-bold text-4xl mb-4 tracking-wider'>{HELLO}</h2>
          {!checkButton && (
            <div className='mx-auto w-full md:w-3/6'>
              <p dangerouslySetInnerHTML={{ __html: t('HELLO_DESCRIPTION') }}></p>
            </div>
          )}
        </div>

        {checkButton && (
          <div className='flex justify-center items-center'>
            <div
              className={`h-[50px] w-[150px] rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:-translate-x-2 ${activeCategory === 'stores' ? 'bg-green text-white' : 'bg-white-200 text-black border border-gray-200'}`}
              onClick={() => setActiveCategory('stores')}
            >
              <RoundedButton
                type="button"
                title="Stores"
                variant="text-black font-bold"
                full={true}
              />
            </div>
            <div
              className={`h-[50px] w-[175px] rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:translate-x-2 ${activeCategory === 'restaurants' ? 'bg-green text-white' : 'bg-white-200 text-black border border-gray-200'}`}
              onClick={() => setActiveCategory('restaurants')}
            >
              <RoundedButton
                type="button"
                title="Restaurants"
                variant="text-black font-bold"
                full={true}
              />
            </div>
          </div>
        )}

        <div className='flex items-center justify-center'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`relative flex flex-col items-center transition-transform duration-500 ease-in-out transform ${isClickable ? 'hover:-translate-y-3 cursor-pointer' : ''
                  }`}
                onClick={isClickable ? () => setSelectedCategoryId(category.id) : undefined}
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloAndWelcome;
