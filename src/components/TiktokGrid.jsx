import React from 'react';
import { IoLogoYoutube } from 'react-icons/io5';

const TiktokGrid = () => {

    const handleClick = () => {
        window.location.href = 'https://www.youtube.com/@stavsmadar6311';
    };
    const videos = [
        {
            url: "https://youtu.be/LVEZjOgADcc",
            header: 'סרטון תדמית - רמב"ם בית חינוך ממ"ד אליכין'
        },
        {
            url: "https://youtu.be/vPDZNSSFYuI?si=J-yIdRsEJLolgJ65",
            header: 'סרטון תוכן לדיגיטל - המרכז הישראלי לפיננסים '

        },
        {
            url: "https://youtu.be/BROngCUEZU4?si=RPOOTrEoholWwIep",
            header: 'סרטון תדמית -  Microblading studio yarden rubinshtein'
        },
        {
            url: "https://youtu.be/DIguUZNA_xs?si=37ePS-umqdxSNc4E",
            header: 'סרטון תדמית -  Nutriland'
        },
        {
            url: "https://youtu.be/trTl9vJDXSE?si=SJW10ok1I_74ooAO",
            header: 'סרטון תדמית -  Dogs & joy'
        },

        {
            url: "https://youtu.be/5Wlu_LLzNAk?si=BQK2HgKBjDdZ3YjC",
            header: 'Omer tobi event production'
        },
    ];

    // Function to determine and return the appropriate embed URL
    function getEmbedUrl(url) {
        if (url.includes('youtu.be') || url.includes('youtube.com')) {
            const videoId = url.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('tiktok.com')) {
            const videoId = url.split('/').pop().split('?')[0];
            return `https://www.tiktok.com/embed/v2/${videoId}?lang=en-US`;
        }
    }

    return (
        <div className='p-4 '>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 gap-y-24 mt-12 max-w-[1200px] mx-auto">
                {videos.map(({ url, header }, index) => {
                    const embedUrl = getEmbedUrl(url);
                    return (
                        <div data-aos="fade-down" data-aos-easing="ease-in-out" key={index} className='mx-auto '>
                            <h1 dir='rtl' className=' font-bold text-sm text-center mb-4 text-secondary'>{header}</h1>
                            <iframe
                                src={embedUrl}
                                height="100%"
                                className='min-h-[500px]  border-2 shadow-2xl border-bgPath duration-300 hover:border-secondaryColor rounded-2xl w-full'
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    );
                })}
            </div>


            <button onClick={handleClick} id="bottone1" className='mt-24 mx-auto justify-center flex'>
                <strong className='flex flex-row-reverse justify-center items-center'>
                    לצפייה בעבודות נוספות
                    <IoLogoYoutube size={30} className='mr-4' />
                </strong>
            </button>
        </div>
    );
};

export default TiktokGrid;
