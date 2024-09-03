'use client';

import React, { useState } from 'react';
import HomeTop from "../../components/LandingPage/Sections/HomeTop/page";
import HelloAndWelcome from '@/components/LandingPage/Sections/HelloAndWelcome/page';
import AllProducts from '@/components/LandingPage/Sections/AllProducts/page';
import Footer from '@/components/LandingPage/Sections/Footer/page';
import { useLanguage } from '@/context/LanguageContext';

const Products = () => {

  const { t } = useLanguage();

  // const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(1);

  return (
    <div className='bg-gray-50'>
      <HomeTop HEADER={t('HEADER1')} HEADER_DESCRIPTION={t('HEADER_DESCRIPTION1')} checkButton={false} />
      <HelloAndWelcome setSelectedCategoryId={setSelectedCategoryId} checkButton={true} HELLO={t('HELLO1')} />
      <AllProducts selectedCategoryId={selectedCategoryId} />
      <Footer />
    </div>
  )
}

export default Products