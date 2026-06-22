import React from "react";

const Home = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
      }}
    >
      <div className="bg-black/50 p-8 rounded-xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Explore The World
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Discover Amazing Destinations and Create Unforgettable Memories
        </p>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300">
          Start Exploring
        </button>
      </div>
    </section>
  );
};

export default Home;