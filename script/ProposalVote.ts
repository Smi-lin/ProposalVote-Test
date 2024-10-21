import hre from "hardhat";

async function main() {
  const PROPOSALVOTE_CONTRACT = "0x957d8dc14A1bD57Ab44277dffD4ccC79d7c33452";

  const proposalAcct = "0xac9535B43e7f652344A158FaB8e44472A1070299";

  const otherAccount = "0x6Db691950c09b2025855B3166D14EbAF1F6E8ba9";

  const signer = await hre.ethers.getSigner(proposalAcct);

  const signers = await hre.ethers.getSigner(otherAccount);

  const proposalVoteInstance = await hre.ethers.getContractAt(
    "ProposalVote",
    PROPOSALVOTE_CONTRACT
  );

  //Begining of script writing proposal

  console.log(
    "############################ Creating proposal ####################"
  );

  const createProposalVoteTx1 = await proposalVoteInstance
    .connect(signer)
    .createProposal("Hello Everyone", "From Web 3", "1");

  createProposalVoteTx1.wait();

  console.log({
    "proposal created 1 deployed successfully to": createProposalVoteTx1,
  });

  const createProposalVoteTx2 = await proposalVoteInstance
    .connect(signer)
    .createProposal("Hello guys", "From Dlt Africa", "2");

  createProposalVoteTx2.wait();

  console.log({
    "proposal created 2 deployed successfully to": createProposalVoteTx2,
  });
  

  console.log(
    "############################ Voting on proposal ####################"
  );

  const voteProposalVoteTx1 = await proposalVoteInstance
    .connect(signer)
    .voteOnProposal(0);

  voteProposalVoteTx1.wait();

  console.log({
    "proposal voted 1 deployed successfully to": createProposalVoteTx1,
  });

  console.log(
    "############################ Get info from proposal ####################"
  );

  const getProposalVote = await proposalVoteInstance
    .connect(signer)
    .getProposal(0);

  console.table(getProposalVote);
}

main().catch((error) => {
  console.error();
  process.exitCode = 1;
});
