import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import { getProjectInfo, invest } from "@/utils/transitions";
import data from "../../../constant/constant";
import useConnection from "@/utils/useConnection";

const Slug = (props: any) => {
  const router = useRouter();
  const { slug }: any = router.query;
  const { signer } = useConnection();
  // const project = data.find((item) => item.slug === slug);

  const id = slug;
  console.log(id);

  const [projectInfo, setProjectInfo] = useState<any>(null);
  console.log(projectInfo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectInfo = async () => {
      setLoading(true);
      try {
        const info = await getProjectInfo(id);
        setProjectInfo(info);
      } catch (error) {
        setError("Failed to fetch project information");
        console.error("Error fetching project information:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProjectInfo();
    }
  }, [slug]);

  const investApi = async () => {
    try {
      await invest(id, 1000000, signer!);
      console.log("okay");
    } catch (error) {
      console.error("Error investing in project:", error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {projectInfo && (
        <div className="max-w-xl mx-auto">
          <div className="flex items-center mb-4">
            <img
              src={projectInfo[2]}
              alt="Project Image"
              className="w-20 h-20 rounded-full mr-4"
              width={250}
              height={500}
            />
            <div
              style={{
                marginLeft: "4vh",
              }}
            >
              <h1 className="text-xl font-bold">{projectInfo[1]}</h1>
              <p className="text-gray-600">{projectInfo[3]}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Milestone Count: {projectInfo.milestone_count}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={investApi}
          >
            Invest in this project
          </button>
        </div>
      )}
    </>
  );
};

export default Slug;
