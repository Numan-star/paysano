import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import About from './About';
import clock from '@/public/restaurantsDetail/clock.svg';
import Cuisine from '@/public/restaurantsDetail/cuisine.svg';
import distance from '@/public/restaurantsDetail/distance.svg';

interface Detail {
  id: number;
  name: string;
  reviews: string;
  average_rating: string;
  open_time: string;
  close_time: string;
  cuisine_id: { id: number; name: string };
}

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<Detail | null>(null);
  const [selectedSection, setSelectedSection] = useState<'Menu' | 'About' | 'Reviews'>('Menu');

  useEffect(() => {
    const fetchDetail = async () => {
      if (id) {
        try {
          const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/topRestaurants');
          const detail = response.data.data.find((det: Detail) => det.id === parseInt(id as string));
          setDetail(detail || null);
        } catch (error) {
          console.error('Error fetching detail', error);
        }
      } else {
        console.log('No ID found in URL');
      }
    };

    fetchDetail();
  }, [id]);

  const renderSection = () => {
    switch (selectedSection) {
      case 'Menu':
        return <p>Menu content goes here</p>;
      case 'About':
        return <About />;
      case 'Reviews':
        return <p>Reviews content goes here</p>;
      default:
        return null;
    }
  };

  return (
    <section id="details">
      <div className="container mx-auto">
        <div className="detail-content p-5 ">
          {detail ? (
            <>
              <div className="info flex justify-between my-5">
                <h1 className="text-4xl font-bold ">{detail.name}</h1>
                <div className="rating flex gap-x-3">
                  <p className="text-lg">{detail.average_rating}</p>
                  <p className="text-[#A1A3A0] text-lg">({detail.reviews} Reviews) </p>
                </div>
              </div>

              <div className="cuisine flex gap-x-5">
                <p className="text-lg font-semibold">Cuisine</p>
                <div className="place flex gap-x-2">
                  <Image src={Cuisine} alt="cusisine" className="w-[20%]" />
                  <p className="text-lg text-green">{detail.cuisine_id.name}</p>
                </div>
              </div>

              <div className="time flex gap-x-2 my-5 bg-[#8BC63E26] rounded-full p-3 w-[20%]">
                <Image src={clock} alt="clock" className="w-[10%]" />
                <p className="text-xl text-[#17282F]">
                  {detail.open_time} - {detail.close_time}
                </p>
              </div>

              <div className="distance flex gap-x-5 px-5 my-5">
                <Image src={distance} alt="distance" className="w-[2%]" />
                <p className="text-2xl font-semibold">Distance</p>
              </div>

              <div className="options flex justify-between shadow-lg rounded-full p-3 my-5">
                <p
                  onClick={() => setSelectedSection('Menu')}
                  className={`py-3 px-8 rounded-full font-semibold cursor-pointer ${
                    selectedSection === 'Menu' ? 'bg-[#8BC63E]' : ''
                  }`}
                >
                  Menu
                </p>
                <p
                  onClick={() => setSelectedSection('About')}
                  className={`py-3 px-8 rounded-full font-semibold cursor-pointer ${
                    selectedSection === 'About' ? 'bg-[#8BC63E]' : ''
                  }`}
                >
                  About
                </p>
                <p
                  onClick={() => setSelectedSection('Reviews')}
                  className={`py-3 px-8 rounded-full font-semibold cursor-pointer ${
                    selectedSection === 'Reviews' ? 'bg-[#8BC63E]' : ''
                  }`}
                >
                  Reviews
                </p>
              </div>

              {renderSection()}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Details;
