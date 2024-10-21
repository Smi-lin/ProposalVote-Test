import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProposalVoteModule = buildModule("ProposalVoteModule", (p) => {
  const proposalVote = p.contract("ProposalVote");

  return { proposalVote };
});

export default ProposalVoteModule;

// ProposalVoteModule#ProposalVote - 0x5D691ce512CC735acAe814e0dA67429085bFd7b0

// - https://sepolia.basescan.org/address/0x957d8dc14A1bD57Ab44277dffD4ccC79d7c33452#code