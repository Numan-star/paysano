'use client'
import React, { useState, useEffect } from 'react';
import StoreCard from '@/common_views/StoreCard';
import axios from 'axios';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

interface Restaurants {
    id: string;
    name: string;
    profile_pic: string;
    open_time: string;
    close_time: string;
    reviews: number;
    average_rating: number;
}

const Restaurants: React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

    const { t } = useLanguage();

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/topRestaurants');
                if (response.data.status) {
                    // Extracting required data from the API response
                    const restaurantsData: Restaurants[] = response.data.data.map((restaurant: any) => ({
                        id: restaurant.id,
                        name: restaurant.name,
                        profile_pic: `https://dashboard.paysano.it/public/storage/${restaurant.profile_pic}`,
                        open_time: restaurant.open_time,
                        close_time: restaurant.close_time,
                        reviews: restaurant.reviews,
                        average_rating: restaurant.average_rating,
                    }));
                    setRestaurants(restaurantsData);
                }
            }
            catch (error) {
                console.error('Error fetching top stores:', error);
            }
        };
        fetchRestaurants();
    }, []);

    return (
        <section id="topStores" className="pb-20 bg-lightGray p-5">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl lg:text-4xl font-semibold lg:m-10 my-3 text-center" dangerouslySetInnerHTML={{ __html: t('TOP_RESTAURANTS') }}></h2>
                <p className='text-textGray max-w-lg mx-auto text-center mb-5 leading-30'>{t('TOP_RESTAURANTS_DESCRIPTION')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {restaurants.map((restaurant, index) => (
                        <Link href={`/restaurantDetail/${restaurant.id}`} key={index}>
                                <StoreCard
                                    storeName={restaurant.name}
                                    openingHours={`${restaurant.open_time} - ${restaurant.close_time}`}
                                    rating={restaurant.average_rating.toString()}
                                    numberOfReviews={restaurant.reviews.toString()}
                                    imageSrc={restaurant.profile_pic}
                                    emptyStarSrc='/storesSection/emptyStar.svg'
                                />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Restaurants;
