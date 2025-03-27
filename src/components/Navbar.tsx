const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center md:justify-between items-center p-4">
        <a href="#Home" className="flex items-center font-bold text-xl">
          Haldan <span className="text-xl mr-4 ml-2">KOFFI</span>
        </a>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="#Home"
              className="font-bold px-4 py-2 rounded-md text-white hover:bg-black/40 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="font-bold px-4 py-2 rounded-md text-white hover:bg-black/40 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#TechnologiesExperiences"
              className="font-bold px-4 py-2 rounded-md text-white hover:bg-black/40 transition duration-300"
            >
              Technologies & Experiences
            </a>
          </li>
          {/* <li>
            <a
              href="#About"
              className="font-bold px-4 py-2 rounded-md text-white hover:bg-black/40 transition duration-300"
            >
              About
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
