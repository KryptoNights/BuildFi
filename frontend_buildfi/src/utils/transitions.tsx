import { Contract, ethers, JsonRpcProvider } from "ethers";
import { sepolia } from "./config";
import { BUILDFI_ABI } from "../../../abis/BuildFi.abi";
import axios from "axios";

// const sepoliaProvider = new ethers.providers.JsonRpcProvider(
//   "https://arb-sepolia.g.alchemy.com/v2/gdoWsVkAdoopk0ijXAAOtvq-CsXT8PTO"
// );

const sepoliaProvider = new JsonRpcProvider(
  "https://arb-sepolia.g.alchemy.com/v2/gdoWsVkAdoopk0ijXAAOtvq-CsXT8PTO"
);

export async function isKycDone(address: string): Promise<boolean> {
  console.log("in isKycDone");
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  try {
    const result = await buildfi.claims(address);
    if (
      result ===
      "0x0000000000000000000000000000000000000000000000000000000000000000"
    ) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    // console.error("Error creating account:", error);
    return false;
  }
}

export async function vote_operator(
  projectId: number,
  milestoneId: number,
  vote: boolean,
  signer: ethers.Signer
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, signer);
  const vote_through_witness_api =
    "https://us-central1-my-project-5269-1684667148053.cloudfunctions.net/buildfi-vote-casting";
  const vote_intermediate = await axios.post(vote_through_witness_api, {
    address: await signer.getAddress(),
    vote: vote,
    project_id: projectId,
    milestone_id: milestoneId,
  });
  // TODO logic to send data to chain
  console.log("vote_intermediate", vote_intermediate);
}

export async function getAllProjects() {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);
  const projectCount = await buildfi.projectCount();
  const projects = [];
  for (let i = 1; i < projectCount; i++) {
    const project = await buildfi.getProjectInfo(i);
    // console.log("Project:", project);
    projects.push({
      id: Number(project[0]),
      name: project[1],
      image: project[2],
      description: project[3],
      owner: project[4],
      milestone_count: Number(project[5]),
      last_milestone_completed: Number(project[6]),
      milestone_timestamps: project[7].map((e: BigInt) => Number(e)),
      payout_percentages: project[8].map((e: BigInt) => Number(e)),
      total_budget: Number(project[9]),
      total_raised: Number(project[10]),
      investors: project[11].map((e: string) => e),
      project_token: project[12],
      token_set: project[13],
      tokens_commited: Number(project[14]),
      created_at: Number(project[15]),
      started_at: Number(project[16]),
      funding_ends_at: Number(project[17]),
      completed_at: Number(project[18]),
      abandoned: project[19],
      projectCommitted: Number(project[20]),
      projectWrapped: Number(project[21]),
      milestones: project[22].map((e: any) => ({
        id: Number(e[0]),
        voting_active: e[1],
        votes_for: Number(e[2]),
        votes_against: Number(e[3]),
        voting_deadline: Number(e[4]),
      }))
      // milestone_timestamps: project[6],
      // payout_percentages: project[7],
      // milestone_metadata_json: project[8],
    });
  }
  return projects;
}

export async function abondon_project(project_id: number) {
  console.log(project_id);
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.abandon_project(project_id);
  console.log("abondon", result);
}

export async function getDeveloperInfo(address: string) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const info = await buildfi.buildfi_developers(address);
  console.log("Developer info:", info);
}

export async function getProjectInfo(projectId: number) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const info = await buildfi.buildfi_projects(projectId);
  console.log("Project info:", info);
  return info;
}

export async function changeImageId(imageId: string) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.changeImageId(imageId);
  console.log("changeImageId result:", result);
}

export async function claim(address: string) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const claimId = await buildfi.claims(address);
  console.log("Claim ID:", claimId);
}

export async function closeVoting(projectId: number, milestoneId: number) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.close_voting(projectId, milestoneId);
  console.log("close_voting result:", result);
}

export async function createProject(
  name: string,
  image: string,
  description: string,
  metadata: string,
  milestones: number,
  payoutPercentages: number[],
  totalBudget: number,
  fundingEndsAt: number,
  signer: ethers.Signer
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, signer);

  const result = await buildfi.createProject(
    name,
    image,
    description,
    metadata,
    milestones,
    payoutPercentages,
    totalBudget,
    fundingEndsAt
  );
  console.log("createProject result:", result);
}

export async function invest(projectId: number, signer: ethers.Signer) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, signer);

  const result = await buildfi.invest(projectId);
  console.log("invest result:", result);
}

export async function makeNewAccount(
  name: string,
  email: string,
  signer: ethers.Signer
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, signer);
  console.log("makeNewAccount:", name, email, await signer.getAddress());

  const result = await buildfi.makeNewAccount(name, email);
  console.log("makeNewAccount result:", result);
}

export async function getProjectCount() {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const count = await buildfi.projectCount();
  console.log("Project count:", count);
}

export async function reclaimFunds(projectId: number) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.reclaim_funds(projectId);
  console.log("reclaim_funds result:", result);
}

export async function setAndTransferTokens(
  projectId: number,
  projectToken: string
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.set_and_transfer_tokens(projectId, projectToken);
  console.log("set_and_transfer_tokens result:", result);
}

export async function startVoting(
  projectId: number,
  milestoneId: number,
  signer: ethers.Signer
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, signer);

  const result = await buildfi.start_voting(projectId, milestoneId);
  console.log("start voting result:", result);
}

export async function vote(
  projectId: number,
  milestoneId: number,
  vote: boolean,
  signer: ethers.Signer
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.vote(projectId, milestoneId, vote);
  console.log("vote result:", result);
}
