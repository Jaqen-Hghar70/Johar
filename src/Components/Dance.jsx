import React from 'react';

function Dance() {
  const data = [
    {
      name: "Chhau Dance",
      image: "https://th.bing.com/th?id=OIP.ZejKWpikNi3uhcBjh6olGgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional martial dance form that combines elements of folk, tribal, and martial arts. Popular in the Saraikela region of Jharkhand.",
      knowMore: "https://en.wikipedia.org/wiki/Chhau_dance"
    },
    {
      name: "Paika Dance",
      image: "https://th.bing.com/th?id=OIP.DJ0KJvbxzscQRkAznnQBRAHaGc&w=267&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A war dance performed by the Paika community, showcasing the valor and bravery of the tribe with swords and shields.",
      knowMore: "https://en.wikipedia.org/wiki/Paika"
    },
    {
      name: "Jhumar Dance",
      image: "https://th.bing.com/th?id=OIP.xFn45eE-s9Tbf6dfsyeu3QHaE-&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional folk dance performed during harvest season, typically accompanied by folk songs and music.",
      knowMore: "https://en.wikipedia.org/wiki/Jhumar"
    },
    {
      name: "Fagua Dance",
      image: "https://th.bing.com/th?id=OIP.x2ftqlTwUd7F-0R-lph1NQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Performed during the festival of Holi, Fagua dance is filled with vibrant colors and joyful movements.",
      knowMore: "https://en.wikipedia.org/wiki/Holi"
    },
    {
      name: "Karma Dance",
      image: "https://th.bing.com/th?id=OIP.zHdMzh6tAcpOPSEWxPt6IAAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A dance form celebrating nature, performed during the Karma festival. It symbolizes joy and the bond between humans and nature.",
      knowMore: "https://en.wikipedia.org/wiki/Karma_festival"
    },
    {
      name: "Mundari Dance",
      image: "https://th.bing.com/th?id=OIP.mwgYFK9SNaOGcC-AwHVPVAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional dance of the Munda tribe, performed during festive occasions, often accompanied by drums and folk instruments.",
      knowMore: "https://en.wikipedia.org/wiki/Munda_people"
    },
    {
      name: "Domkach Dance",
      image: "https://th.bing.com/th?id=OIP.Ni_opPcrnL9GT15qFYvgNAHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A wedding dance performed by both men and women of the Nagpuri community, celebrated with clapping and lively songs.",
      knowMore: "https://en.wikipedia.org/wiki/Nagpuri_dance"
    },
    {
      name: "Barao Dance",
      image: "https://th.bing.com/th?id=OIP.UlBBfhLXnIrXIMdB3g5VSwHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A tribal dance performed to worship the Barao god, typically performed by the Oraon tribe in Jharkhand.",
      knowMore: "https://en.wikipedia.org/wiki/Oraon_people"
    },
    {
      name: "Horok Dance",
      image: "https://th.bing.com/th?id=OIP.VjsMMrieLbmuiwESWgY26QHaFI&w=300&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Performed by the Santhal tribe, this dance is part of their traditional festivities and showcases their rich cultural heritage.",
      knowMore: "https://en.wikipedia.org/wiki/Santhal_people"
    },
    {
      name: "Mardani Jhumar",
      image: "https://th.bing.com/th?id=OIP.XXXDm7Oh4aTxlncTgGf_pgHaEl&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A variant of Jhumar, the Mardani Jhumar is performed by men and is popular in regions of Jharkhand, reflecting the energy and spirit of the people.",
      knowMore: "https://en.wikipedia.org/wiki/Jhumar"
    },
    {
      name: "Phagua Dance",
      image: "https://th.bing.com/th?id=OIP.sLPTd-5abvFtYWkNlOAPsgHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A dance form performed during Holi festivities, celebrating the victory of good over evil with vibrant energy.",
      knowMore: "https://en.wikipedia.org/wiki/Holi"
    },
    {
      name: "Sarhul Dance",
      image: "https://th.bing.com/th?id=OIP.yvxMknkInOjTca9qegvhyAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Performed during the Sarhul festival by the Oraon and Munda tribes, it signifies the worship of nature and the advent of spring.",
      knowMore: "https://en.wikipedia.org/wiki/Sarhul"
    },
    {
      name: "Janani Jhumar",
      image: "https://th.bing.com/th?id=OIP.d1h0M4hfhVJb3pq66p2GlgHaHT&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A variant of the Jhumar dance, performed by women to mark special occasions like weddings and community gatherings.",
      knowMore: "https://en.wikipedia.org/wiki/Jhumar"
    },
    {
      name: "Tappa Dance",
      image: "https://th.bing.com/th?id=OIP.Ni_opPcrnL9GT15qFYvgNAHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A vibrant folk dance that is performed during joyous occasions and festivals, involving rhythmic clapping and stomping.",
      knowMore: "https://en.wikipedia.org/wiki/Tappa_dance"
    },
    {
      name: "Manbhum Chhau",
      image: "https://th.bing.com/th?id=OIP.B3WKWJkWBKzK62kLSiPMYAHaFc&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A regional variation of the Chhau dance, known for its elaborate costumes and dramatic choreography.",
      knowMore: "https://en.wikipedia.org/wiki/Chhau_dance"
    },
    {
      name: "Santhal Dance",
      image: "https://th.bing.com/th?id=OIP.OuAxaQEGyAMg2_aSJKH2KwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional dance of the Santhal tribe, reflecting their agricultural lifestyle and performed during harvest festivals.",
      knowMore: "https://en.wikipedia.org/wiki/Santhal_people"
    },
    {
      name: "Chaitra Parva Dance",
      image: "https://th.bing.com/th?id=OIP.qao3RFVN2A91t2j0LZSLRgHaDX&w=349&h=158&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Performed during the Chaitra Parva festival, this dance celebrates the new harvest season with vibrant music and movement.",
      knowMore: "https://en.wikipedia.org/wiki/Chaitra"
    },
    {
      name: "Natua Dance",
      image: "https://th.bing.com/th?id=OIP.nTSmE0loF-bw4tZhJuBpNAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A popular folk dance in rural areas, performed during festivals and cultural gatherings with lively movements.",
      knowMore: "https://en.wikipedia.org/wiki/Natua"
    },
    {
      name: "Baha Dance",
      image: "https://th.bing.com/th?id=OIP.UxyVk-PmSSeTKStdhZQegQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Performed during the Baha festival by the Santhal tribe, this dance is part of their ritualistic offerings to nature.",
      knowMore: "https://en.wikipedia.org/wiki/Baha_festival"
    }
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h1 className="mb-10 text-4xl font-bold text-center text-green-700">Traditional Dances of Jharkhand</h1>
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {data.map((dance, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
          >
            <img src={dance.image} alt={dance.name} className="object-cover w-full h-64" />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-green-700">{dance.name}</h2>
              <p className="mb-4 text-gray-700">{dance.Description}</p>
              <a
                href={dance.knowMore}
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

export default Dance;
