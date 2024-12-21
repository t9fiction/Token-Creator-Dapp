'use client'

import { config } from '@/app/_app';
import React, { createContext, useContext, useState } from 'react';
import { getAddress } from 'viem';
import { useBalance } from 'wagmi';
// import { getAccount } from '@wagmi/core'
import { useAccount } from 'wagmi';



// Create a Context
const StateContext = createContext();

// Create a Provider component
export const StateContextProvider = ({ children }) => {
    const [state, setState] = useState({}); // Replace with your initial state
    // const account = getAccount(config)
    const { address, isConnected } = useAccount();
    console.log('Account', address);

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
