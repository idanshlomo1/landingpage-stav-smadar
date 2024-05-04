import React from 'react'



const Services = () => {


    const servicesData = [
        {
            name: "סרטוני תוכן לסושיאל",
            description: "יש לכם תוכן איכותי שכולם חייבים לראות? אנחנו נדע להוציא את זה החוצה בסטנדרט גבוה ואיכותי. נדאג לכם לתוצרים שמושכים את העין ומעבירים את הכישרון שלכם החוצה באיכות שלא הכרתם עד שתהפכו לטאלנטים בתחומכם.",
            imageUrl: "path/to/image2.jpg"
        },

        {
            name: "הפקות ובימוי",
            description: " רעיון טוב צריך צוות טוב יותר. עם הניסיון והידע שלנו נתאים לכם הפקה שתדע לענות על כל הצרכים שלכם ולספר בצורה מקורית ויצירתית את הסיפור שלכם, תוך הקפדה על מקצועיות וירידה לפרטים הקטנים. לכם נותר רק להביא את עצמכם בידיעה שאתם בידיים טובות. ",
            imageUrl: "path/to/image2.jpg"
        },

        {
            name: "סטנד אפ / בידור",
            description: "אירועי סטנד-אפ ובידור דורשים ליווי צמוד מול האומן על מנת ליצור עמדות קריאייטיביות. אנחנו מחזקים את ההומור ואת האווירה והופכים את הסרטונים שלכם לקורעים ברשת והכי חשוב - וויראלים.",
            imageUrl: "path/to/image2.jpg"
        },

        {
            name: "כנסים ואירועי חברה",
            description: "הפקת כנסים ואירועי חברה דורשים את הדיוק בפרטים הקטנים כדי להוציא חוויה בלתי נשכחת. יחד איתנו תקבלו מעטפת מלאה עם ציוד מובחר, סאונד, לוקיישנים מובחרים, עריכה איכותית ותוצרים שיעבירו את החוויה, האווירה והמסר שבשבילו האירוע נוצר.",
            imageUrl: "path/to/image2.jpg"
        },

        {
            name: "סרטוני אווירה",
            description: "לכל מותג או רעיון יש סיפור מיוחד לספר. הצוות שלנו ידאג לספר את הסיפור שלכם בצורה ייחודית, קריאייטיבית ואותנטית, שתחבר את הצופים למותג, תמחיש את העסק שלכם ותעביר את הערכים שלכם בצורה מקורית ומעוררת השראה.",
            imageUrl: "path/to/image2.jpg"
        },




    ];
    return (
        <div>
            <div  className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 max-w-[1200px] mx-auto'>
                {servicesData.map((service, index) => (
                    <div   data-aos="fade-down"
                    data-aos-easing="ease-in-out" key={index}>
                        <div className="p-6 mt-4   rounded-3xl border-main mx-auto text-main  max-w-[600px]  justify-center">
                            <div dir='rtl' className="text-center">
                                <img src={service.imageUrl} alt="" />
                                <h3 className="text-xl md:text-3xl font-extrabold">{service.name}</h3>
                                <p className="text-base md:text-xl font-medium mt-4">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
