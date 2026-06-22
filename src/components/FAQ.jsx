import React, { useState } from "react";

const faqData = [
  {
    question: "How do I book a tour package?",
    answer:
      "You can book any tour package directly through our website or contact our travel experts for personalized assistance.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes, we provide complete visa guidance and documentation support for international tours.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Absolutely! We offer fully customizable travel packages according to your budget and preferences.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Debit Cards, Credit Cards, Net Banking, and international payment methods.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, travel insurance can be added to any package for additional safety and coverage.",
  },
  {
    question: "What if my trip gets cancelled?",
    answer:
      "Cancellation policies vary by package. Our support team will help you with refunds and rescheduling options.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            FAQ
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black text-gray-900">
            Frequently Asked
            <span className="text-blue-600"> Questions</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Find answers to common questions about bookings,
            travel packages, payments, visas, and more.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-32 pb-24 bg-gray-900">
        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <span className="text-3xl text-blue-600">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>

          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our travel experts are available 24/7 to assist you
            with bookings, travel planning, and support.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;