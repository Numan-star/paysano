'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreCard from '@/common_views/StoreCard';
import { useLanguage } from '@/context/LanguageContext';

interface Stores {
    id: string;
    name: string;
    profile_pic: string;
    open_time: string;
    close_time: string;
    reviews: number;
    average_rating: number;
    emptyStarSrc: string;
}

const TopStores: React.FC = () => {
    const [topstores, setTopStores] = useState<Stores[]>([]);

    const {t} = useLanguage();

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/topStores');
                if (response.data.status) {
                    // Extracting required data from the API response
                    const storesData: Stores[] = response.data.data.map((store: any) => ({
                        id: store.id,
                        name: store.name,
                        profile_pic: `https://dashboard.paysano.it/public/storage/${store.profile_pic}`,
                        open_time: store.open_time,
                        close_time: store.close_time,
                        reviews: store.reviews,
                        average_rating: store.average_rating,
                    }));
                    setTopStores(storesData);
                }
            } catch (error) {
                console.error('Error fetching top stores:', error);
            }
        };
        fetchStores();
    }, []);

    return (
        <section id="topStores" className="mt-20 pb-20 bg-lightGray p-5">
            <div className="flex flex-col items-center ">
                <h2 className="text-4xl lg:text-4xl font-semibold lg:m-10 m-5 text-center" dangerouslySetInnerHTML={{ __html: t('TOP_STORES') }}></h2>
                <p className='text-textGray max-w-lg mx-auto text-center mb-5'>{t('TOP_STORES_DESCRIPTION')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {topstores.map((store, index) => (
                        <StoreCard
                            key={index}
                            storeName={store.name}
                            openingHours={`${store.open_time} Am - ${store.close_time} Pm`}
                            rating={store.average_rating.toString()} // Converting number to string
                            numberOfReviews={store.reviews.toString()} // Converting number to string
                            imageSrc={store.profile_pic}
                            emptyStarSrc = ''
                            
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopStores;
