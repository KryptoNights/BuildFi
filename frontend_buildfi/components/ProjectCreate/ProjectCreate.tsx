import { useState } from "react";

const ProjectCreate = () => {
  const [metadata, setMetadata] = useState("");
  const [name, setName] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [fundingEndDate, setFundingEndDate] = useState("");
  const [numMilestones, setNumMilestones] = useState("");
  const [milestones, setMilestones]: any = useState([]);
  const convertDateToMs=(dateString:any)=> {
    const date = new Date(dateString);
    const ms = date.getTime();
    return ms*1000;
  }
  
  const milestonesWithIsoDate = milestones.map((milestone:any )=> {
    return {
      date:  convertDateToMs(milestone.date),
      fundPercentage: milestone.fundPercentage
    };
  });
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("ff", fundingEndDate);
    const date= convertDateToMs(fundingEndDate);
    console.log("ff", milestonesWithIsoDate);

    // Add your form submission logic here
  };

  const handleMilestoneChange = (index: any, field: any, value: any) => {
    const updatedMilestones: any = [...milestones];
    updatedMilestones[index][field] = value;
    setMilestones(updatedMilestones);
  };

  const addMilestone = () => {
    setMilestones([...milestones, { date: "", fundPercentage: "" }]);
  };

  return (
    <div className="m-auto w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h5 className="text-xl font-bold  text-gray-900 dark:text-white">
          Project Details
        </h5>
        <div>
          <label
            htmlFor="metadata"
            className="block mb-4 text-l font-medium text-gray-900 dark:text-white"
          >
            Metadata (Image Link)
          </label>
          <input
            type="text"
            id="metadata"
            value={metadata}
            onChange={(e) => setMetadata(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-4  text-l font-medium text-gray-900 dark:text-white"
          >
            Name of project
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="totalBudget"
            className="block mb-4  text-l font-medium text-gray-900 dark:text-white"
          >
            Total Budget in Etherium
          </label>
          <input
            type="text"
            id="totalBudget"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="fundingEndDate"
            className="block mb-2 text-l font-medium text-gray-900 dark:text-white"
          >
            Funding End Date
          </label>
          <input
            type="date"
            id="fundingEndDate"
            value={fundingEndDate}
            onChange={(e) => setFundingEndDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="numMilestones"
            className="block mb-2 text-l font-medium text-gray-900 dark:text-white"
          >
            Number of Milestones for project
          </label>
          <input
            type="number"
            id="numMilestones"
            value={numMilestones}
            onChange={(e) => {
              setNumMilestones(e.target.value);
              setMilestones(
                Array.from({ length: Number(e.target.value) }, () => ({
                  date: "",
                  fundPercentage: "",
                }))
              );
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        {milestones.map((milestone: any, index: any) => (
          <div key={index} className="mb-4 ">
            <label
              htmlFor={`milestoneDate${index}`}
              className="block mb-4 text-l font-medium text-gray-900 dark:text-white"
            >
              Milestone {index + 1} Date
            </label>
            <input
              type="date"
              id={`milestoneDate${index}`}
              value={milestone.date}
              onChange={(e) =>
                handleMilestoneChange(index, "date", e.target.value)
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
            <label
              htmlFor={`milestoneFundPercentage${index}`}
              className="block mb-2 mt-4 text-l font-medium text-gray-900 dark:text-white"
            >
              Milestone {index + 1} Fund Percentage
            </label>
            <input
              type="text"
              id={`milestoneFundPercentage${index}`}
              value={milestone?.fundPercentage}
              onChange={(e) =>
                handleMilestoneChange(index, "fundPercentage", e.target.value)
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addMilestone}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Milestone
        </button>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectCreate;
