import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import WrapperCards from "../../../components/WrapperCard/WrapperCards";

const index = () => {
  return (
    <div className="flex flex-row w-full m-auto z-999 justify-between">
      <Sidebar />
      <WrapperCards />
    </div>
  );
};

export default index;
