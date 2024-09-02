'use client';

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

    return (
        <div>
            <HomeTop HEADER={t('HEADER')} HEADER_DESCRIPTION={t('HEADER_DESCRIPTION')} checkButton={true}/>
            <HelloAndWelcome checkButton={false} HELLO={t('HELLO')}/>
            <AllVegetables />
            <TopStores />
            <Restuarants />
            <Contact />
            <Footer />
        </div>
    )
}
export default Page