'use client';

import React from 'react'
import HomeTop from "../../components/LandingPage/Sections/HomeTop/page";
import { useLanguage } from '@/context/LanguageContext';
import HelloAndWelcome from '@/components/LandingPage/Sections/HelloAndWelcome/page';
import AllProducts from '@/components/LandingPage/Sections/AllProducts/page';
import Footer from '@/components/LandingPage/Sections/Footer/page';


const products = () => {

  const { t } = useLanguage();

  return (
    <div className='bg-gray-50'>
      <HomeTop HEADER={t('HEADER1')} HEADER_DESCRIPTION={t('HEADER_DESCRIPTION1')} checkButton={false} />
      <HelloAndWelcome checkButton={true} HELLO={t('HELLO1')}/>
      <AllProducts/>
      <Footer />
    </div>
  )
}

export default products