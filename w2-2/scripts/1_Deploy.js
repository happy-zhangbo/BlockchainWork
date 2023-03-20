
async function main() {
    const [owner, otherAccount] = await ethers.getSigners();
    
        const Score = await ethers.getContractFactory("Score");
        const score = await Score.deploy();

        const Teacher = await ethers.getContractFactory("Teacher");
        const teacher = await Teacher.deploy(score.address);

        await score.setTeacher(teacher.address);

        console.log(`npx hardhat verify --network goerli ${score.address}`);

        console.log(`npx hardhat verify --network goerli ${teacher.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});