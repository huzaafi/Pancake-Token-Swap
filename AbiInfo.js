// With decimal() function we can determine the decimal of token 
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
const erc20ABI = ["function decimals() public view returns (uint8)"]

// get it form PancakeFactory Address. We use this to find the liquidity Pool address of pair coin. 
// we past the addresses of tokens in this this function and get the PancakePair Address
const factoryABI = ["function getPair(address tokenA, address tokenB) external view returns (address pair)"]

// get it from PancakePair address code. 
const pairABI = [
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
    "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)"
]

// get it from PancakeRouter address code
const routerABI = [" function getAmountsOut(uint amountIn, address[] memory path)public view returns (uint[] memory amounts)"]

module.exports = {
    erc20ABI,
    factoryABI,
    pairABI,
    routerABI
}