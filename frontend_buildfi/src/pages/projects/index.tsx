import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import WrapperCards from "../../../components/WrapperCard/WrapperCards";
import Layout from "../../../components/Layout/Layout";
import { useRouter } from "next/router";
import data from "../../../constant/constant";

const index = () => {
  const router = useRouter();

  const handleClick = async (id: number) => {
    const project = data.find((item) => item.id === id);
    if (project) {
      router.push(`/projects/${project.slug}`);
    }
  };
  return (
    <div className="flex flex-row w-full m-auto z-999 justify-between">
      <Sidebar />
      <WrapperCards data={data} handleClick={handleClick} />
    </div>
  );
};

export default index;
