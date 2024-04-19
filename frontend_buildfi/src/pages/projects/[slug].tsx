import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import { getProjectInfo, invest } from "@/utils/transitions";
import data from "../../../constant/constant";
import useConnection from "@/utils/useConnection";
import Timeline from "../../../components/Timeline/timeline";

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
            <div className="w-1/2 pr-8">
              <img
                src={projectInfo.image}
                alt="Project Image"
                className="w-40 h-auto rounded-lg"
                width={300}
                height={300}
              />
            </div>
            <div
              className="w-1/2"
              style={{
                marginLeft: "6vw",
              }}
            >
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">Name of the Project:</h1>
                <p className="text-gray-500">{projectInfo.name}</p>
              </div>
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">Description:</h1>
                <p className="text-gray-500">{projectInfo.description}</p>
              </div>
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">Milestone Count:</h1>
                <p className="text-gray-500">{projectInfo.milestone_count}</p>
              </div>
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">
                  Number of Investors in this project:
                </h1>
                <p className="text-gray-500">{projectInfo.investors.length}</p>
              </div>
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">
                  Owner of this project:
                </h1>
                <p className="text-gray-500">{projectInfo.owner}</p>
              </div>
            </div>
          </div>
          <Timeline projectInfo={projectInfo} />
          {/* <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={investApi}
          >
            Invest in this project
          </button> */}
        </div>
      )}
    </>
  );
};

export default Slug;
