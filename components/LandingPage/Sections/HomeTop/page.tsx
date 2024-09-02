'use client';
import React from 'react';
import Link from "next/link";
import Navbar from "@/components/LandingPage/Sections/HomeTop/Navbar";
import RoundedButton from "@/common_views/RoundedButton";
import { useLanguage } from '@/context/LanguageContext';

const HomeTop = () => {

  const { t } = useLanguage();

  // Animation

  // const [showComponent, setShowComponent] = useState(false);

  // useEffect(() => {

  //   const timeout = setTimeout(() => {
  //     setShowComponent(true);
  //   }, 500); 


  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <section className='bg-home-bg bg-cover bg-center bg-no-repeat w-[100%] h-[900px]'>

      <div className='px-10 lg:px-0 mx-auto w-full'>

        {/* Nav Bar */}
        <div className='pt-10'>
          <Navbar />
        </div>

        {/* Main div */}
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center pt-20">

          {/* Text side */}
          <div className='max-w-[900px] flex flex-col gap-5 my-20 lg:my-10 lg:p-10 text-center lg:text-left  '>
            {/* text div */}
            <div>
              <h2 className="font-bold text-[30px] lg:text-[70.42px] mb-3" dangerouslySetInnerHTML={{ __html: t('HEADER') }}>

              </h2>

              <p className="text-[15px] lg:text-[20px] font-semibold text-black-50 "> {t('HEADER_DESCRIPTION')}</p>
            </div>

            {/* button div */}
            <div>
              <Link href="/products" className="mt-5">
                <RoundedButton
                  type="button"
                  title={t('HEADER_BUTTON')}
                  variant="btn_dark_green"
                  className="transform transition-transform duration-500 ease-in-out hover:translate-x-2 font-bold"
                />
              </Link>
            </div>
          </div>

          {/* div image */}
          {/* <div className="p-10 hidden lg:block pt-10">
            <Image src="/home/home-left.png" alt="homeleft" width={800} height={800} />
          </div> */}

        </div>

      </div>

    </section>
  )
}

export default HomeTop;
