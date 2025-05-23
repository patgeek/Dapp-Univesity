async function deployTokenFixture() {
    const Token = await ethers.getContractFactory("Token")
    //  interact with the deployed Token on Blockchain

    const token = await Token.deploy("Dapp Token", "Dapp", "1000000")
    //we wait for the contract to be deployed         

    return { token }
}

module.exports = {
    deployTokenFixture
}