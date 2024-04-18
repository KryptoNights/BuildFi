import { Contract, ethers, JsonRpcProvider } from "ethers";
import { sepolia } from "./config";
import { BUILDFI_ABI } from "../../../abis/BuildFi.abi";

// const sepoliaProvider = new ethers.providers.JsonRpcProvider(
//   "https://arb-sepolia.g.alchemy.com/v2/gdoWsVkAdoopk0ijXAAOtvq-CsXT8PTO"
// );

const sepoliaProvider = new JsonRpcProvider(
  "https://arb-sepolia.g.alchemy.com/v2/gdoWsVkAdoopk0ijXAAOtvq-CsXT8PTO"
);

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
  metadata: string,
  milestones: number,
  payoutPercentages: number[],
  totalBudget: number,
  fundingEndsAt: number
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.createProject(
    name,
    metadata,
    milestones,
    payoutPercentages,
    totalBudget,
    fundingEndsAt
  );
  console.log("createProject result:", result);
}

export async function getImageId() {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const imageId = await buildfi.imageId();
  console.log("Image ID:", imageId);
}

export async function invest(projectId: number) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.invest(projectId);
  console.log("invest result:", result);
}

export async function makeNewAccount(
  name: string,
  email: string,
  signer: any
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, signer);

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

export async function startVoting(projectId: number, milestoneId: number) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.start_voting(projectId, milestoneId);
  console.log("start voting result:", result);
}

export async function verificationCallback(
  sender: string,
  claimId: string,
  postStateDigest: string,
  seal: string
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.verificationCallback(
    sender,
    claimId,
    postStateDigest,
    seal
  );
  console.log("verificationCallback result:", result);
}

export async function verifier() {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const verifierAddress = await buildfi.verifier();
  console.log("Verifier address:", verifierAddress);
}

export async function vote(
  projectId: number,
  milestoneId: number,
  vote: boolean
) {
  const buildfi = new Contract(sepolia.buildfi, BUILDFI_ABI, sepoliaProvider);

  const result = await buildfi.vote(projectId, milestoneId, vote);
  console.log("vote result:", result);
}
