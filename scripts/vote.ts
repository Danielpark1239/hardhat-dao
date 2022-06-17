import { developmentChains, proposalsFile, VOTING_PERIOD } from "../helper-hardhat-config"
import * as fs from "fs"
// @ts-ignore
import { network, ethers } from "hardhat"
import { moveBlocks } from "../utils/move-blocks"

const index = 0

export async function vote(proposalIndex: number) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"))
    const proposalId = proposals[network.config.chainId!][proposalIndex]
    // 0  = against, 1 = for, 2 = abstain
    const voteWay = 1
    const governor = await ethers.getContract("GovernorContract")
    const reason = "It's a cool number!"
    const voteTxResponse = await governor.castVoteWithReason(proposalId, voteWay, reason)
    await voteTxResponse.wait(1)

    if (developmentChains.includes(network.name)) {
        await moveBlocks(VOTING_PERIOD + 1)
    }
    console.log("Vote cast!")
}

vote(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })