// // import React, { useState } from "react";

// // function Contact() {
// //     const [formData, setFormData] = useState({
// //         name: "",
// //         email: "",
// //         phone: "",
// //         message: ""
// //     });

// //     const handleChange = (e) => {
// //         setFormData((prev) => ({
// //             ...prev,
// //             [e.target.name]: e.target.value
// //         }));
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();

// //         const whatsappNumber = "8017186434";

// //         const text = `Ambulance Service Inquiry:
// //         Name: ${formData.name}
// //         Email: ${formData.email}
// //         Phone: ${formData.phone}
// //         Message: ${formData.message}`;

// //         const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
// //             text
// //         )}`;

// //         window.open(whatsappURL, "_blank");
// //     };

// //     return (
// //         <div className="page">
// //             <h1 className="page-title">Contact Us</h1>

// //             <form className="contact-form" onSubmit={handleSubmit}>
// //                 <input
// //                     type="text"
// //                     name="name"
// //                     placeholder="Enter your name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     required
// //                 />

// //                 <input
// //                     type="email"
// //                     name="email"
// //                     placeholder="Enter your email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                 />

// //                 <input
// //                     type="tel"
// //                     name="phone"
// //                     placeholder="Enter your phone number"
// //                     value={formData.phone}
// //                     onChange={handleChange}
// //                     required
// //                 />

// //                 <textarea
// //                     name="message"
// //                     rows="5"
// //                     placeholder="Enter your message"
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     required
// //                 ></textarea>

// //                 <button type="submit">Submit on WhatsApp</button>
// //             </form>
// //         </div>
// //     );
// // }

// // export default Contact;

// import React, { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     destination: "",
//     travelDate: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const whatsappNumber = "918017186434";

//     const text = `
// 🌍 New Tour Inquiry

// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📞 Phone: ${formData.phone}
// 📍 Destination: ${formData.destination}
// 📅 Travel Date: ${formData.travelDate}

// 💬 Message:
// ${formData.message}
// `;

//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       text
//     )}`;

//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-center">
//         <h1 className="text-5xl font-bold text-white mb-4">
//           Plan Your Dream Trip
//         </h1>

//         <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
//           Tell us where you want to travel and our experts will help
//           create the perfect vacation package for you.
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="max-w-4xl mx-auto px-6 -mt-16 pb-20">
//         <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Travel Inquiry Form
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             className="grid md:grid-cols-2 gap-6"
//           >
//             {/* Name */}
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Email */}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Phone */}
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Destination */}
//             <input
//               type="text"
//               name="destination"
//               placeholder="Preferred Destination"
//               value={formData.destination}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Travel Date */}
//             <input
//               type="date"
//               name="travelDate"
//               value={formData.travelDate}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
//             />

//             {/* Message */}
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Tell us about your travel plans..."
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
//             ></textarea>

//             {/* Button */}
//             <button
//               type="submit"
//               className="md:col-span-2 bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition duration-300 shadow-lg"
//             >
//               Send Inquiry on WhatsApp
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    travelDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const whatsappNumber = "918017186434";

//     const text = `
// 🌍 New Travel Inquiry

// 👤 Name: ${formData.name}
// 📧 Email: ${formData.email}
// 📞 Phone: ${formData.phone}

// 📍 From: ${formData.from}
// 🏖️ Destination: ${formData.to}

// 📅 Travel Date: ${formData.travelDate}

// 💬 Message:
// ${formData.message}
// `;

//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//       text
//     )}`;

//     window.open(whatsappURL, "_blank");
//   };

const handleSubmit = (e) => {
    e.preventDefault();
  
    const whatsappNumber = "918017186434";
  
    const text = `
  🌍 New Travel Inquiry
  
  👤 Name: ${formData.name}
  📧 Email: ${formData.email}
  📞 Phone: ${formData.phone}
  
  📍 From: ${formData.from}
  🏖️ Destination: ${formData.to}
  
  📅 Travel Date: ${formData.travelDate}
  
  💬 Message:
  ${formData.message}
  `;
  
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
  
    window.open(whatsappURL, "_blank");

    alert("Inquiry sent successfully!");
  
    // Clear all fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      from: "",
      to: "",
      travelDate: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Plan Your Dream Trip
        </h1>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto px-4">
          Share your travel plans with us and get a personalized tour package
          designed just for you.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Travel Inquiry Form
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* From */}
            {/* <input
              type="text"
              name="from"
              placeholder="From City"
              value={formData.from}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
            
            {/* From City */}
<select
  name="from"
  value={formData.from}
  onChange={handleChange}
  required
  className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">Select Your City</option>

  <option value="Kolkata">Kolkata</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Chennai">Chennai</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Pune">Pune</option>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Lucknow">Lucknow</option>
  <option value="Bhubaneswar">Bhubaneswar</option>
  <option value="Patna">Patna</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Indore">Indore</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Surat">Surat</option>
  <option value="Visakhapatnam">Visakhapatnam</option>
  <option value="Guwahati">Guwahati</option>
  <option value="Ranchi">Ranchi</option>
  <option value="Siliguri">Siliguri</option>
</select>

            {/* Destination */}
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            >
              <option value="">Select Destination</option>

              <optgroup label="Domestic Tours">
                <option value="Goa">Goa</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Manali">Manali</option>
                <option value="Darjeeling">Darjeeling</option>
                <option value="Andaman">Andaman</option>
                <option value="Kerala">Kerala</option>
                <option value="Rajasthan">Rajasthan</option>
              </optgroup>

              <optgroup label="International Tours">
                <option value="Dubai">Dubai</option>
                <option value="Thailand">Thailand</option>
                <option value="Singapore">Singapore</option>
                <option value="Bali">Bali</option>
                <option value="Maldives">Maldives</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Paris">Paris</option>
              </optgroup>
            </select>

            {/* Travel Date */}
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your travel requirements..."
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 hover:bg-blue-700 border text-blue py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;