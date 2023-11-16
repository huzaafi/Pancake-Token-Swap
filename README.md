# PancakeSwap Token Swap Project Documentation

## Overview

This documentation provides an overview of a token-swapping project that allows users to exchange BUSD (Binance USD) for WBNB (Wrapped BNB) using smart contracts from PancakeSwap, a decentralized exchange on the Binance Smart Chain (BSC).

### Project Components

1. **AbiInfo.js:**
   - Contains ABI (Application Binary Interface) information for smart contracts used in the project.
   - Smart contracts include the ERC-20 standard token contract, PancakeSwap Factory contract, PancakeSwap Pair contract, and PancakeSwap Router contract.

2. **AddressList.js:**
   - Includes addresses for various smart contracts utilized in the project.
   - Addresses include PancakeSwap Factory, PancakeSwap Router, BUSD Token, and WBNB Token.

3. **FetchPrice.js:**
   - Implements the logic to connect with smart contracts, fetch token prices, and perform token swaps.
   - Utilizes the `ethers.js` library for interaction with the Binance Smart Chain (BSC).
   - Connects with the PancakeSwap Factory and Router contracts using their addresses and ABI information.
   - Fetches token prices by interacting with BUSD and WBNB ERC-20 token contracts.
   - Initiates a token swap from BUSD to WBNB using the PancakeSwap Router.

### PancakeSwap Router Usage

[PancakeSwap Smart Router](https://docs.pancakeswap.finance/pancakeswap/pancakeswap-v2/architecture/smart-routes) is employed to facilitate the token swapping process. It utilizes a smart order routing algorithm that connects automated market makers (AMMs) and market makers on the Binance Smart Chain. This algorithm ensures better liquidity and pricing for traders by executing trades across multiple pools to find the best available price.

## AbiInfo.js

- Contains ABI for ERC-20 tokens, PancakeSwap Factory, Pair, and Router contracts.

## AddressList.js

- Includes addresses for PancakeSwap Factory, Router, BUSD Token, and WBNB Token.

## FetchPrice.js

- Utilizes the `ethers.js` library to interact with the Binance Smart Chain.
- Connects with smart contracts using the `ethers.js` library.
- Fetches token prices and initiates a token swap from BUSD to WBNB using PancakeSwap Router.

## Usage

1. **Install Dependencies:**
   - Ensure Node.js and npm are installed on your system.
   - Run `npm install` to install project dependencies.

2. **Run the Token Swap:**
   - Execute `node FetchPrice.js` to initiate the token swap process.
   - View the console output for information on the token swap.

3. **Customization:**
   - Adjust parameters like `BUSD` amount and contract addresses in `FetchPrice.js` as needed.

## Conclusion

This project provides a straightforward approach to swapping tokens on the Binance Smart Chain using PancakeSwap contracts, leveraging the `ethers.js` library for blockchain interaction. Developers can use this as a foundation for more complex decentralized finance (DeFi) projects on the BSC. For further details on PancakeSwap and its features, refer to the [official PancakeSwap documentation](https://docs.pancakeswap.finance/).
