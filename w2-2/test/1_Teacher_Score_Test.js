const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { expect } = require("chai");
describe("Teacher", function () {


    async function deployTeacherFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();
    
        const Score = await ethers.getContractFactory("Score");
        const score = await Score.deploy();

        const Teacher = await ethers.getContractFactory("Teacher");
        const teacher = await Teacher.deploy(score.address);

        await score.setTeacher(teacher.address);
        return { score, teacher, owner, otherAccount };
      }
    
    describe("Deployment And Test", function(){
        it("Add Score", async function () {
            const { teacher, score, otherAccount } = await loadFixture(deployTeacherFixture);
            await teacher.updateStudentScore(otherAccount.address, 98);
            expect(await score.scores(otherAccount.address)).to.equal(98);
        });


        it("Update Score", async function () {
            const { teacher, score, otherAccount } = await loadFixture(deployTeacherFixture);
            await teacher.updateStudentScore(otherAccount.address, 97);
            expect(await score.scores(otherAccount.address)).to.equal(97);
        });

        it("OtherAccount Call Fail", async function(){
            const { score, otherAccount } = await loadFixture(deployTeacherFixture);
            await expect(score.connect(otherAccount).updateScore(otherAccount.address, 100)).to.be.revertedWith(
                "Not Teacher"
            );
        });
    })
})