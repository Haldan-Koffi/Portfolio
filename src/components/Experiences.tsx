import Title from "./Title";

import imgAngular from "../assets/technologies/angular.png";
import imgSymfony from "../assets/technologies/symfony.png";
import imgBootstrap from "../assets/technologies/bootstrap.png";
import imgPython from "../assets/technologies/python_logo.png";
import imgHTML from "../assets/technologies/html.png";
import imgCSS from "../assets/technologies/css.png";
import imgTypeScript from "../assets/technologies/ts.png";
import imgJavaScript from "../assets/technologies/js.png";
import imgMySQL from "../assets/technologies/mysql_logo.svg";
import imgMongoDB from "../assets/technologies/mongodb_logo.png";
import imgReact from "../assets/technologies/react.png";
import imgJenkins from "../assets/technologies/jenkins.jpg";
// import imgPhp from "../assets/technologies/php.png";

import beaters from "../assets/companies/beaters.png";
import ites from "../assets/companies/ites.png";
import g2r from "../assets/companies/g2r.png";

const skills = [
  { id: 1, name: "Symfony", image: imgSymfony },
  { id: 2, name: "Angular", image: imgAngular },
  { id: 3, name: "React", image: imgReact },
  { id: 4, name: "Bootstrap", image: imgBootstrap },
  // { id: 5, name: "PhP", image: imgPhp },
  { id: 5, name: "Python", image: imgPython },
  { id: 6, name: "HTML", image: imgHTML },
  { id: 7, name: "CSS", image: imgCSS },
  { id: 8, name: "Typscript", image: imgTypeScript },
  { id: 9, name: "JavaScript", image: imgJavaScript },
  { id: 10, name: "MySQL", image: imgMySQL },
  { id: 11, name: "MongoDB", image: imgMongoDB },
  { id: 12, name: "Jenkins", image: imgJenkins },
];

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Beaters",
    period: "February 2025 - March 2025",
    description: [
      "Design a minimum viable product for a future site development",
      "Organize and improve the current showcase site",
    ],
    image: beaters,
  },

  {
    id: 2,
    role: "Certification project",
    company: "G2R Formation",
    period: "September 2024 - February 2025",
    description: [
      "Develop a project to obtain the professional title of Application Developer",
    ],
    image: g2r,
  },
  {
    id: 3,
    role: "Data analyst",
    company: "Institut Terre et Environnement de Strasbourg",
    period: "February 2023 - August 2023",
    description: ["Data analysis in Python"],
    image: ites,
  },
];

const Experiences = () => {
  return (
    <div id="TechnologiesExperiences">
      <Title title="Technologies & Experiences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-20">
        <div className="flex flex-wrap gap-4 justify-center items center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" flex justify-center items-center flex-col"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="md:ml-4 flex flex-col space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col bg-blue-d p-5 rounded-xl shadow-lg border"
            >
              <div className="flex items-center ">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role}, {experience.company}
                  </h1>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
