'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Navbar from '@/components/LandingPage/Sections/HomeTop/Navbar';
import Detail from '@/components/DetailPages/Restaurants/Detail';

interface RestaurantDetail {
  id: number;
  name: string;
  profile_pic: string;
  price: string;
  weight: string;
  delivery_time: string;
  vat_value: string;
  description: string;
  created_at: string;
}

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState<RestaurantDetail | null>(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      if (id) {
        try {
          const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/topRestaurants');
          const restaurantDetail = response.data.data.find((res: RestaurantDetail) => res.id === parseInt(id as string));
          setRestaurantDetail(restaurantDetail || null); // Ensure to handle case where restaurantDetail is not found
        } catch (error) {
          console.error("Error fetching restaurant detail", error);
        }
      } else {
        console.log('No ID found in URL');
      }
    };

    fetchRestaurantDetail();
  }, [id]);

  if (!restaurantDetail) {
    return <div>Loading...</div>;
  }

  const backgroundImageUrl = `https://dashboard.paysano.it/public/storage/${restaurantDetail.profile_pic}`;

  return (
    <>

      <section
        id="restaurantDetail"
        className="min-h-[500px] lg:min-h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="nav pt-10">
          <Navbar />
        </div>
      </section>
      <Detail />
    </>
  );
};

export default RestaurantDetailPage;
