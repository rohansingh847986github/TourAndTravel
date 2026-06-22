import React from "react";

const services = [
  {
    icon: "🏨",
    title: "Hotel Booking",
    description:
      "Book luxury, budget, and premium hotels worldwide at the best prices.",
  },
  {
    icon: "✈️",
    title: "Flight Booking",
    description:
      "Get affordable domestic and international flight tickets with ease.",
  },
  {
    icon: "🛂",
    title: "Visa Assistance",
    description:
      "Hassle-free visa processing and documentation support for travelers.",
  },
  {
    icon: "🛡️",
    title: "Travel Insurance",
    description:
      "Travel confidently with comprehensive insurance coverage plans.",
  },
  {
    icon: "🌍",
    title: "Holiday Packages",
    description:
      "Customized vacation packages designed to suit every traveler.",
  },
  {
    icon: "🧑‍💼",
    title: "Tour Guide",
    description:
      "Professional local guides to enhance your travel experience.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Our Services
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We provide everything you need to make your journey smooth,
            comfortable, and unforgettable.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What We Offer
          </h2>

          <p className="text-gray-600 text-lg">
            Premium travel solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 border border-gray-100"
            >
              <div className="text-6xl mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-14">
            Why Choose TravelWorld?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center text-white">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">
                Best Prices
              </h3>
              <p>
                Competitive pricing with no hidden charges.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center text-white">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3">
                Trusted Service
              </h3>
              <p>
                Thousands of satisfied travelers worldwide.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center text-white">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-3">
                24/7 Support
              </h3>
              <p>
                Dedicated travel experts available anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Ready For Your Next Adventure?
        </h2>

        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Let us help you plan the perfect trip with our premium travel
          services and customized packages.
        </p>

        <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default Services;