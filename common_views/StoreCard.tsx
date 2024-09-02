import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

type StoreCardProps = {
    storeName: string;
    openingHours: string;
    rating: string;
    numberOfReviews: string;
    imageSrc: string;
    emptyStarSrc: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ storeName, openingHours, rating, numberOfReviews, imageSrc, emptyStarSrc }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;

        if (card) {
            const handleMouseEnter = () => {
                gsap.to(card, { scale: 0.9, duration: 0.3, ease: 'power1.out' });
            };

            const handleMouseLeave = () => {
                gsap.to(card, { scale: 1, duration: 0.3, ease: 'power1.out' });
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    // Determine the number of filled stars based on the rating
    const filledStars = Math.floor(parseFloat(rating));

    // Render filled stars
    const filledStarComponents = [...Array(filledStars)].map((_, index) => (
        <Image
            key={index}
            src='./storesSection/star.svg'
            alt={`star-${index}`}
            width={20}
            height={20}
        />
    ));

    // Determine the number of empty stars
    const emptyStars = 5 - filledStars;

    // Render empty stars
    const emptyStarComponents = [...Array(emptyStars)].map((_, index) => (
        <Image
            key={index}
            src='./storesSection/greystar.svg'
            alt={`empty-star-${index}`}
            width={20}
            height={20}
        />
    ));

    return (
        <div ref={cardRef} className="card rounded-lg border-white bg-white shadow-lg overflow-hidden">
            <div className="image-container z-10" style={{ width: '400px', height: '300px', position: 'relative' }}>
                <Image
                    src={imageSrc}
                    alt={storeName}
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <div className="details flex flex-col items-start p-4">
                <div className='bg-green h-[40px] w-[200px] rounded-full flex items-center justify-center mb-3 px-5 gap-4'>
                    <Image
                        src='/storesSection/clock.svg'
                        alt='clock'
                        width={20}
                        height={20}
                    />
                    <p className='py-4 my-2'>{openingHours}</p>
                </div>
                <span className='text-xl font-semibold mb-3 ml-3 hover:text-green'>{storeName}</span>
                <div className="flex justify-start gap-4 px-4">
                    <div className="stars flex justify-start px-4">
                        {filledStarComponents}
                        {emptyStarComponents}
                    </div>
                    <div className="ratings flex gap-4">
                        <span className='text-lg font-semibold'>{rating}</span>
                        <span className='text-textGray'>({numberOfReviews})</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreCard;
