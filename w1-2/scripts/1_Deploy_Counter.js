

async function main() {
    const [owner] = await ethers.getSigners();
    console.log(owner.address);
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    console.log(`npx hardhat verify --network goerli ${counter.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});