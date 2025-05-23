import { Mail } from "lucide-react";
import img from "../assets/photo/me.png";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
    >
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Hello, <br />
          I'am <span className="">Haldan</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          A Full Stack Developer. <br />
          I work mainly with Symfony and Angular. <br />
          You can contact me at the address below
          <br />
        </p>
        <p className="flex items-center gap-2 btn btn-accent md:w-fit">
          <Mail className="w-5 h-5 border-color-b" />
          <span className="text-blue-c">e.haldankoffi@gmail.com</span>
        </p>
      </div>
      <div className="md:ml-60">
        <img
          src={img}
          alt=""
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl border-color-b"
          style={{
            borderRadius: "51% 49% 38% 62% / 63% 67% 33% 37%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
