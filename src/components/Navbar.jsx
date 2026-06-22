// import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
//         scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         <NavLink to="/" className="text-3xl font-bold text-gray-800">
//           TravelWorld
//         </NavLink>

//         <ul className="flex items-center gap-8 font-medium text-gray-800">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>

//           <li className="relative">
//             <button onClick={() => setShow(!show)}>Destination ▼</button>

//             {show && (
//               <div className="absolute top-10 left-0 w-56 bg-white rounded-lg shadow-xl">
//                 <NavLink
//                   to="/domestic"
//                   className="block px-4 py-3 text-black hover:bg-blue-50"
//                   onClick={() => setShow(false)}
//                 >
//                   Domestic Tours
//                 </NavLink>

//                 <NavLink
//                   to="/international"
//                   className="block px-4 py-3 text-black hover:bg-blue-50"
//                   onClick={() => setShow(false)}
//                 >
//                   International Tours
//                 </NavLink>
//               </div>
//             )}
//           </li>

//           <li>
//             <NavLink to="/services">Services</NavLink>
//           </li>

//           <li>
//             <NavLink to="/faq">FAQ</NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/contact"
//               className="border border-gray-800 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
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
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
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
          : "bg-white/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}

        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-bold text-gray-800"
        >
          TravelWorld
        </NavLink>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-800">
          <li>
            <NavLink
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </NavLink>
          </li>

          {/* Destination Dropdown */}

          <li className="relative">
            <button
              onClick={() => setShow(!show)}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Destination
              <ChevronDown size={18} />
            </button>

            {show && (
              <div className="absolute top-12 left-0 w-60 bg-white rounded-xl shadow-2xl overflow-hidden">
                <NavLink
                  to="/domestic"
                  className="block px-5 py-3 hover:bg-blue-50"
                  onClick={() => setShow(false)}
                >
                  Domestic Tours
                </NavLink>

                <NavLink
                  to="/international"
                  className="block px-5 py-3 hover:bg-blue-50"
                  onClick={() => setShow(false)}
                >
                  International Tours
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/services" className="hover:text-blue-600 transition">
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/faq" className="hover:text-blue-600 transition">
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="border border-gray-800 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-800">
          <NavLink
            to="/"
            onClick={() => setMobileMenu(false)}
            className="hover:text-blue-600"
          >
            Home
          </NavLink>

          <button
            onClick={() => setShow(!show)}
            className="flex justify-between items-center w-full hover:text-blue-600"
          >
            Destination
            <ChevronDown size={18} />
          </button>

          {show && (
            <div className="pl-4 flex flex-col bg-gray-50 rounded-lg">
              <NavLink
                to="/domestic"
                className="py-3"
                onClick={() => {
                  setShow(false);
                  setMobileMenu(false);
                }}
              >
                Domestic Tours
              </NavLink>

              <NavLink
                to="/international"
                className="py-3"
                onClick={() => {
                  setShow(false);
                  setMobileMenu(false);
                }}
              >
                International Tours
              </NavLink>
            </div>
          )}

          <NavLink
            to="/services"
            onClick={() => setMobileMenu(false)}
            className="hover:text-blue-600"
          >
            Services
          </NavLink>

          <NavLink
            to="/faq"
            onClick={() => setMobileMenu(false)}
            className="hover:text-blue-600"
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="text-center border border-gray-800 rounded-full py-3 hover:bg-gray-800 hover:text-white transition"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
