import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import phone from '@/public/restaurantsDetail/phone.svg'
import mail from '@/public/restaurantsDetail/email.svg'
import pinlocation from '@/public/restaurantsDetail/location.svg'
import facebook from '@/public/restaurantsDetail/facebook.svg';
import instagram from '@/public/restaurantsDetail/instagram.svg';
import google from '@/public/restaurantsDetail/google.svg';
import Footer from '@/components/LandingPage/Sections/Footer/page';

interface SocialLink {
    id: number;
    name: string;
    link: string;
}

interface RestaurantDetail {
    id: number;
    name: string;
    description: string;
    location: string;
    latitude: number;
    longitude: number;
    phone_no: string;
    email: string;
    social_links: SocialLink[];
    restaurant_sub_images: Array<{ id: number; picture: string }>;
}

const About = () => {
    const { id } = useParams();
    const [restaurantDetail, setRestaurantDetail] = useState<RestaurantDetail | null>(null);

    useEffect(() => {
        const fetchRestaurantDetail = async () => {
            try {
                const response = await axios.get(`https://dashboard.paysano.it/public/api/landingPage/topRestaurants`);
                const restaurant = response.data.data.find((res: RestaurantDetail) => res.id === parseInt(id as string));
                setRestaurantDetail(restaurant || null);
            } catch (error) {
                console.error('Error fetching restaurant detail', error);
            }
        };

        fetchRestaurantDetail();
    }, [id]);

    if (!restaurantDetail) {
        return <div>Loading...</div>;
    }

    const { description, location, latitude, longitude, phone_no, email, social_links, restaurant_sub_images } = restaurantDetail;

    const getIconByName = (name: string) => {
        switch (name.toLowerCase()) {
            case 'facebook':
                return facebook;
            case 'instagram':
                return instagram;
            case 'google':
                return google;
            default:
                return null;
        }
    };

    return (
        <>
            <section id="about" className="py-8">
                <div className="container mx-auto">
                    <div className="about-content">
                        <h2 className="text-3xl font-bold mb-4">Description:</h2>
                        <p className="mb-4">{description}</p>

                        <div className="location flex gap-x-5 my-5">
                            <Image src={pinlocation} alt='pinlocation' width={20} height={100} />
                            <p className="tetx-xl text-[#666666] font-semibold">{location}</p>
                        </div>

                        <div className="mb-4">
                            <iframe
                                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}`}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-lg w-full h-[500px]"
                            ></iframe>
                        </div>

                        <div className="contact-details flex justify-between my-5">

                            <div className="left">

                                <h3 className="text-2xl font-semibold mb-2">Contact Details</h3>
                                <div className="phone flex gap-x-5 my-5">
                                    <Image src={phone} alt='phone' width={20} height={100} />
                                    <p className='text-xl '>{phone_no}</p>
                                </div>

                                <div className="email flex gap-x-5">
                                    <Image src={mail} alt='phone' width={20} height={100} />
                                    <p className='text-xl '>{email}</p>
                                </div>
                            </div>


                            <div className="right">
                                <h3 className="text-2xl font-semibold mb-2 mt-4">Social Media Links</h3>
                                <ul className="flex gap-4">
                                    {social_links.map((link) => (
                                        <li key={link.id}>
                                            <Link href={link.link} target="_blank" rel="noopener noreferrer">
                                                <div className="social-media flex flex-col items-center">
                                                    <Image src={getIconByName(link.name)} alt={link.name} width={40} height={40} />
                                                    <p className='text-lg font-semibold'>{link.name}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <h3 className="text-2xl font-bold my-5">Pictures</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {restaurant_sub_images.map((image) => (
                                <Image key={image.id} src={`https://dashboard.paysano.it/public/storage/${image.picture}`} alt="Restaurant Sub Image" className="w-full h-auto rounded-lg" width={100} height={100} />
                            ))}
                        </div>
                    </div>
                </div>



            </section >
            <Footer />
        </>
    );
};

export default About;
