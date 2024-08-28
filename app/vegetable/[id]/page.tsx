'use client'; // Ensure this is at the top of your file

import { useRouter } from 'next/router'; // Import from 'next/router'
import { useParams } from 'next/navigation'; // Import for useParams if needed
import { useEffect, useState } from 'react';
import Link from "next/link";

import axios from 'axios';
import Image from 'next/image';
import Navbar from '@/components/LandingPage/Sections/HomeTop/Navbar';
import Footer from '@/components/LandingPage/Sections/Footer/page';
import { useLanguage } from '@/context/LanguageContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

const formatPrice = (price: string) => parseFloat(price).toFixed(2);

const formatDeliveryTime = (deliveryTime: string) => deliveryTime.replace(/(\d+)-(\d+)/, '$1 - $2');

const VegetableDetail: React.FC = () => {
  const { id } = useParams(); // Use useParams if you're using App Router
  const [vegetable, setVegetable] = useState<Vegetable | null>(null);
  const [loading, setLoading] = useState(true);

  // const router = useRouter();

  // const handleBackClick = () => {
  //   router.back();
  // };

  const { t } = useLanguage();

  useEffect(() => {
    if (id) {
      const fetchVegetable = async () => {
        try {
          const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/getVegetables');
          const selectedVegetable = response.data.data.find((veg: Vegetable) => veg.id === parseInt(id as string));
          setVegetable(selectedVegetable);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching vegetable:', error);
          setLoading(false);
        }
      };

      fetchVegetable();
    } else {
      setLoading(false); // Stop loading if no id is found
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!vegetable) return <div>Vegetable not found</div>;

  return (
    <>
      <div className="p-10 lg:pt-10 lg:px-0">
        <Navbar />
      </div>
      <div className='mx-6 flex gap-2 items-center mt-10'>
        <div className='text-3xl font-bold'>
          <Link href="/">
            <ArrowBackIcon
              className="inline-block cursor-pointer"
              fontSize="large"
            // onClick={handleBackClick}
            />
          </Link>
        </div>
        <div>
          <h1 className='text-3xl font-semibold'>Product Detail </h1>
        </div>
      </div>
      <div
        id="VegetableDetail"
        className="mx-auto mt-[40px] bg-white rounded-xl transition-all duration-1000 ease-in-out p-4 md:flex md:items-center md:justify-between md:p-8 lg:w-5/5 overflow-hidden max-w-full"
      >
        <div className="md:w-1/2 md:flex-shrink-0 md:pr-8 w-full">
          <Image
            src={`https://dashboard.paysano.it/public/storage/${vegetable.image}`}
            alt={vegetable.name}
            height={560}
            width={480}
            className="w-full rounded-lg object-cover h-[320px] md:h-[450px] lg:h-[570px]"
          />
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2 w-full">
          <div className="text-4xl font-semibold hover:text-green">{vegetable.name}</div>
          <p className="mt-2 text-gray-500 text-xl">{vegetable.description}</p>

          <div className="mt-12">
            <span className="font-semibold text-2xl">{t('Delivery')}</span>
            <span className="text-textGray flex items-center mt-2">
              <Image
                src="/organicSection/clock.svg"
                alt="Delivery time"
                height={50}
                width={50}
                className="p-3"
              />
              {formatDeliveryTime(vegetable.delivery_time)} days
            </span>
          </div>

          <div className="mt-12">
            <span className="font-semibold text-2xl">VAT {t('Value')}</span>
            <span className="text-green flex items-center font-semibold mt-2">{vegetable.vat_value}%</span>
          </div>

          <div className="mt-12 flex justify-between">
            <span className="font-semibold text-4xl text-green">${formatPrice(vegetable.price)}</span>
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
