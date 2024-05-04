import React from 'react'
import { FaArrowLeft, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import SwiperClients from './SwiperClients';
import Services from './Services';
import Steps from './Steps';
import Marks from './Marks';
import MessageLeadForm from './MessageLeadForm';
import { IoIosCall, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';
import TiktokGrid from './TiktokGrid';

const HomePage = () => {
    return (
        <div>

            <section className='heroBg py-20 md:h-screen  justify-center items-center flex'>
                <div className='px-4'>


                    <div dir='rtl' className='flex items-center justify-center text-center  '>
                        <div>
                            <div className='flex-col  flex'>
                                <h1
                                    data-aos="fade-down"
                                    data-aos-easing="ease-in-out"
                                    className='text-2xl md:text-4xl font-bold text-main max-w-[1000px]'>
                                    מחפשים את העורך שיתן לכם שקט נפשי ויגרום לפרויקט להראות פשוט וואו?
                                </h1>
                                <h1
                                    data-aos="fade-in"
                                    data-aos-easing="ease-in-out"
                                    data-aos-delay="1000"
                                    className='text-xl md:text-3xl my-2 font-bold text-secondary'>
                                    הגעתם למקום הנכון!
                                </h1>
                            </div>

                            <div className='my-4'>
                                <h1 data-aos="fade-down"
                                    data-aos-delay="1000"
                                    data-aos-easing="ease-in-out" className='text-5xl md:text-7xl font-bold text-main'>
                                    סתיו סמדר
                                </h1>
                                <h1 data-aos="fade-down"
                                    data-aos-delay="1000"
                                    data-aos-easing="ease-in-out" className='text-2xl md:text-4xl mt-2 font-bold text-secondary'>
                                    עורך וידאו עם למעלה מ 7 שנות נסיון
                                </h1>
                            </div>
                        </div>

                    </div>
                    <div className='max-w-[300px] mx-auto'>
                        <a href='#form' className='flex shadow-2xl justify-center cursor-pointer  items-center px-4 py-2 my-4 text-xl  mx-auto rounded-full text-dark bg-gradient-to-tr from-secondary tp bg-yellow-300  font-bold hover:scale-105 duration-300'>
                            <FaArrowLeft className='mr-2' />
                            <h1>
                                דברו איתי
                            </h1>
                        </a>

                        <a className='flex hadow-2xl justify-center cursor-pointer  items-center px-4 py-2 my-4 text-xl  mx-auto rounded-full text-dark bg-gradient-to-tr from-green-400 to-green-600  font-bold hover:scale-105 duration-300'>
                            <FaWhatsapp size={30} className='mr-2' />
                            <h1>
                                לשיחת ווצאפ
                            </h1>
                        </a>
                    </div>
                </div>
            </section>

            <section className='py-20 bg-gradient-to-tr from-secondary to-yellow-300 '>
                <div className='px-4'>
                    <h1
                        data-aos="fade-down"
                        data-aos-easing="ease-in-out" className='text-center text-2xl md:text-4xl mb-8 font-extrabold'>
                        לקוחות ממליצים
                    </h1>
                </div>

                <SwiperClients />

            </section>

            <section className='specialBg py-20 '>
                <div className='px-4'>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main'>
                        החוזקות שלי
                    </h1>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-secondary'>
                        כעורך וידאו
                    </h1>
                    <Services />

                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main mt-16'>
                        קצת עליי
                    </h1>
                    <p className="text-lg md:text-2xl font-medium mt-4 text-main text-center "> אני סתיו סמדר, עורך וידאו כ 7 שנים</p>

                </div>
            </section>


            <section className='specialBg py-20 '>
                <div className='px-4'>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main mt-16'>
                        תהליך העבודה
                    </h1>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-secondary'>
                        שלנו יחד
                    </h1>
                    <div dir='rtl' className="container mx-auto">
                        <Steps />
                    </div>

                </div>
            </section>


            <section className='specialBg py-20 '>
                <div className='px-4'>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main mt-16'>
                        תיק עבודות
                    </h1>

                    <TiktokGrid />
                </div>
            </section>

            <section className='specialBg py-20 '>
                <div className='px-4'>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main mt-16'>
                        על מה אני
                    </h1>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-secondary'>
                        שם דגש?
                    </h1>
                    <div dir='rtl' className="container mx-auto">
                        <Marks />
                    </div>

                </div>
            </section>


            <section id='form' className='specialBg py-20 '>
                <div className='px-4'>
                    <MessageLeadForm />

                </div>

                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="tel:+972546966909" className="bg-dark text-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-xl  duration-300">
                            <IoIosCall size={30} />
                        </a>
                        <a href="https://wa.me/972546966909" className="bg-dark text-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-xl  duration-300" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={30} />
                        </a>
                        <a href="https://www.tiktok.com/@stavsmadar" className="bg-dark text-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-xl  duration-300">
                            <IoLogoTiktok size={30} />
                        </a>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a href="https://www.instagram.com/moove_media.co.il" className="bg-dark text-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-xl  duration-300">
                            <IoLogoInstagram size={30} />
                        </a>
                        <a href="https://www.facebook.com/StavSmadarVM" className="bg-dark text-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-xl  duration-300">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.youtube.com/@stavsmadar6311" className="bg-dark text-secondary h-12 w-12 rounded-full flex items-center justify-center shadow-xl  duration-300">
                            <IoLogoYoutube size={30} />
                        </a>
                    </div>

                </div>
            </section>
            <div className='mx-auto text-center py-6 bg-white'>
                <a href="https://wa.me/972538250965?text=היי%20אשמח%20לפרטים%20בנוגע%20לבניית%20אתר" dir='rtl' className="mt-8 text-base leading-6 text-center text-mainColor">
                    אתר זה נבנה על ידי Idan Shlomo | בניית אתרים בקוד
                </a>
            </div>
        </div>
    )
}

export default HomePage
