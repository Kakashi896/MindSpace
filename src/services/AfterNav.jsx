import brain from "/Photos/Logo.jpeg";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const navItems = ["Home", "Take Test", "FAQ", "Profile"];
  const Path = ["", "test", "faq", "profile"];

  return (
    <div className="navbar gap-[25vw] tracking-tighter w-full flex flex-wrap justify-between sm:justify-around items-center py-6 sm:py-8 px-4 sm:px-10 sticky top-0 z-50">

      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img className="w-10 sm:w-[4vw]" src={brain} alt="Logo" />
        <h1 className="text-2xl  sm:text-4xl font-light text-green-800 tracking-wide">MindSpace</h1>
      </div>

      {/* Navigation Links */}
      <div className="links montserrat flex flex-wrap gap-4 sm:gap-10 items-center justify-center text-green-800 font-medium">
        {navItems.map((item, index) => {
          if (index === 0) {
            // Home → redirect to /dashboard
            return (
              <RouterLink
                key={index}
                to="/dashboard"
                className="capitalize text-sm sm:text-base cursor-pointer transition-all duration-200 hover:scale-105 hover:text-green-600 hover:underline underline-offset-2"
              >
                {item}
              </RouterLink>
            );
          } else if (index === 3) {
            // Profile button
            return (
              <RouterLink
                key={index}
                to="/profile"
                className="capitalize text-sm sm:text-base cursor-pointer transition-all duration-200 ml-0 sm:ml-6 border-0 px-5 py-2 sm:px-6 sm:py-3 text-white rounded-full bg-green-600 hover:bg-green-700 shadow-md hover:scale-105"
              >
                {item}
              </RouterLink>
            );
          } else {
            // All other scroll links
            return (
              <ScrollLink
                key={index}
                to={Path[index]}
                smooth={true}
                duration={800}
                offset={-80}
                className="capitalize text-sm sm:text-base cursor-pointer transition-all duration-200 hover:scale-105 hover:text-green-600 hover:underline underline-offset-2"
              >
                {item}
              </ScrollLink>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Navbar;
