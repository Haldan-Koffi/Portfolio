import Title from "./Title";
import img from "../assets/photo/me.png";
import { Braces, Code, PaintbrushVertical } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Frontend",
    description: "Je suis un développeur frontend",
    icon: <Code className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Backend",
    description: "Je suis un développeur backend",
    icon: <Braces className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description: "J'aime créer des interfaces utilisateurs attrayantes",
    icon: <PaintbrushVertical className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="p-10 " id="About">
      <Title title="About" />
      <div className="flex justify-center items-center mt-20">
        <div className="hidden md:block">
          <img src={img} alt="" className="w-96 object-cover rounded-xl" />
        </div>
        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-gray-850 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
