import React from 'react';

function Tourism() {
  const data = [
    {
      name: "Betla National Park",
      image: "https://th.bing.com/th?id=OIP.zhndGdK1xz_4jC2P269vaAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Betla National Park is known for its rich biodiversity and wildlife, including tigers, elephants, and a variety of birds. It is one of India's first tiger reserves.",
      knowMore: "https://en.wikipedia.org/wiki/Betla_National_Park"
    },
    {
      name: "Netarhat",
      image: "https://th.bing.com/th?id=OIP.z0-yWYRpVIhDmCjemUA6NgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Netarhat, the 'Queen of Chotanagpur', is a scenic hill station famous for its sunrise and sunset points, offering breathtaking views of the surrounding landscape.",
      knowMore: "https://en.wikipedia.org/wiki/Netarhat"
    },
    {
      name: "Dassam Falls",
      image: "https://th.bing.com/th?id=OLC.owsmacXgeOoa9g480x360&w=184&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Dassam Falls is a majestic waterfall located on the Kanchi River, known for its natural beauty and stunning surroundings, making it a popular picnic spot.",
      knowMore: "https://en.wikipedia.org/wiki/Dassam_Falls"
    },
    {
      name: "Hundru Falls",
      image: "https://th.bing.com/th?id=OSK.HEROumTibe8mfOE2vJfJZgjfaYQW1huh6IjEK0QJEYTZHi0&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM",
      Description: "Hundru Falls is one of the highest waterfalls in Jharkhand, formed by the Subarnarekha River, and is a popular destination for adventure lovers.",
      knowMore: "https://en.wikipedia.org/wiki/Hundru_Falls"
    },
    {
      name: "Jonha Falls",
      image: "https://th.bing.com/th?id=OLC.GZeUmWNqoWcp2A480x360&w=249&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Jonha Falls, also known as Gautamdhara, is another stunning waterfall in Jharkhand, surrounded by forests and ideal for hiking and nature exploration.",
      knowMore: "https://en.wikipedia.org/wiki/Jonha_Falls"
    },
    {
      name: "Jagannath Temple, Ranchi",
      image: "https://th.bing.com/th?id=OIP.Egn75-NWo6BenMdm_6kSUAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A replica of the famous Jagannath Temple in Puri, this temple in Ranchi is a popular religious and cultural spot with beautiful architecture.",
      knowMore: "https://en.wikipedia.org/wiki/Jagannath_Temple%2C_Ranchi"
    },
    {
      name: "Ranchi Lake",
      image: "https://th.bing.com/th?id=OLC.0dcz02xuXw4iIQ480x360&w=220&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Ranchi Lake, located in the heart of Ranchi city, is a man-made lake ideal for boating and relaxation, surrounded by scenic views.",
      knowMore: "https://en.wikipedia.org/wiki/Ranchi_Lake"
    },
    {
      name: "Patratu Valley",
      image: "https://th.bing.com/th?id=OIP.dcjLhsHmtMjA6KT-oxb6hQHaGC&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Patratu Valley offers picturesque views of lush greenery and winding roads, making it a popular spot for road trips and nature lovers.",
      knowMore: "https://en.wikipedia.org/wiki/Patratu"
    },
    {
      name: "Pahari Mandir",
      image: "https://th.bing.com/th?id=OIP.TT74EaVYMJduuMNBNbOp-AHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Pahari Mandir, dedicated to Lord Shiva, is located on a hilltop in Ranchi, offering panoramic views of the city and a spiritual atmosphere.",
      knowMore: "https://en.wikipedia.org/wiki/Pahari_Mandir"
    },
    {
      name: "Sun Temple, Ranchi",
      image: "https://th.bing.com/th?id=OIP.fusnKCY9-kuv94mnH5cSXgHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "The Sun Temple in Ranchi is famous for its chariot-shaped structure with 18 wheels, dedicated to the Sun God, and surrounded by scenic landscapes.",
      knowMore: "https://en.wikipedia.org/wiki/Sun_Temple,_Ranchi"
    },
    {
      name: "Hazaribagh National Park",
      image: "https://www.bing.com/th?id=OIP.7SkQtVxNri1Vhi9UdCDUuwHaEK&w=206&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Hazaribagh National Park is a wildlife sanctuary known for its rich flora and fauna, offering opportunities for wildlife enthusiasts and nature lovers.",
      knowMore: "https://en.wikipedia.org/wiki/Hazaribagh_National_Park"
    },
    {
      name: "Palamau Fort",
      image: "https://th.bing.com/th?id=OIP.QKYQLXNlwLHUAZ_64hPY1QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "The Palamau Fort, located in the Betla region, is an ancient fort with historical significance, offering insights into the architectural style of the Chero dynasty.",
      knowMore: "https://en.wikipedia.org/wiki/Palamau_Fort"
    },
    {
      name: "Baidyanath Temple",
      image: "https://th.bing.com/th?id=OIP.Xlx4IsPeR9WUtQoky6GYzgHaE3&w=308&h=202&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Baidyanath Dham, located in Deoghar, is one of the most sacred Jyotirlinga temples dedicated to Lord Shiva, attracting pilgrims from all over India.",
      knowMore: "https://en.wikipedia.org/wiki/Baidyanath_Temple"
    },
    {
      name: "Maithon Dam",
      image: "https://th.bing.com/th?id=OLC.LM7c0%2f2XacY2Tw480x360&w=237&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Maithon Dam, built on the Barakar River, is a popular tourist spot known for its scenic beauty and boating activities, offering a peaceful retreat.",
      knowMore: "https://en.wikipedia.org/wiki/Maithon_Dam"
    },
    {
      name: "Parasnath Hill",
      image: "https://th.bing.com/th?id=OLC.rXCCxiEZN6z2yg480x360&w=227&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Parasnath Hill is one of the most important Jain pilgrimage sites, with several ancient temples on the hilltop dedicated to the Jain Tirthankaras.",
      knowMore: "https://en.wikipedia.org/wiki/Parasnath"
    },
    {
      name: "Shikharji",
      image: "https://th.bing.com/th?id=OIP.xKfQr1itz9o2RujPTqrjRAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Shikharji, also known as Parshvanatha Hill, is a major Jain pilgrimage site located on Parasnath Hill, attracting devotees for spiritual journeys.",
      knowMore: "https://en.wikipedia.org/wiki/Shikharji"
    },
    {
      name: "Rajrappa Temple",
      image: "https://th.bing.com/th?id=OIP.zUoOn3ZX6-WPm1O8l2j2UQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Rajrappa Temple, dedicated to Goddess Chhinnamasta, is a revered religious site located at the confluence of the Bhairavi and Damodar rivers.",
      knowMore: "https://en.wikipedia.org/wiki/Rajrappa"
    },
    {
      name: "Hirni Falls",
      image: "https://th.bing.com/th?id=OIP.DGb92GyewlYxVcpV_-sORQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Hirni Falls is a mesmerizing waterfall situated amidst dense forests, offering a perfect escape for nature lovers and trekkers.",
      knowMore: "https://en.wikipedia.org/wiki/Hirni_Falls"
    },
    {
      name: "Panchet Dam",
      image: "https://th.bing.com/th?id=OIP.gVFNPn7kpl8U75GhCW9_SgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Panchet Dam is located on the Damodar River and is a serene spot ideal for picnics, fishing, and enjoying the scenic beauty of the surroundings.",
      knowMore: "https://en.wikipedia.org/wiki/Panchet_Dam"
    },
    {
      name: "Deori Temple",
      image: "https://th.bing.com/th?id=OIP.KCSfxWG94fAngHGxdBHc4AHaEx&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Deori Temple, dedicated to Goddess Durga, is an ancient shrine located near Ranchi, known for its peaceful ambiance and religious significance.",
      knowMore: "https://en.wikipedia.org/wiki/Deori_Temple"
    }
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h1 className="mb-10 text-4xl font-bold text-center text-green-700">Tourism Hotspots in Jharkhand</h1>
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {data.map((place, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
          >
            <img src={place.image} alt={place.name} className="object-cover w-full h-64" />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-green-700">{place.name}</h2>
              <p className="mb-4 text-gray-700">{place.Description}</p>
              <a
                href={place.knowMore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tourism;
