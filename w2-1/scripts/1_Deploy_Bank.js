
async function main() {
    const Bank = await ethers.getContractFactory("Bank");
    const bank = await Bank.deploy();
    console.log(`npx hardhat verify --network goerli ${bank.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});