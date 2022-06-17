import { network } from "hardhat"

export async function moveTime(amount: number) {
    console.log(`Moving ${amount} time...`)
    await network.provider.send("evm_increaseTime", [amount])
    console.log("Time travel complete!")
}