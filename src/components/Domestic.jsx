import React from "react";

const tours = [
  {
    id: 1,
    name: "Goa Beach Tour",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800",
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    description:
      "Enjoy beautiful beaches, water sports, nightlife, and delicious seafood.",
  },
  {
    id: 2,
    name: "Kashmir Paradise",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade501739b17?w=800",
    duration: "6 Days / 5 Nights",
    price: "₹24,999",
    description:
      "Explore Srinagar, Gulmarg, Pahalgam, and the stunning Dal Lake.",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    duration: "5 Days / 4 Nights",
    price: "₹18,999",
    description:
      "Experience houseboats, tea gardens, beaches, and nature.",
  },
  {
    id: 4,
    name: "Rajasthan Heritage",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    duration: "7 Days / 6 Nights",
    price: "₹29,999",
    description:
      "Visit Jaipur, Udaipur, Jodhpur, and explore royal palaces.",
  },
  {
    id: 5,
    name: "Darjeeling Escape",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    duration: "3 Days / 2 Nights",
    price: "₹9,999",
    description:
      "Witness breathtaking mountain views and tea plantations.",
  },
  {
    id: 6,
    name: "Andaman Adventure",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    duration: "5 Days / 4 Nights",
    price: "₹22,999",
    description:
      "Crystal-clear waters, scuba diving, and island exploration.",
  },
];

const Domestic = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600')",
        }}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Domestic Tours
          </h1>

          <p className="text-gray-200 text-lg">
            Explore India's Most Beautiful Destinations
          </p>
        </div>
      </section>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          Popular Tour Packages
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Choose from our handpicked domestic tour packages.
        </p>

        {/* Tour Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {tour.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {tour.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{tour.duration}</span>
                  <span className="font-semibold text-blue-600">
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
      </div>

      {/* Why Choose Us */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Travel With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Best Price Guarantee
              </h3>
              <p className="text-gray-600">
                Affordable packages with premium travel experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Expert Guides
              </h3>
              <p className="text-gray-600">
                Professional guides to make your trip memorable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Dedicated support team available anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready For Your Next Adventure?
        </h2>

        <p className="text-gray-600 mb-8">
          Book your dream vacation today and explore India like never before.
        </p>

        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Domestic;
