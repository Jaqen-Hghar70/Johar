import React from 'react';

function Tribes() {
  const data = [
    {
      name: 'Santhal',
      image: 'https://th.bing.com/th/id/OIP.tCmaIcxwetZXQkLjP3qxFwHaEK?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description:
        'The Santhal tribe is the largest tribal community in Jharkhand, primarily inhabiting the Dumka, Pakur, and Jamtara districts. Known for their vibrant culture, they are skilled in music and dance, with traditional dances like the Santhali dance being integral to their celebrations. Agriculture, hunting, and gathering are their primary occupations, and they have a strong connection to their ancestral land.',
      knowMore: 'https://en.wikipedia.org/wiki/Santhali_people',
    },
    {
      name: 'Oraon',
      image: 'https://th.bing.com/th?id=OIP.trEje0vNXHU4aTMVlxZPkAHaFc&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Oraon tribe is known for its agricultural practices and deep reverence for nature. Residing mainly in the Ranchi and Gumla districts, they celebrate festivals such as Sarhul and Tana Jatra, which reflect their cultural traditions. The tribe\'s social structure is matrilineal, and they maintain a rich oral tradition of songs and folklore.',
      knowMore: 'https://en.wikipedia.org/wiki/Oraon_people',
    },
    {
      name: 'Munda',
      image: 'http://ts4.mm.bing.net/th?id=OIP.8zOfC6hYpT4xCzsAANdQyQHaEK&pid=15.1',
      description:
        'The Munda tribe has a significant historical presence, particularly through leaders like Birsa Munda, who played a crucial role in the Indian independence movement. Found predominantly in Ranchi and Khunti, they are agriculturalists and are known for their traditional festivals, including Baha and Maghe.',
      knowMore: 'https://en.wikipedia.org/wiki/Munda_people',
    },
    {
      name: 'Ho',
      image: 'https://th.bing.com/th?id=OIP.nSoJQ73rSTzCG1ZT19lQBwHaL0&w=197&h=315&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Ho tribe, closely related to the Mundas, resides mainly in the Singhbhum district. They have a rich tradition of folk songs and dances, especially during festivals like Maghe. Their economy is based on agriculture, hunting, and gathering.',
      knowMore: 'https://en.wikipedia.org/wiki/Ho_people',
    },
    {
      name: 'Kharia',
      image: 'https://th.bing.com/th?id=OIP.7j6CHJUTZ6fEOcl7c0Jp8gHaEf&w=320&h=194&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Kharia tribe is divided into three sub-groups: Dhelki, Dudh, and Hill Kharia. They are skilled in agriculture and have a deep connection with forests. Their lifestyle includes traditional farming and gathering forest products, with rituals that honor nature.',
      knowMore: 'https://en.wikipedia.org/wiki/Kharia_people',
    },
    {
      name: 'Bhumij',
      image: 'https://th.bing.com/th?id=OIP.F9DUenKuQJ9YEApI6pm4PQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Bhumij tribe is similar to the Santhals in customs and practices, primarily engaged in agriculture. They inhabit the southern parts of Jharkhand and celebrate various festivals that highlight their cultural heritage. Their community life is marked by strong kinship ties.',
      knowMore: 'https://en.wikipedia.org/wiki/Bhumij_people',
    },
    {
      name: 'Korwa',
      image: 'https://th.bing.com/th?id=OIP.E4uZMY4OOmaTPJKM3GALoAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Korwa tribe is traditionally known as hunters and gatherers, residing in the Palamu district. Their lifestyle revolves around the forest, and they have a rich tradition of handicrafts. The Korwa community values its cultural heritage, emphasizing communal living and cooperation.',
      knowMore: 'https://en.wikipedia.org/wiki/Korwa_people',
    },
    {
      name: 'Asur',
      image: 'https://th.bing.com/th?id=OIP.aQGsodApTSre3hMF6_7XVwHaL_&w=196&h=318&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Asur tribe is known for their unique skills in ancient iron-smelting and blacksmithing. They inhabit the Latehar district and are traditionally semi-nomadic. Their culture includes rich oral traditions, and they engage in agriculture and gathering.',
      knowMore: 'https://en.wikipedia.org/wiki/Asur_people',
    },
    {
      name: 'Birhor',
      image: 'https://th.bing.com/th?id=OIP.b4mbsMjbAxtUjo2WPwNjVgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Birhor tribe is recognized for their semi-nomadic lifestyle, primarily residing in the Hazaribagh and Ranchi districts. Traditionally, they have been rope-makers and gatherers, relying on forest resources. Their cultural practices include distinctive rituals and traditional knowledge of local flora.',
      knowMore: 'https://en.wikipedia.org/wiki/Birhor_people',
    },
    {
      name: 'Lohra',
      image: 'https://th.bing.com/th?id=OIP.vV6j346qyNnrs7fPtrMIqQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Lohra tribe specializes in blacksmithing and crafting agricultural tools, residing mainly in the Hazaribagh district. They are known for their craftsmanship and have a rich oral tradition. The Lohra community values collective work and maintains strong familial bonds.',
      knowMore: 'https://en.wikipedia.org/wiki/Lohra_people',
    },
    {
      name: 'Gond',
      image: 'https://th.bing.com/th?id=OIP.BgVcp7bTa9RwKPUU_ccOkwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Gond tribe is one of the largest tribes in India, with a significant presence in Jharkhand. They have a rich cultural heritage, including unique art forms, music, and dance. The Gonds are primarily agriculturalists and have strong community ties.',
      knowMore: 'https://en.wikipedia.org/wiki/Gond_people',
    },
    {
      name: 'Savar',
      image: 'https://th.bing.com/th?id=OIP.xqEYcsidiXj6B-AjXTitDgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Savar tribe is primarily found in the hilly regions of Jharkhand. They are known for their vibrant traditions, including handicrafts and agricultural practices. The Savars celebrate various festivals that reflect their connection with nature.',
      knowMore: 'https://en.wikipedia.org/wiki/Savar_people',
    },
    {
      name: 'Banjara',
      image: 'https://th.bing.com/th?id=OIP.PQrX1DvxmOhAH6F7dbwTSQAAAA&w=149&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      description:
        'The Banjara tribe, also known as the Lambadis, are traditionally nomadic and are known for their colorful attire and intricate embroidery. They have a long history of trading and craftsmanship and reside in several districts of Jharkhand.',
      knowMore: 'https://en.wikipedia.org/wiki/Banjara_people',
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h1 className="mb-10 text-4xl font-bold text-center text-green-700">Tribes of Jharkhand</h1>
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {data.map((tribe, index) => (
          <div
            key={index}
            className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
          >
            <img
              src={tribe.image}
              alt={tribe.name}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold text-green-700">{tribe.name}</h2>
              <p className="text-gray-700">{tribe.description}</p>
              <a
                href={tribe.knowMore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-4 text-white bg-green-700 rounded-lg hover:bg-green-800"
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

export default Tribes;
