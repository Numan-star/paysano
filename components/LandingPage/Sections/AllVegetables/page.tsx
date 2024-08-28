'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import axios from 'axios';
import VegetableCard from '@/common_views/VegetableCard';
import RoundedButton from '@/common_views/RoundedButton';
import { useLanguage } from '@/context/LanguageContext';

interface Vegetable {
  id: number;
  name: string;
  image: string;
  price: string;
  weight: string;
  delivery_time: string;
  vat_value: string;
  category_name: string;
  created_at: string;
  description: string;

}

const AllVEGETABLES: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [vegetables, setVegetables] = useState<Vegetable[]>([]);
  const [loading, setLoading] = useState(true);

  const { t } = useLanguage();

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/getVegetables');
        setVegetables(response.data.data.slice(0, 6)); // Take only the first 6 vegetables
        setLoading(false);
      } catch (error) {
        console.error("Error fetching vegetables:", error);
        setLoading(false);
      }
    };

    fetchVegetables();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY;
      const element = document.getElementById('allVEGETABLES');
      if (element && bottom >= element.offsetTop) {
        setShowComponent(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="allVEGETABLES"
      className={`allVEGETABLES mt-20 transition-all duration-1000 ease-in-out ${showComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex flex-col lg:flex-row w-full justify-center">
        <div className="relative lg:w-[900px] h-[550px] lg:h-[920px] xl:h-[870px] overflow-hidden">
          <Image
            src="./allvegetablesSection/all.png"
            alt="Vegetables"
            fill
            style={{ objectFit: 'cover' }}
            className=" lg:rotate-0"
          />
          <div className="absolute inset-0 bg-[#0000004D] bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4 ">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4 opacity-100">{t('ALL_VEGETABLES')}</h2>
            <div className="bg-green h-[50px] w-[150px] rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110">
              <RoundedButton type="button" title={t('RESTAURANTS_BUTTON')} variant="text-black font-bold" full={true} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:ml-0 lg:gap-0 h-full">
          {vegetables.map((vegetable: Vegetable) => (
            <VegetableCard
              key={vegetable.id}
              iconSrc={`https://dashboard.paysano.it/public/storage/${vegetable.image}`}
              iconAlt={vegetable.name}
              date={new Date(vegetable.created_at).toLocaleDateString()}
              price={`$ ${vegetable.price} per ${vegetable.weight}`}
              productName={vegetable.name}
              productNameLink={`/vegetable/${vegetable.id}`} // Pass the link here
              percentage={`${vegetable.vat_value}% VAT`}
              description={vegetable.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllVEGETABLES;
