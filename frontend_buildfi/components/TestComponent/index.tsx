import { isKycDone, getAllProjects } from "@/utils/transitions";
import useConnection from "@/utils/useConnection";
import React, { useState } from "react";

const TestComp = () => {
//   const address = "08F20F4E2906c2273DB308Be734b67B97233daeEd"
  const [email, setEmail] = useState("");
  const { signer } = useConnection();
  console.log(signer);
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
    //   const isDone = await isKycDone(address);
    //   const isDone = await isKycDone((await signer?.getAddress())!)
    //   console.log("isDone", isDone);
    const projects = await getAllProjects();
    console.log("Projects:", projects);
    } catch (error) {
    //   console.error("Error creating account:", error);
    }
  };

  return (
    <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
    </button>
  );
};

export default TestComp;
