//https://mochajs.org/
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers")
const { expect } = require("chai")
const { ethers } = require("hardhat") //ethers connects to the blockchain

const { string } = require("hardhat/internal/core/params/argumentTypes")

const { deployTokenFixture } = require("./helpers/TokenFixtures")
/*
async function deployTokenFixture() {
    const Token = await ethers.getContractFactory("Token")
    //  interact with the deployed Token on Blockchain

    const token = await Token.deploy("Dapp Token", "Dapp", "1000000")
    //we wait for the contract to be deployed         

    return { token }
}
    */

const tokens = (n) => {
    return ethers.parseUnits(n.toString(), 18);
}

describe("My ERC 20 token Token", () => {
    //describe ===> desciption of the test



    it("has correct name", async () => {
        // it => we write the test itself



        /*
              const Token = await ethers.getContractFactory("Token")
    //  interact with the deployed Token on Blockchain

    const token = await Token.deploy()
    //we wait for the contract to be deployed  


        */

        const { token } = await loadFixture(deployTokenFixture)

        //const name = await token.name()

        console.log("Token name is :", await token.name())

        expect(await token.name()).to.equal("Dapp Token")

    })

    it("has correct symbol", async () => {
        // it => we write the test itself

        // const Token = await ethers.getContractFactory("Token")
        //  interact with the deployed Token on Blockchain

        // const token = await Token.deploy()
        //we wait for the contract to be deployed

        const { token } = await loadFixture(deployTokenFixture)

        // const symbol = await token.symbol()

        console.log("Token symbol is :", await token.symbol())

        expect(await token.symbol()).to.equal("Dapp")

    })

    it("has correct decimals", async () => {
        // it => we write the test itself

        // const Token = await ethers.getContractFactory("Token")
        //  interact with the deployed Token on Blockchain

        // const token = await Token.deploy()
        //we wait for the contract to be deployed

        const { token } = await loadFixture(deployTokenFixture)

        // const symbol = await token.symbol()

        console.log("Token decimals is :", (await token.decimals()).toString())

        expect(await token.decimals()).to.equal(18)

    })

    it("has correct Total Supply", async () => {
        // it => we write the test itself

        // const Token = await ethers.getContractFactory("Token")
        //  interact with the deployed Token on Blockchain

        // const token = await Token.deploy()
        //we wait for the contract to be deployed

        const { token } = await loadFixture(deployTokenFixture)

        // const symbol = await token.symbol()

        console.log("Token Total supply is :", (await token.totalSupply()).toString())

        // const tokens = ethers.parseUnits("1000000", 18);

        expect(await token.totalSupply()).to.equal(tokens("1000000"))
        // faire n.toString() ne pose aucun problème : c'est redondant mais inoffensif.

        // expect(await token.totalSupply()).to.equal("1000000000000000000000000")

    })
})
