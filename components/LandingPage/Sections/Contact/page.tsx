import React from 'react';
import Image from 'next/image';
import RoundedButton from '@/common_views/RoundedButton';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {

  const {t} = useLanguage();

  return (
    <section className='footer flex flex-col items-center justify-center'>
      <div className='mail mt-16 md:ml-8'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'> 
         
          <div className=' items-center justify-center md:w-1/2 md:pr-10 '> 
            <div className='mailImage flex items-start justify-center lg:justify-start mb-5'> 
              <Image src="./contactSection/mail.svg" alt='mailimage' width={40} height={40} />
            </div>
            <div className="text ">
              <h1 className='text-2xl font-bold text-center md:text-left mb-6'>{t('CONTACT')}</h1>
              <div className='description text-textGray text-center md:text-left'>
                <p>{t('CONTACT_DESCRIPTION')}</p>
              </div>

              <div className='input mt-6 text-center md:text-left'>
                <input className='border border-none bg-[#FAFAFA] p-2 mb-12 outline-none w-[67%] ' type="text" placeholder= {t('PLACEHOLDER')} />
                <span className='email-btn bg-green h-[37px] w-[105px] px-5 py-5 transition-transform duration-300 hover:text-black  hover:cursor-pointer inline-flex items-center justify-center '>
                  <RoundedButton
                    type='button'
                    title={t('SUBSCRIBE')}
                    variant='text-white'
                  />
                </span>

              </div>
            </div>
          </div>

         {/* Contact Image */}
          <div className='flex items-center justify-center md:w-1/2 md:pl-10'> 
            <div className='contactImage flex-col transform transition-transform duration-300 ease-in-out hover:rotate-15'>
              <Image src="./contactSection/contact.svg" alt='contactImage' width={300} height={316} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
