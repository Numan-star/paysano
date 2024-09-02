import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo-main.svg'
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <section className='footer mt-12 md:ml-3 px-6'>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                <div className='first-half lg:w-3/5 lg:pr-10 flex flex-col justify-center lg:items-start md:items-center items-center mb-6 lg:mb-0'>
                    <div className="logo mb-6">
                        <Image src={logo} alt='logo' width={64} height={53} />
                    </div>
                    <div className='text text-textGray text-center sm:text-start max-w-sm lg:max-w-md'>
                        <p className="mx-auto lg:mx-0 lg:text-left md:text-center text-center">{t('FOOTER_DESCRIPTION')}</p>
                    </div>
                    <div className='my-5'>
                        <Image src="/insta.svg" alt="insta icon" width={40} height={40} />
                    </div>
                </div>

                <div className="sections lg:w-1/2 lg:pl-1 flex flex-col lg:flex-row lg:items-start text-center lg:text-start space-y-6 lg:space-y-0 lg:space-x-0">
                    <div className="support flex-1 mx-6">
                        <h1 className="text-2xl font-semibold mb-6">{t('SUPPORT')}</h1>
                        <ul className="space-y-3 text-textGray">
                            <li className='hover:text-green'>{t('LIST_HOME')}</li>
                            <li className='hover:text-green'>{t('LIST_ABOUT')}</li>
                            <li className='hover:text-green'>{t('LIST_FAQS')}</li>
                            <li className='hover:text-green'>{t('LIST_SUPPORT')}</li>
                        </ul>
                    </div>

                    <div className="features flex-1 flex flex-col justify-center lg:items-start md:items-center items-center">
                        <h1 className="text-2xl font-semibold mb-6">{t('FEATURES')}</h1>
                        <ul className="space-y-3 mb-5">
                            <li className='hover:text-green'>
                                <Image src="/appStore.png" alt="app store icon" width={200} height={40} />
                            </li>
                            <li className='hover:text-green'>
                                <Image src="/googlePlay.png" alt="google play icon" width={200} height={40} />
                            </li>
                        </ul>
                    </div>

                    {/* Uncomment and adjust if needed */}
                    {/* <div className="trending flex-1 m-6">
      <h1 className="text-2xl font-semibold mb-6">{t('TRENDING')}</h1>
      <ul className="space-y-3 text-textGray">
        <li className='hover:text-green'>{t('LIST_SHOP')}</li>
        <li className='hover:text-green'>{t('LIST_PORTFOLIO')}</li>
        <li className='hover:text-green'>{t('LIST_BLOGS')}</li>
      </ul>
    </div> */}
                </div>
            </div>

            <div className="copyright text-center border-t-2 p-5">
                <p className='text-[15] leading-[26.3px] text-textGray'>Copyrights © 2023 All Rights Reserved by Paysano </p>
            </div>
        </section>
    )
}

export default Footer;
