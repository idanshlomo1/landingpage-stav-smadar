import React, { useState } from 'react'
import { FaArrowLeft, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import SwiperClients from './SwiperClients';
import Services from './Services';
import Steps from './Steps';
import Marks from './Marks';
import MessageLeadForm from './MessageLeadForm';
import { IoIosCall, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';
import { IoArrowDown, IoLogoTiktok } from 'react-icons/io5';
import TiktokGrid from './TiktokGrid';
import logo from "../images/moovemedia_logo.png"
import Stav from "../images/stav.png"
import Arrows from "../images/arrows.png"
import LeadForm from './LeadForm';


const HomePage = () => {

    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

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
                                    className='text-2xl md:text-4xl shadow-2xl shadow-secondary font-bold text-main max-w-[1000px]  bg-gradient-to-tr from-black to-transparent p-4 rounded-3xl'>
                                    יש לנו

                                    <span className='text-secondary'> שיטה מנצחת</span>
                                    <br />
                                    שגורמת ללקוחות
                                    <span className='text-secondary'> לשלם!</span>
                                </h1>
                                <img data-aos="fade-down"
                                    data-aos-easing="ease-in-out" src={logo} className='w-[200px] mx-auto' alt="logo" />
                                <div
                                    onClick={openDialog}
                                    className='text-float'>
                                    <a className=' flex flex-col hover:text-secondary shadow-2xl justify-center cursor-pointer  items-center px-2 py-2 my-8 text-xl  mx-auto rounded-full border-secondary border-2 text-main bg-gradient-to-tr from-black to-transparent  font-bold hover:scale-105 duration-300'>
                                        <h1 className='px-4'>
                                            גם אני רוצה שיחות מכירה <br /> כיפיות

                                            לעסק שלי
                                        </h1>
                                        <FaArrowLeft className='mr-2 text-secondary' />

                                    </a>
                                </div>

                                {/* <h1
                                    data-aos="fade-in"
                                    data-aos-easing="ease-in-out"
                                    data-aos-delay="1000"
                                    className='text-xl md:text-3xl my-2 font-bold text-secondary'>
                                    הגעתם למקום הנכון!
                                </h1> */}
                            </div>

                            {/* <div className='my-4'>
                                <h1 data-aos="fade-down"
                                    data-aos-delay="500"
                                    data-aos-easing="ease-in-out" className='text-5xl md:text-7xl font-bold text-main'>
                                    סתיו סמדר
                                </h1>
                                <h1 data-aos="fade-down"
                                    data-aos-delay="1000"
                                    data-aos-easing="ease-in-out" className='text-2xl md:text-4xl mt-2 font-bold text-secondary'>
                                    עורך וידאו עם למעלה מ 7 שנות נסיון
                                </h1>
                            </div> */}
                        </div>

                    </div>
                    <div className='max-w-[300px] mx-auto'>
                        {/* <a href='#form' className='flex shadow-2xl justify-center cursor-pointer  items-center px-4 py-2 my-4 text-xl  mx-auto rounded-full text-dark bg-gradient-to-tr from-secondary tp bg-yellow-300  font-bold hover:scale-105 duration-300'>
                            <FaArrowLeft className='mr-2' />
                            <h1>
                                דברו איתנו
                            </h1>
                        </a> */}

                        <a href="https://wa.me/972546966909"
                            className="flex  justify-center cursor-pointer items-center shadow-2xl border-green-300 border-2 shadow-green-300 px-4 py-2 my-4 text-xl mx-auto rounded-full text-main bg-gradient-to-tr from-green-600 to-transparent font-bold hover:scale-105 duration-300">
                            <FaWhatsapp size={30} className="mr-2 text-green-200" />
                            <h1 dir='rtl'>
                                לשיחת Whatsapp                            </h1>
                        </a>

                    </div>
                </div>
            </section>


            <section className='specialBg  py-20 '>
                <div className='px-4'>
                    {/* <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main'>
                        החוזקות שלי
                    </h1>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-secondary'>
                        כעורך וידאו
                    </h1> */}
                    {/* <Services /> */}

                    {/* <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-secondary '>
                        קצת עליי
                    </h1> */}
                    <p dir='rtl' className="text-lg md:text-2xl font-medium mt-4 text-main text-center  max-w-3xl mx-auto">
                        שמי סתיו סמדר והקמתי את Moove media למענך!
                        <br />
                        לעזור לך להגדיל את הרווחים בעסק בקלות ומהירות.
                        <br />
                        <div className='mt-2'>
                        </div>
                        השקעתי שנים רבות בהבנה שיווקית ופסיכולוגיה צרכנית.
                        <br />
                        השיטה שלי היא לא שיטה חדשה,ולא אני המצאתי אותה.
                        אבל זאת שיטה מנצחת שעובדת ותעבוד כנראה תמיד.
                        <div className='mt-2'>
                        </div>
                        <span className='font-extrabold text-secondary'>
                            אני יכול להבטיח לך שבפגישה אחת של 20 דקות אדע אם אני יכול
                            לעזור לך להביא לקוחות איכותיים משלמים שכיף לעבוד איתם.
                        </span>

                    </p>

                </div>
            </section>

            <section className='specialBg heroBg py-20 pt-0 '>
                <div className='px-4'>

                    <img data-aos="fade-down"
                        data-aos-easing="ease-in-out" src={Stav} className='w-[350px] mx-auto ' alt="stav" />

                    <div
                        onClick={openDialog}

                        className='max-w-[300px] mx-auto mt-[-55px]'>
                        <div className='text-float'>
                            <a dir='rtl' className=' text-main border-2 border-secondary shadow-secondary hover:text-secondary hover:scale-105  flex flex-col shadow-2xl justify-center cursor-pointer  text-center items-center p-6 my-4 text-xl  mx-auto rounded-3xl  bg-gradient-to-tr from-black to bg-[#333]   font-bold duration-300'>
                                <h1 className=' '>
                                    אני רוצה לשווק את העסק שלי בשיטה שתגרום ללקוחות לשלם לי בבטחון
                                </h1>
                                <FaArrowLeft className='mr-2 text-secondary' />

                            </a>
                        </div>

                    </div>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl mt-8 font-extrabold text-secondary '>
                        מה בפועל קורה בשיטה של <br /> Moove-media
                    </h1>

                    <IoArrowDown size={65} className='mx-auto mt-4 text-secondary text-zoom' />


                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main mt-8'>
                        אנחנו שמים דגש
                    </h1>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-secondary'>
                        על 2 היבטים עיקריים                       </h1>
                    <div dir='rtl' className="container mx-auto">
                        <Marks />
                    </div>

                    {/* <img src={Arrows} className='w-[200px] mx-auto my-8 text-zoom' alt="" /> */}

                    <div className='border-2 border-[#403c3c] rounded-3xl mt-12 p-4 py-8 max-w-3xl mx-auto'>


                        <h1 data-aos="fade-down"
                            data-aos-easing="ease-in-out" dir='rtl' className='text-center text-lg md:text-2xl font-medium text-main  max-w-4xl mx-auto'>
                            בתור בעל עסק הזמן שלך והכסף שלך מאוד יקרים.
                            <br />
                            אנחנו לא רוצים לבזבז זמן יקר ומשאבים יקרים על דברים שהם לא חשובים עבור העסק שלך.                      </h1>

                        <h1 data-aos="fade-down"
                            data-aos-easing="ease-in-out" dir='rtl' className='text-center text-lg md:text-2xl font-bold text-secondary mt-8 max-w-4xl mx-auto'>
                            אנחנו נייצר לך אמינות ברשתות הדיגיטליות
                            <br />
                            ונייצר לך משפך לקוחות איכותי
                        </h1>


                        <h1 data-aos="fade-down"
                            data-aos-easing="ease-in-out" dir='rtl' className='text-center text-lg md:text-2xl font-medium text-main mt-8 max-w-4xl mx-auto'>
                            אני מבטיח לך שאם תמצא מתאים לתהליך התוצאות יהיו מטורפות
                            והתהליך יהיה מהנה עבורך!
                            <br />

                            ואני מבטיח לך שבסיום התהליך אתה תרדם בלילה עם חיוך ואושר בלב שאשכרה
                            הצלחת להגשים את החלום שלך
                            <br />

                            <span className='font-extrabold text-secondary'>
                                ולהצליח בעסק שתמיד רצית.
                            </span>

                        </h1>
                    </div>
                </div>
            </section>


            {/* <section className='specialBg py-20 '>
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
            </section> */}
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





            {/* 
            <section className='specialBg py-20 '>
                <div className='px-4'>
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" dir='rtl' className='text-center text-2xl md:text-4xl font-extrabold text-main mt-16'>
                        תיק עבודות
                    </h1>

                    <TiktokGrid />
                </div>
            </section> */}

            {/* <section className='specialBg py-20 '>
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
            </section> */}


            <section id='form' className='specialBg py-20 heroBg '>
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

            <LeadForm isOpen={isDialogOpen} onRequestClose={closeDialog} />

        </div>


    )
}

export default HomePage
