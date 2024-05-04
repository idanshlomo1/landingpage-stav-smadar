import React from 'react'

const Steps = () => {

    const stepsData = [

        {
            name: "01",
            description: "שאלון אפיון",

        },

        {
            name: "02",
            description: "שיחת קריאייטיב",

        },

        {
            name: "03",
            description: "צילומים",

        },

        {
            name: "04",
            description: "עריכות",

        },

        {
            name: "05",
            description: "עולים לאוויר",

        },








    ];
    return (
        <div>
            <div className="grid gap-6 my-16 lg:grid-cols-2 mx-auto max-w-[1000px] ">

                {stepsData.map((step, index) => (
                    <div   data-aos="fade-down"
                    data-aos-easing="ease-in-out" key={index}>
                        <div className="flex flex-col p-8 space-y-4  dark:bg-gray-50 border-t-4 border-[#403c3c]">
                            <div className="text-5xl font-extrabold  text-secondary ">{step.name}</div>
                            <h1 className='text-3xl font-extrabold text-main' >
                                {step.description}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Steps
