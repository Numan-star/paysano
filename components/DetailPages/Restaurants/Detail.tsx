import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import About from './About';
import clock from '@/public/restaurantsDetail/clock.svg';
import Cuisine from '@/public/restaurantsDetail/cuisine.svg';
import distance from '@/public/restaurantsDetail/distance.svg';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams, usePathname } from 'next/navigation';


interface Detail {
  id: number;
  name: string;
  reviews: string;
  profile_pic: string;
  phone_no: string;
  location: string;
  email: string;
  average_rating: string;
  open_time: string;
  close_time: string;
  cuisine_id: { id: number; name: string };
}

const Details = () => {
  const pathname = usePathname();
  const isClickable = pathname === '/restaurantDetail/{id?}';
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



        <div className="detail-content p-5">

          <div className="flex gap-2 items-center mb-10 mx-1">
            <div className="text-3xl font-bold">
              <Link href={isClickable ? '/' : '/'}>
                <ArrowBackIcon
                  className="inline-block cursor-pointer"
                  fontSize="large"
                />
              </Link>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">Restaurant Detail</h1>
            </div>
          </div>

          {detail ? (
            <>
              {/* <div>
              <Image src={`https://dashboard.paysano.it/public/storage/${detail.profile_pic}`} alt='image' width={400} height={500}/>
            </div>

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
              </div> */}

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                {/* Right Side: Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center mb-5 lg:mb-0">
                  <Image
                    src={`https://dashboard.paysano.it/public/storage/${detail.profile_pic}`}
                    alt="image"
                    width={700}
                    height={700}
                    className="w-full h-auto object-cover lg:w-[580px] lg:h-[680px] rounded"
                  />
                </div>

                {/* Left Side: Info Section */}
                <div className="w-full lg:w-1/2 lg:pl-10">

                  <div className="time mt-10 flex gap-x-2 my-5 bg-[#8BC63E26] rounded-full p-3 w-fit">
                    <Image src={clock} alt="clock" className="w-[20px] h-auto" />
                    <p className="text-xl text-[#17282F]">
                      {detail.open_time} - {detail.close_time}
                    </p>
                  </div>

                  <div className="info flex flex-col md:flex-row md:justify-between my-5">
                    <h1 className="text-3xl md:text-4xl font-bold">{detail.name}</h1>
                  </div>

                  <div className="time flex gap-x-2 my-5 w-fit">
                    {/* Star rating logic */}
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Image
                          key={index}
                          src={index < Math.floor(parseFloat(detail.average_rating)) ? '/solid-star.svg' : '/outline-star.svg'}
                          alt="star"
                          width={30}
                          height={30}
                          className="w-[20px] h-auto mr-1"
                        />
                      ))}
                    </div>
                    <p className="text-[#A1A3A0] text-lg">({detail.reviews} Reviews)</p>
                  </div>

                  <div className="info flex flex-col md:flex-row md:justify-between mb-5 mt-12">
                    <h1 className="text-xl md:text-2xl font-medium">Contact Details</h1>
                  </div>


                  <div className="distance flex gap-x-5 items-center my-5">
                    <Image src="/call.svg" alt="distance" width={20} height={20} className="w-[20px] h-auto" />
                    <p className="text-[#A1A3A0] text-lg">{detail.phone_no}</p>
                  </div>
                  <div className="distance flex gap-x-5 items-center my-5">
                    <Image src="/message.svg" alt="distance" width={20} height={20} className="w-[20px] h-auto" />
                    <p className="text-[#A1A3A0] text-lg">{detail.email}</p>
                  </div>
                  <div className="distance flex gap-x-5 items-center my-5">
                    <Image src="/map.svg" alt="distance" width={20} height={20} className="w-[20px] h-auto" />
                    <p className="text-[#A1A3A0] text-lg">{detail.location}</p>
                  </div>

                  <div className="cuisine flex justify-between items-center gap-x-3 mb-3 mt-20">
                    <p className="text-2xl font-semibold">Cuisine :</p>
                    <p className="text-[#A1A3A0] text-lg">{detail.cuisine_id.name}</p>
                  </div>
                </div>
              </div>


              {/* <div className="options flex justify-between shadow-lg rounded-full p-3 my-5">
                <p
                  onClick={() => setSelectedSection('Menu')}
                  className={`py-3 px-8 rounded-full font-semibold cursor-pointer ${selectedSection === 'Menu' ? 'bg-[#8BC63E]' : ''
                    }`}
                >
                  Menu
                </p>
                <p
                  onClick={() => setSelectedSection('About')}
                  className={`py-3 px-8 rounded-full font-semibold cursor-pointer ${selectedSection === 'About' ? 'bg-[#8BC63E]' : ''
                    }`}
                >
                  About
                </p>
                <p
                  onClick={() => setSelectedSection('Reviews')}
                  className={`py-3 px-8 rounded-full font-semibold cursor-pointer ${selectedSection === 'Reviews' ? 'bg-[#8BC63E]' : ''
                    }`}
                >
                  Reviews
                </p>
              </div> */}

              <div className="options flex justify-between shadow-lg rounded-full p-2 sm:p-3 my-5">
                <p
                  onClick={() => setSelectedSection('Menu')}
                  className={`py-2 px-4 sm:py-3 sm:px-8 rounded-full font-semibold text-center cursor-pointer ${selectedSection === 'Menu' ? 'bg-[#8BC63E] text-white' : ''
                    } transition-all duration-300`}
                >
                  Menu
                </p>
                <p
                  onClick={() => setSelectedSection('About')}
                  className={`py-2 px-4 sm:py-3 sm:px-8 rounded-full font-semibold text-center cursor-pointer ${selectedSection === 'About' ? 'bg-[#8BC63E] text-white' : ''
                    } transition-all duration-300`}
                >
                  About
                </p>
                <p
                  onClick={() => setSelectedSection('Reviews')}
                  className={`py-2 px-4 sm:py-3 sm:px-8 rounded-full font-semibold text-center cursor-pointer ${selectedSection === 'Reviews' ? 'bg-[#8BC63E] text-white' : ''
                    } transition-all duration-300`}
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
