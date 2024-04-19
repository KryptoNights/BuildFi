import { useRouter } from "next/router";
import WrapperCards from "../../../components/WrapperCard/WrapperCards";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/utils/transitions";

const index = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  console.log(projects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await getAllProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = async (id: number) => {
    const project = projects.find((item) => item.id === id);
    if (project) {
      router.push(`/investments/${project.id}`);
      console.log("id", project.id);
    }
  };
  return (
    <>
      <div className="flex flex-row w-full m-auto z-999 justify-between">
        <WrapperCards data={projects} handleClick={handleClick} />
      </div>
    </>
  );
};

export default index;
