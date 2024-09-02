import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns'; // Import date-fns
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';




type VegetableCardProps = {
    iconSrc: string;
    iconAlt: string;
    date: string;
    price: string;
    productNameLink?: string;
    productName: string;
    percentage: string;
    description: string;
};

const ProductCard: React.FC<VegetableCardProps> = ({
    iconSrc,
    iconAlt,
    date,
    price,
    productName,
    productNameLink,
    percentage,
    description,
}) => {
    const formattedDate = format(new Date(date), 'MMM dd, yyyy'); // Adjust format as needed

    const CardContent = () => (
        <div className='p-3 bg-white shadow shadow-lg'>
            <div className='items-left '>
                <Image src={iconSrc} alt={iconAlt} height={350} width={350} className='object-cover rounded-lg transform transition-transform duration-300 ease-in-out w-full' style={{ height: '350px' }} />
                {/* <div className="flex justify-between mt-5">
          <div className='flex gap-2 items-center'>
            <div className='text-gray-500'>
              <CalendarMonthIcon />
            </div>
            <div className="ml-2 text-gray-500">{formattedDate}</div>
          </div>
          <div className='flex text-right text-green font-semibold'>{price}</div>
        </div> */}
            </div>
            <div className="font-medium my-3 flex justify-between">
                <span className='text-xl text-[#A1A3A0]'>{productName}</span>
                {/* <span className='text-green'>{percentage}</span> */}
            </div>
            {/* <div className='mt-1 text-gray-500'>{`${description.slice(0, 25)}...`}</div> */}
            <div className='mt-3 text-xl font-semibold text-black'>{price}</div>
        </div>
    );

    if (productNameLink) {
        return (
            <Link href={productNameLink}>
                <div>
                    <CardContent />
                </div>
            </Link>
        );
    }

    return <CardContent />;
};

export default ProductCard;
