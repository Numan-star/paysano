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

const VegetableCard: React.FC<VegetableCardProps> = ({
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
    <div className='border p-3 '>
      <div className='items-left '>
        <Image src={iconSrc} alt={iconAlt} height={400} width={380} className='object-cover rounded-lg transform transition-transform duration-300 ease-in-out w-full' style={{ height: '300px' }} />
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
      <div className="font-semibold mb-1 mt-2 flex justify-between">
        <span className='text-xl'>{productName}</span>
        {/* <span className='text-green'>{percentage}</span> */}
      </div>
      <div className='mt-1 text-gray-500'>{`${description.slice(0, 25)}...`}</div>
      <div className='mt-4 text-xl font-semibold text-green'>{price}</div>
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

export default VegetableCard;
