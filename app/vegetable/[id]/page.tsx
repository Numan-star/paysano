'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Navbar from '@/components/LandingPage/Sections/HomeTop/Navbar';
import Footer from '@/components/LandingPage/Sections/Footer/page';
import { useLanguage } from '@/context/LanguageContext';

interface Vegetable {
  id: number;
  name: string;
  image: string;
  price: string;
  weight: string;
  delivery_time: string;
  vat_value: string;
  description: string;
  created_at: string;
}

const VegetableDetail: React.FC = () => {
  const { id } = useParams(); // Use useParams to get the id
  const [vegetable, setVegetable] = useState<Vegetable | null>(null);
  const [loading, setLoading] = useState(true);

  const {t} = useLanguage();

  useEffect(() => {
    if (id) {
      console.log('Retrieved id from URL:', id); // Debugging log for id
      const fetchVegetable = async () => {
        try {
          const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/getVegetables');
          console.log('API response data:', response.data.data); // Debugging log for response
          const selectedVegetable = response.data.data.find((veg: Vegetable) => veg.id === parseInt(id as string));
          console.log('Selected Vegetable:', selectedVegetable); // Debugging log for selected vegetable
          setVegetable(selectedVegetable);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching vegetable:', error);
          setLoading(false); 
        }
      };

      fetchVegetable();
    } else {
      console.log('No id found in URL');
      setLoading(false); // Stop loading if no id is found
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!vegetable) {
    return <div>Vegetable not found</div>;
  }
  return (
    <>
      <div className="p-10 lg:pt-10 lg:px-0">
        <Navbar />
      </div>
      <div id="VegetableDetail" className="m-5 mx-auto md:w-[95%] lg:max-w-fit mt-[150px] bg-white rounded-xl shadow-2xl transition-all duration-1000 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image on the left */}
          <div className="md:flex-shrink-0">
            <Image
              src={`https://dashboard.paysano.it/public/storage/${vegetable.image}`}
              alt={vegetable.name}
              height={560}
              width={480}
              className="p-6 w-full"
            />
          </div>
          <div className="p-8">
            {/* Text on the right */}
            <div className="tracking-wide text-4xl font-semibold hover:text-green">{vegetable.name}</div>
            <p className="mt-2 text-gray-500 text-xl">{vegetable.description}</p>
            <div className="mt-12">
              <span className="font-semibold text-2xl">{t('Delivery')}</span>
              <span className="text-textGray flex items-center">
                <Image
                  src="/organicSection/clock.svg"
                  alt="Delivery time"
                  height={50}
                  width={50}
                  className="p-3"
                /> {vegetable.delivery_time} days
              </span>
            </div>
            <div className="mt-12">
              <span className="font-semibold text-2xl">VAT {t('Value')}</span>
              <span className="text-green flex items-center font-semibold">{vegetable.vat_value}%</span>
            </div>
            <div className="mt-12 flex justify-between">
              <span className="font-semibold text-4xl text-green">${vegetable.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <Footer />
      </div>
    </>
  );
};

export default VegetableDetail;
