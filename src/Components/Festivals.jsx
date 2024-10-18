import React from 'react';

function Festivals() {
  const data = [
    {
      name: "Sarhul",
      image: "https://th.bing.com/th?id=OIP.Ovt6L-pEa8sP2lBwB0EYgwHaFv&w=283&h=220&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Sarhul is a major festival of the tribal communities of Jharkhand, celebrating the worship of nature, especially trees and the new year according to the tribal calendar.",
      knowMore: "https://en.wikipedia.org/wiki/Sarhul"
    },
    {
      name: "Karma Puja",
      image: "https://th.bing.com/th?id=OIP.ZkBZvLJoPJSflpCGDO-ZcAHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Karma Puja is celebrated to honor the Karam tree, believed to bring prosperity. It is marked by singing and dancing by the tribal people.",
      knowMore: "https://en.wikipedia.org/wiki/Karma_festival"
    },
    {
      name: "Tusu Parab",
      image: "https://th.bing.com/th?id=OIP.pRH7etcEux2CKfbCpgHtSgHaER&w=329&h=189&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Tusu Parab is a harvest festival celebrated by the tribal communities, involving singing folk songs and decorating huts with artistic creations.",
      knowMore: "https://en.wikipedia.org/wiki/Tusu_Festival"
    },
    {
      name: "Makar Sankranti",
      image: "https://th.bing.com/th?id=OSK.HEROhm6I6fPHyXZt2tXEqetFtneBv_qP0ZIVW67PkOwmJv4&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
      Description: "Makar Sankranti is celebrated to mark the transition of the sun into Capricorn. It is a significant festival involving feasts and rituals in Jharkhand.",
      knowMore: "https://en.wikipedia.org/wiki/Makar_Sankranti"
    },
    {
      name: "Jitia Puja",
      image: "https://th.bing.com/th?id=OIP.foVt-LE6Spw9x9uuWq53XgHaEH&w=335&h=186&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Jitia Puja is a fasting festival for the well-being and long life of children, mainly observed by women in Jharkhand and neighboring states.",
      knowMore: "https://en.wikipedia.org/wiki/Jitiya"
    },
    {
      name: "Bandna",
      image: "https://th.bing.com/th?id=OIP.ttaEBDP_5zILJXce7n5g6AHaEX&w=325&h=191&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Bandna is a cattle festival celebrated by the Santhal community to show respect and gratitude to cattle for their service in agriculture.",
      knowMore: "https://en.wikipedia.org/wiki/Bandna"
    },
    {
      name: "Chhath Puja",
      image: "https://th.bing.com/th?id=OIP.UA7FfN1mG7Hb0wDUcsCYjgHaFY&w=293&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Chhath Puja is dedicated to the Sun God and is observed with fasting and offerings made to the setting and rising sun on the riverbanks.",
      knowMore: "https://en.wikipedia.org/wiki/Chhath"
    },
    {
      name: "Phagua",
      image: "https://th.bing.com/th?id=OIP.8N5apEvNknmSQK2Sd6PvKgHaFe&w=290&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Phagua is a festival similar to Holi, celebrated with vibrant colors and singing, symbolizing joy and the arrival of spring in tribal communities.",
      knowMore: "https://en.wikipedia.org/wiki/Holi"
    },
    {
      name: "Sohrai",
      image: "https://th.bing.com/th?id=OIP.L_ZxS967aOr_alaomk9UkgHaFc&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Sohrai is a harvest festival celebrated by the tribal communities of Jharkhand, where they decorate houses with traditional Sohrai paintings.",
      knowMore: "https://en.wikipedia.org/wiki/Sohrai_festival"
    },
    {
      name: "Durga Puja",
      image: "https://th.bing.com/th?id=OIP.ePIw8NBj6pn-VAQ7Fzf_ZQHaFU&w=294&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Durga Puja is one of the most popular festivals in Jharkhand, celebrated with grandeur and devotion, particularly in urban areas like Ranchi and Jamshedpur.",
      knowMore: "https://en.wikipedia.org/wiki/Durga_Puja"
    },
    {
      name: "Gudi Padwa",
      image: "https://th.bing.com/th?id=OSK.HEROGsk9AbxB3kPZBQ6-QMvruaidzzyY7foMOWfYKawRZOg&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM",
      Description: "Gudi Padwa marks the beginning of the New Year for several communities in India, celebrated with festive foods and traditional decorations.",
      knowMore: "https://en.wikipedia.org/wiki/Gudi_Padwa"
    },
    {
      name: "Baha Parab",
      image: "https://th.bing.com/th?id=OIP.0vrWIIf89aahe8uMcHNJGAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Baha Parab is celebrated by the Santhal tribe to honor nature and the harvest, involving traditional rituals and communal feasting.",
      knowMore: "https://en.wikipedia.org/wiki/Baha_festival"
    },
    {
      name: "Holi",
      image: "https://th.bing.com/th?id=OIP.ISo5MZT2JIfZx9nqgul5SQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Holi is the festival of colors, celebrated with enthusiasm, joy, and the throwing of colored powders, symbolizing the arrival of spring.",
      knowMore: "https://en.wikipedia.org/wiki/Holi"
    },
    {
      name: "Diwali",
      image: "https://th.bing.com/th?id=OSK.HERORJ4ZFaoXIZMmzeE4UCd2ICwGqeiCThFkx7dreixiiKY&w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM",
      Description: "Diwali, the festival of lights, is celebrated with the lighting of lamps, fireworks, and family gatherings, symbolizing the victory of light over darkness.",
      knowMore: "https://en.wikipedia.org/wiki/Diwali"
    },
    {
      name: "Raksha Bandhan",
      image: "https://th.bing.com/th?id=OSK.HEROlAO0w1S6_WwB6MVGEHyd2BnQy9EGHSN94JUsH3LF6rQ&w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM",
      Description: "Raksha Bandhan is a festival celebrating the bond between brothers and sisters, marked by the tying of a protective thread.",
      knowMore: "https://en.wikipedia.org/wiki/Raksha_Bandhan"
    },
    {
      name: "Eid",
      image: "https://th.bing.com/th?id=OIP.27zpvwBOW7krCDFMprrS_gAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Eid is an important festival for the Muslim community, celebrated with prayers, feasting, and communal harmony.",
      knowMore: "https://en.wikipedia.org/wiki/Eid_al-Fitr"
    },
    {
      name: "Christmas",
      image: "https://th.bing.com/th?id=OIP.FldgCYEIGwKmGYQfcz-wbQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Christmas is celebrated by the Christian community, commemorating the birth of Jesus Christ with festive decorations and family gatherings.",
      knowMore: "https://en.wikipedia.org/wiki/Christmas"
    },
    {
      name: "Bhai Dooj",
      image: "https://th.bing.com/th?id=OIP.UAKWDXQy_OQgNHIwoqjzgQHaHW&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Bhai Dooj is a festival celebrating the bond between brothers and sisters, observed with prayers and feasting.",
      knowMore: "https://en.wikipedia.org/wiki/Bhai_Dooj"
    },
    {
      name: "New Year",
      image: "https://th.bing.com/th?id=OSK.HEROHShxJLOL47pQwdVyabO0ibT4cjc_Rwcpvr8XsUfeWmM&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
      Description: "The New Year is celebrated with joy and festivities, marking the beginning of a new calendar year with various cultural traditions.",
      knowMore: "https://en.wikipedia.org/wiki/New_Year"
    }
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h1 className="mb-10 text-4xl font-bold text-center text-green-700">Festivals of Jharkhand</h1>
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {data.map((festival, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
          >
            <img src={festival.image} alt={festival.name} className="object-cover w-full h-64" />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-green-700">{festival.name}</h2>
              <p className="mb-4 text-gray-700">{festival.Description}</p>
              <a
                href={festival.knowMore}
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

export default Festivals;
