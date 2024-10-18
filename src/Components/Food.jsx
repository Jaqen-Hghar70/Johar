import React from 'react';

function Food() {
  const data = [
    {
      name: "Litti Chokha",
      image: "https://th.bing.com/th?id=OIP.lM9hEe5whiScIRuQNl6engHaIN&w=237&h=263&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional dish made with roasted wheat dough balls stuffed with spiced sattu (gram flour) and served with mashed roasted vegetables like eggplant and potatoes (Chokha).",
      knowMore: "https://en.wikipedia.org/wiki/Litti"
    },
    {
      name: "Dhuska",
      image: "https://th.bing.com/th?id=OIP.siCmCL38HuWIaW8aR-ChDgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A deep-fried snack made from rice flour and lentil batter, usually served with aloo (potato) curry or chutney.",
      knowMore: "https://en.wikipedia.org/wiki/Dhuska"
    },
    {
      name: "Pittha",
      image: "https://th.bing.com/th?id=OIP.D_EjaCiXhxW5k5a3bdnF6gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Steamed or fried dumplings made from rice flour dough, filled with sweet or savory fillings like coconut, jaggery, or spiced lentils.",
      knowMore: "https://en.wikipedia.org/wiki/Pitha"
    },
    {
      name: "Rugra",
      image: "https://th.bing.com/th?id=OIP.xyABnCqLu1E9Cvi8pg79-AHaFS&w=296&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A type of wild mushroom found in Jharkhand, cooked with onions, garlic, and spices, known for its unique earthy flavor.",
      knowMore: "https://en.wikipedia.org/wiki/Rugra"
    },
    {
      name: "Chilka Roti",
      image: "https://th.bing.com/th?id=OIP.6Mi30srg86tg8xxY-w-vnwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A thin pancake made from rice flour and split chickpea batter, usually served with chutney or curry.",
      knowMore: "https://en.wikipedia.org/wiki/Chilka"
    },
    {
      name: "Handia",
      image: "https://th.bing.com/th?id=OIP.mexyVjf4ScYmj6uZjqlSVwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional fermented rice beer popular among tribal communities, made by fermenting rice with herbs.",
      knowMore: "https://en.wikipedia.org/wiki/Handia_(beer)"
    },
    {
      name: "Thekua",
      image: "https://th.bing.com/th?id=OIP.qGMRkeN4450EXzAYIMwaowHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A sweet snack made from wheat flour, jaggery, and ghee, deep-fried and often made during festivals like Chhath.",
      knowMore: "https://en.wikipedia.org/wiki/Thekua"
    },
    {
      name: "Malpua",
      image: "https://th.bing.com/th?id=OIP.u_Rd-VDpOmUL9I3a8QAV4QHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A sweet pancake made from flour, milk, and sugar, often soaked in syrup and served during festivals.",
      knowMore: "https://en.wikipedia.org/wiki/Malpua"
    },
    {
      name: "Tilkut",
      image: "https://th.bing.com/th?id=OIP.j1G4bbsW_X-2HrG2pK9eBQHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A crunchy sweet made from sesame seeds and jaggery, typically eaten during the festival of Makar Sankranti.",
      knowMore: "https://en.wikipedia.org/wiki/Tilkut"
    },
    {
      name: "Pakhala Bhath",
      image: "https://th.bing.com/th?id=OIP.agDBeVgoC8C3Zl7zbVb3igHaFX&w=293&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A cooling dish made of fermented rice soaked in water, often served with fried vegetables or chutney.",
      knowMore: "https://en.wikipedia.org/wiki/Pakhala"
    },
    {
      name: "Mitha Khaja",
      image: "https://th.bing.com/th?id=OIP.OMrvSrF3HLYu_eqQuamn3gHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A layered sweet pastry made from wheat flour, sugar, and ghee, deep-fried and crisp, often served during festivals.",
      knowMore: "https://en.wikipedia.org/wiki/Khaja"
    },
    {
      name: "Chana Sattu",
      image: "https://www.bing.com/th?id=OIP.ivjWdi_K_ZZ4-wc1FenzYAHaFj&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A refreshing drink or flour made from roasted gram (chana), often consumed in both sweet and savory forms.",
      knowMore: "https://en.wikipedia.org/wiki/Sattu"
    },
    {
      name: "Bhajania Roti",
      image: "https://th.bing.com/th?id=OIP.i3i2lChKUpoF8J-Pq0HargHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional millet flatbread (Bajra roti), served with spicy chutney or curries, popular in rural Jharkhand.",
      knowMore: "https://en.wikipedia.org/wiki/Bajra"
    },
    {
      name: "Mahua Ladoo",
      image: "https://th.bing.com/th?id=OIP.701Gl38Qdy42hyTA4z2bcwHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A sweet made from the flour of Mahua flowers, commonly prepared in tribal regions of Jharkhand.",
      knowMore: "https://en.wikipedia.org/wiki/Mahua"
    },
    {
      name: "Arsa",
      image: "https://th.bing.com/th?id=OIP.s9i_G5cCRAevjHoZ2kNGnwHaC5&w=349&h=136&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A traditional Jharkhandi sweet made from rice flour, jaggery, and sesame seeds, often prepared during special occasions.",
      knowMore: "https://en.wikipedia.org/wiki/Arsa"
    },
    {
      name: "Dubhni Roti",
      image: "https://th.bing.com/th?id=OIP.ko7PRd-HcOtzBf8SEH4RkwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A unique layered flatbread made with multiple layers of dough, cooked on a griddle with ghee, served with vegetables.",
      knowMore: "https://en.wikipedia.org/wiki/Flatbread"
    },
    {
      name: "Bamboo Shoot Curry",
      image: "https://th.bing.com/th?id=OIP.9UqdLkvy8efJndgMk3KbWgHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A savory dish made from fresh bamboo shoots cooked with spices, known for its distinctive flavor in tribal cuisine.",
      knowMore: "https://en.wikipedia.org/wiki/Bamboo_shoot"
    },
    {
      name: "Ghugni",
      image: "https://th.bing.com/th?id=OIP.JSWMQIkVaZr5cx13_Va6gAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "A spiced curry made from dried yellow peas or black gram, often served as a snack or side dish with poori or roti.",
      knowMore: "https://en.wikipedia.org/wiki/Ghugni"
    },
    {
      name: "Dal Pitha",
      image: "https://th.bing.com/th?id=OIP.XY5Rovi1WA2mrbDZ3iMk0gHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      Description: "Steamed dumplings filled with spiced lentil filling, similar to momos, served with spicy chutney or sauces.",
      knowMore: "https://en.wikipedia.org/wiki/Dal_Pitha"
    }
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h1 className="mb-10 text-4xl font-bold text-center text-green-700">Famous Foods of Jharkhand</h1>
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {data.map((food, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
          >
            <img src={food.image} alt={food.name} className="object-cover w-full h-64" />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-green-700">{food.name}</h2>
              <p className="mb-4 text-gray-700">{food.Description}</p>
              <a
                href={food.knowMore}
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

export default Food;
