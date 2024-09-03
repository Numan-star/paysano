'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import VegetableCard from '@/common_views/VegetableCard';
import RoundedButton from '@/common_views/RoundedButton';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/common_views/ProductCard';

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

interface Props {
  selectedCategoryId: number | null; // Add this prop
}
const AllPRODUCTS: React.FC<Props> = ({ selectedCategoryId }) => {
  const [showComponent, setShowComponent] = useState(false);
  const [vegetables, setVegetables] = useState<Vegetable[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();
  useEffect(() => {
    const fetchVegetables = async () => {
      if (selectedCategoryId === null) return;
      try {
        // const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/getProducts');
        const response = await axios.get(`https://dashboard.paysano.it/public/api/landingPage/getProducts/${selectedCategoryId}`);
        console.log(response);
        setVegetables(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching vegetables:", error);
        setLoading(false);
      }
    };

    fetchVegetables();
  }, [selectedCategoryId]);
  
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
      className={`allVEGETABLES mt-20 transition-all duration-1000 ease-in-out bg-gray-50 mb-20 ${showComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="px-4 lg:px-8 mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {vegetables.map((vegetable: Vegetable) => (
            <ProductCard
              key={vegetable.id}
              iconSrc={`https://dashboard.paysano.it/public/storage/${vegetable.image}`}
              iconAlt={vegetable.name}
              // date={new Date(vegetable.created_at).toLocaleDateString()}
              date={vegetable.created_at}
              price={`$${vegetable.price}/${vegetable.weight}`}
              productName={vegetable.name}
              productNameLink={`/product/${vegetable.id}`}
              percentage={`${vegetable.vat_value}% VAT`}
              description={vegetable.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPRODUCTS;
