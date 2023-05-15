import Project1 from "./Project1";
import Project2 from "./Project2";

const ProjectContent = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold ml-auto lg:ml-96 lg:mr-96" id="project">
        Project
      </h1>
      <Project1 />
      <Project2 />
    </>
  );
};

export default ProjectContent;
