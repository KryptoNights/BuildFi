import { vote_operator } from "@/utils/transitions";
import useConnection from "@/utils/useConnection";
import React from "react";

const Timeline = ({ projectInfo, id }: { projectInfo: any; id: number }) => {
  // const [signer, setSigner] = useState<any>(null);
  const { signer } = useConnection();

  console.log(projectInfo);

  const convertToNormalDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const milestoneData: any[] = [];

  projectInfo.milestones.forEach((milestone: any, index: number) => {
    const isVotingActive = milestone.voting_active;
    const votes_for = milestone.votes_for;
    const votes_against = milestone.votes_against;
    const votingEndTime = milestone.voting_deadline;

    milestoneData.push({
      index: index,
      votingActive: isVotingActive,
      votingUp: votes_for,
      votingDown: votes_against,
      votingEndTime: votingEndTime,
    });
  });

  const handleVoteWrapper = (vote: boolean) => {
    return async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      try {
        if (!signer) {
          console.error("Signer not available.");
          return;
        }

        const result = await vote_operator(0, 0, vote, signer);
        console.log(result);
      } catch (error) {
        console.error("Error occurred while voting:", error);
      }
    };
  };

  const milestones = projectInfo.milestone_timestamps.map(
    (timestamp: number, index: number) => {
      return (
        <li key={index} className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
              Milestone {index + 1}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {convertToNormalDate(timestamp)}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {!milestoneData[index].votingActive && (
              <div className="mt-2">
                <p>Voting active</p>
                <p>Upvotes: {milestoneData[index].votingUp}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleVoteWrapper(true)}
                >
                  Upvote
                </button>
                <p>Downvotes: {milestoneData[index].votingDown}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleVoteWrapper(false)}
                >
                  Downvote
                </button>
                <p>
                  Voting ends on:{" "}
                  {convertToNormalDate(milestoneData[index].votingEndTime)}
                </p>
              </div>
            )}
          </div>
        </li>
      );
    }
  );

  return <ol className="items-center sm:flex mt-3">{milestones}</ol>;
};

export default Timeline;
