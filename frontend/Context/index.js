'use client'

import { config, publicClient } from '@/app/_app';
import React, { createContext, useContext, useState } from 'react';
import { formatEther, getAddress } from 'viem';
import { useBalance } from 'wagmi';
// import { getAccount } from '@wagmi/core'
import { useAccount } from 'wagmi';
import { readContract } from '@wagmi/core'
import { ERC20Generator_ABI, ERC20Generator_Address } from './constants';


// Create a Context
const StateContext = createContext();

// Create a Provider component
export const StateContextProvider = ({ children }) => {
    const [state, setState] = useState({}); // Replace with your initial state
    const { address, isConnected } = useAccount();
    console.log('Account', address);
    
    // const account = getAccount(config)
    // console.log("Account",account.address)
    const { data: currentUserBalance, isError: isErrorBalance, isLoading: balanceIsLoading } = useBalance({
        address: address,
    })

    // Debug logs
    if (isConnected) {
        console.log('Address:', address);
        console.log("balanceIsLoading", balanceIsLoading, "isErrorBalance", isErrorBalance)
        if (!balanceIsLoading && !isErrorBalance) {
            console.log('Balance:', currentUserBalance?.formatted || 'Balance not fetched');
        }
    } else {
        console.log('No wallet connected.');
    }


    // --01---------------------------------------
    // Contract read function
    // Contract read function    
    const nativeContract = async (address_) => {
        if (!address) {
            console.log('No wallet connected to fetch contract details.');
            return null;
        }
    
        try {
            // Read contract data
            const _name = await publicClient.readContract({
                address: ERC20Generator_Address,
                abi: ERC20Generator_ABI,
                functionName: 'name',
            });
    
            const _symbol = await publicClient.readContract({
                address: ERC20Generator_Address,
                abi: ERC20Generator_ABI,
                functionName: 'symbol',
            });
    
            const _decimals = await publicClient.readContract({
                address: ERC20Generator_Address,
                abi: ERC20Generator_ABI,
                functionName: 'decimals',
            });
    
            const _totalSupply = await publicClient.readContract({
                address: ERC20Generator_Address,
                abi: ERC20Generator_ABI,
                functionName: 'totalSupply',
            });

            const totalSupplyInEther = formatEther(_totalSupply);

            const _tokenBalance = await publicClient.readContract({
                address: ERC20Generator_Address,
                abi: ERC20Generator_ABI,
                functionName: 'balanceOf',
                args: [address_],
            });

            const tokenBalance = formatEther(_tokenBalance);
            console.log("Token balance for teh user", tokenBalance);

            // Log token details
            console.log('Token Name:', _name);
            console.log('Token Symbol:', _symbol);
            console.log('Token Decimals:', _decimals);
            console.log('Total Supply:', _totalSupply);
            console.log('Total Supply in Ether:', totalSupplyInEther);
            console.log('Token Balance:', tokenBalance);
    
            return {
                name: _name,
                symbol: _symbol,
                decimals: _decimals,
                totalSupply: _totalSupply,
                totalSupplyInEther: totalSupplyInEther,
                address: ERC20Generator_Address,
                tokenBalance: tokenBalance
            };
        } catch (error) {
            console.error('Error fetching token details:', error);
            return null;
        }
    };

    // Testing `tokenSupply` function
    (async () => {
        const nativeContract_ = await nativeContract(address);
        console.log("Fetched tokenSupply_:", nativeContract_);
    })();
    // -------------------------------------------



    return (
        <StateContext.Provider value={{ state, setState }}>
            {children}
        </StateContext.Provider>
    );
};

// Create a custom hook for easier consumption of the context
export const useERC20Context = () => {
    return useContext(StateContext);
};
