import React from 'react';
import Image from 'next/image';
import RoundedButton from '@/common_views/RoundedButton';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className='flex flex-col md:flex-row justify-center px-6 md:px-12 py-12 bg-white'>
      {/* Contact Form */}
      <div className='flex flex-col justify-between md:w-1/2 p-6 md:p-12 bg-white'>
        <div>
          <div className='flex items-center mb-5'>
            <Image src="/contactSection/mail.svg" alt='mail' width={40} height={40} />
          </div>
          <h1 className='text-3xl font-bold text-left md:text-left mb-6'>{t('CONTACT')}</h1>
          <div className='text-left md:text-left text-textGray mb-6'>
            <p>{t('CONTACT_DESCRIPTION')}</p>
          </div>
          <div className="flex flex-wrap mb-3 justify-evenly">
            <div className="flex flex-col md:flex-row md:justify-start md:items-center w-full md:w-1/2 mb-4 md:mb-0">
              <span className="me-2">
                <Image src="/contactSection/call.svg" alt="call icon" width={50} height={50} />
              </span>
              <span className="text-lg md:text-base text-[#A1A3A0]">+921-2345-6789</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start md:items-center w-full md:w-1/2">
              <span className="me-2">
                <Image src="/contactSection/letter.svg" alt="email icon" width={50} height={50} />
              </span>
              <span className="text-lg md:text-base text-[#A1A3A0]">info@paysano.it</span>
            </div>
          </div>
        </div>

        <form action="{{ route('contact') }}" method="POST" onSubmit={() => alert('Form submitted')}>
          <div className='relative mb-4'>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className='w-full bg-[#F4F4F4] rounded-lg p-4 pl-12 text-[#A1A3A0] placeholder-[#A1A3A0]'
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-4'>
              <Image src="/contactSection/user-icon.svg" alt='user icon' width={30} height={30} />
            </div>
          </div>
          <div className='relative mb-4'>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className='w-full bg-[#F4F4F4]  rounded-lg p-4 pl-12 text-[#A1A3A0] placeholder-[#A1A3A0]'
            />
            <div className='absolute inset-y-0 left-0 flex items-center pl-4'>
              <Image src="/contactSection/email-icon.svg" alt='email icon' width={30} height={30} />
            </div>
          </div>
          <div className='mb-4'>
            <textarea
              name="message"
              placeholder="Message"
              required
              className='w-full bg-[#F4F4F4] rounded-lg p-4 text-[#A1A3A0] placeholder-[#A1A3A0]'
              rows={5}
            />
          </div>
          <div className='mt-6 w-full'>
            <button
              type='submit'
              title='Send Message'
              className='bg-green text-gray-900 w-full py-4 rounded-xl border font-semibold tracking-wide'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Image */}
      <div className='flex items-center justify-center md:w-1/2 bg-transparent'>
        <Image
          src="/contactSection/contact.png"
          alt="contact"
          className="rounded-lg object-cover"
          width={600}
          height={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>
    </section>
  );
};

export default Contact;
