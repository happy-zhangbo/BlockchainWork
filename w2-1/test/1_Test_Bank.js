const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");



describe("Bank", function () {

    describe("Deployment", function () {
        it("transfer", async function(){
            const Bank = await ethers.getContractFactory("Bank");
            const bank = await Bank.deploy();
            
            const [ owner ] = await ethers.getSigners();
            // const network = await ethers.providers.getNetwork("localhost")

            const provider = ethers.provider;
            // console.log(provider);
            const balance  = await provider.getBalance(owner.address)

            await owner.sendTransaction({
                to: bank.address,
                value: 100000000
            })
        
            console.log(await provider.getBalance(bank.address))
            console.log(await bank.balance(owner.address))
            await bank.withdraw();
            console.log(await bank.balance(owner.address))
        })
    
    });

})