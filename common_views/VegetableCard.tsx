import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  const CardContent = () => (
    <div className='border rounded p-3 '>
      <div className='items-left '>
        <Image src={iconSrc} alt={iconAlt} height={350} width={310} className='transform transition-transform duration-300 ease-in-out hover:scale-90 w-[100%]' />
        <div className="flex justify-between mt-6">
          <div className="ml-2">{date}</div>
          <div className='flex text-right text-green font-semibold'>{price}</div>
        </div>
      </div>
      <div className="font-bold mb-1 mt-2 flex justify-between">
        <span>{productName}</span>
        <span className='text-green'>{percentage}</span>
      </div>
      <div>{description}</div>
    </div>
  );

  if (productNameLink) {
    return (
      <Link href={productNameLink}>
        <div className="hover:text-green">
          <CardContent />
        </div>
      </Link>
    );
  }

  return <CardContent />;
};

export default VegetableCard;
