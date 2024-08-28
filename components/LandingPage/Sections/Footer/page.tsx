import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo-main.svg'
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const {t} = useLanguage();

    return (
        <section className='footer mt-12 md:ml-3'>

            <div className='flex flex-col lg:flex-row'> 
                <div className='first-half lg:w-1/2 lg:pr-10 flex flex-col items-center justify-center'> 
                    <div className="logo mb-6 ">
                        <Image src={logo} alt='logo' width={64} height={53} />
                    </div>

                    <div className='text text-textGray text-center sm:text-start max-w-sm lg:max-w-md '>
                        <p className="mx-auto lg:mx-0">{t('FOOTER_DESCRIPTION')}</p>
                    </div>
                </div>
                <div className="sections mt-12 lg:w-1/2 lg:pl-10 flex flex-col lg:flex-row items-center text-center lg:items-start lg:text-start "> 
                    <div className="support flex-1 m-6">
                        <h1 className="text-2xl font-semibold mb-6">{t('SUPPORT')}</h1>
                        <ul className="space-y-3 text-textGray ">
                            <li className='hover:text-green'>{t('LIST_HOME')}</li>
                            <li className='hover:text-green'>{t('LIST_ABOUT')}</li>
                            <li className='hover:text-green'>{t('LIST_FAQS')}</li>
                            <li className='hover:text-green'>{t('LIST_SUPPORT')}</li>
                        </ul>
                    </div>

                    <div className="trending flex-1 m-6">
                        <h1 className="text-2xl font-semibold mb-6">{t('TRENDING')}</h1>
                        <ul className="space-y-3 text-textGray">
                            <li className='hover:text-green'>{t('LIST_SHOP')}</li>
                            <li className='hover:text-green'>{t('LIST_PORTFOLIO')}</li>
                            <li className='hover:text-green'>{t('LIST_BLOGS')}</li>
                        </ul>
                    </div>

                    <div className="features w-full md:flex-none  m-6">
                        <h1 className="text-2xl font-semibold mb-6">{t('FEATURES')}</h1>
                        <ul className="space-y-3 text-textGray">
                            <li className='hover:text-green'>{t('LIST_HELPCENTER')}</li>
                            <li className='hover:text-green'>{t('LIST_PAID')}</li>
                            <li className='hover:text-green'>{t('LIST_STATUS')}</li>
                            <li className='hover:text-green'>{t('LIST_CONTACT_SUPPORT')}</li>
                        </ul>
                    </div>
                </div>



            </div>
            <div className="copyright text-center border-t-2 p-5">
                <p className='text-[15] leading-[26.3px] text-textGray'>Copyrights © 2023 All Rights Reserved by Paysano </p>
            </div>
        </section>
    )
}

export default Footer;
