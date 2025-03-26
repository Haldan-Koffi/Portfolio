import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal flex md:justify-center flex-col">
      <aside className="flex flex-col items-center mb-2">
        <p className="font-bold text-xl">
          Haldan<span className="text-xl mr-4"> KOFFI</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 flex justify-center">
          <a
            className="px-4 py-2 hover:bg-black/40 transition duration-300"
            href="https://www.linkedin.com/in/haldan-koffi-55951b221/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
