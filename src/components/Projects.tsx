import Title from "./Title";
import img1 from "../assets/projects/Vu_ajout_livre.png";
import img3 from "../assets/projects/vu_dashboard.png";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Livrosphère",
    description:
      "Livrosphère is a collaborative library dedicated to reading enthusiasts. Users can share, like, comment, recommend and consult books classified by category.",
    technologies: ["Symfony", "JavaScript", "MySQL", "MongoDB"],
    demoLink:
      "https://www.loom.com/share/94b6ec533a43430ba2bdcca49fdd9b41?sid=eed8eb38-0ab9-46db-9134-232508f22452",
    repoLink: "https://github.com/Haldan-Koffi/LivrosphereRepo",
    image: img1,
  },
  {
    id: 2,
    title: "REST API moderation application",
    description:
      "The moderation platform enables Livrosphère administrators to delete comments or books. This involves secure JWT authentication and the use of a REST API.",
    technologies: ["Angular", "TypeScript"],
    demoLink:
      "https://www.loom.com/share/91e64646fb424751afdc3bd0a1a09b45?sid=19f5e925-9dbc-478d-97b0-ff12094bc2ca",
    repoLink:
      "https://github.com/Haldan-Koffi/Frontend_Angular_Livrosphere/tree/main",
    image: img3,
  },
];

const Projects = () => {
  return (
    <div className="mt-10 mb-30" id="Projects">
      <Title title="Projects" />
      <div className="grid md:grid-cols-2 gap-4 mt-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 p-5 h-fit rounded-xl shadow-lg border"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span className=" bg-blue-c rounded-xl p-2 flex flex-wrap md:flex-col-row">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a
                className="flex justify-center gap-2 button w-2/3 rounded-xl border hover:bg-black/40 transition duration-300"
                target="_blank"
                href={project.demoLink}
              >
                Demo
                {/* <Video className=" w-4" /> */}
              </a>
              <a
                className="flex justify-center rounded-xl border button w-1/3 ml-2 hover:bg-black/40 transition duration-300"
                target="_blank"
                href={project.repoLink}
              >
                <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
