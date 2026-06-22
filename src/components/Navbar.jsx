// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
//         {/* Logo */}
//         <NavLink
//           to="/"
//           className="text-3xl font-bold text-gray-700"
//         >
//           TravelWorld
//         </NavLink>

//         {/* Menu */}
//         <ul className="flex items-center gap-8 font-medium text-gray-700">
          
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "hover:text-yellow-400 transition duration-300"
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           {/* Destination Dropdown */}
//           <li className="relative">
//             <button
//               onClick={() => setShow(!show)}
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Destination ▼
//             </button>

//             {show && (
//               <div className="absolute top-10 left-0 w-56 bg-white rounded-lg shadow-xl overflow-hidden">
//                 <NavLink
//   to="/international"
//   className={({ isActive }) =>
//     `block px-4 py-3 font-medium ${
//       isActive
//         ? "text-blue-600 bg-blue-50"
//         : "text-black hover:bg-blue-50 hover:text-blue-600"
//     }`
//   }
//   onClick={() => setShow(false)}
// >
//   Domestic Tours
// </NavLink>

//                 <NavLink
//   to="/international"
//   className={({ isActive }) =>
//     `block px-4 py-3 font-medium ${
//       isActive
//         ? "text-blue-600 bg-blue-50"
//         : "text-black hover:bg-blue-50 hover:text-blue-600"
//     }`
//   }
//   onClick={() => setShow(false)}
// >
//   International Tours
// </NavLink>
//               </div>
//             )}
//           </li>

//           <li>
//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "hover:text-yellow-400 transition duration-300"
//               }
//             >
//               Services
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/faq"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-yellow-400 font-semibold"
//                   : "hover:text-yellow-400 transition duration-300"
//               }
//             >
//               FAQ
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/contact"
//               className="border border-white text-gray-300 px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <NavLink
          to="/"
          className="text-3xl font-bold text-gray-800"
        >
          TravelWorld
        </NavLink>

        <ul className="flex items-center gap-8 font-medium text-gray-800">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="relative">
            <button onClick={() => setShow(!show)}>
              Destination ▼
            </button>

            {show && (
              <div className="absolute top-10 left-0 w-56 bg-white rounded-lg shadow-xl">
                <NavLink
                  to="/domestic"
                  className="block px-4 py-3 text-black hover:bg-blue-50"
                  onClick={() => setShow(false)}
                >
                  Domestic Tours
                </NavLink>

                <NavLink
                  to="/international"
                  className="block px-4 py-3 text-black hover:bg-blue-50"
                  onClick={() => setShow(false)}
                >
                  International Tours
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="border border-gray-800 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
