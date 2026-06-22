import React from "react";

const internationalTours = [
  {
    id: 1,
    country: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
    duration: "5 Days / 4 Nights",
    price: "₹59,999",
    description:
      "Experience luxury shopping, desert safari, Burj Khalifa, and stunning city views.",
  },
  {
    id: 2,
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200",
    duration: "6 Days / 5 Nights",
    price: "₹74,999",
    description:
      "Explore Marina Bay Sands, Sentosa Island, Universal Studios, and Gardens by the Bay.",
  },
  {
    id: 3,
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200",
    duration: "5 Days / 4 Nights",
    price: "₹49,999",
    description:
      "Enjoy tropical beaches, island hopping, nightlife, and authentic Thai cuisine.",
  },
  {
    id: 4,
    country: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
    duration: "4 Days / 3 Nights",
    price: "₹89,999",
    description:
      "Relax in luxurious water villas surrounded by crystal-clear turquoise waters.",
  },
  {
    id: 5,
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200",
    duration: "7 Days / 6 Nights",
    price: "₹1,49,999",
    description:
      "Witness breathtaking Alps, scenic train rides, lakes, and charming villages.",
  },
  {
    id: 6,
    country: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
    duration: "6 Days / 5 Nights",
    price: "₹69,999",
    description:
      "Discover stunning beaches, temples, waterfalls, and Balinese culture.",
  },
];

const International = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            International Tours
          </h1>

          <p className="text-lg md:text-2xl text-gray-200">
            Discover The World's Most Amazing Destinations
          </p>

          <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition">
            Explore Packages
          </button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Popular International Packages
          </h2>

          <p className="text-gray-600 text-lg">
            Handpicked destinations for unforgettable international vacations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={tour.image}
                alt={tour.country}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {tour.country}
                </h3>

                <p className="text-gray-600 mb-4">
                  {tour.description}
                </p>

                <div className="flex justify-between items-center mb-5">
                  <span className="text-gray-500 text-sm">
                    {tour.duration}
                  </span>

                  <span className="text-2xl font-bold text-blue-600">
                    {tour.price}
                  </span>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Our International Tours?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-xl font-bold mb-3">
                Flight Assistance
              </h3>
              <p className="text-gray-600">
                Hassle-free flight booking and visa guidance for every trip.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-3">
                Premium Hotels
              </h3>
              <p className="text-gray-600">
                Stay in carefully selected luxury and comfortable hotels.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">
                Global Destinations
              </h3>
              <p className="text-gray-600">
                Explore the most sought-after travel destinations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your International Journey Today
          </h2>

          <p className="text-blue-100 text-lg mb-8">
            Let us help you create unforgettable memories around the world.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
            Contact Travel Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default International;