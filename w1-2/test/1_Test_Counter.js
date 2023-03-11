const { expect } = require("chai");
const { ethers } = require("hardhat");



describe("Counter", function () {

    describe("Deployment", function () {
        it("add count", async function(){
            const Counter = await ethers.getContractFactory("Counter");
            const counter = await Counter.deploy();
            const count = await counter.count();
            await counter.add();
            expect(await counter.count()).to.equal(count+1);
        })
        

        it("other account call add", async function(){
            const [ owner, otherAccount ] = await ethers.getSigners();
            const Counter = await ethers.getContractFactory("Counter");
            const counter = await Counter.connect(owner).deploy();
            const count = await counter.count();
            await counter.connect(otherAccount).add();
            expect(await counter.count()).to.equal(count+1);
        });
    });

})