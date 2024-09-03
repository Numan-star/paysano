'use client';

import React, { useState } from 'react';
import HomeTop from "./Sections/HomeTop/page";
import HelloAndWelcome from "./Sections/HelloAndWelcome/page";
import AllVegetables from "./Sections/AllVegetables/page";
import TopStores from "./Sections/TopStores/page";
import Restuarants from "./Sections/Restaurants/page";
import Contact from "./Sections/Contact/page";
import Footer from "./Sections/Footer/page";
import { useLanguage } from '@/context/LanguageContext';

const Page = () => {
    const { t } = useLanguage();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(1);


    return (
        <div>
            <HomeTop HEADER={t('HEADER')} HEADER_DESCRIPTION={t('HEADER_DESCRIPTION')} checkButton={true}/>
            <HelloAndWelcome setSelectedCategoryId={setSelectedCategoryId} checkButton={false} HELLO={t('HELLO')}/>
            <AllVegetables />
            <TopStores />
            <Restuarants />
            <Contact />
            <Footer />
        </div>
    )
}
export default Page