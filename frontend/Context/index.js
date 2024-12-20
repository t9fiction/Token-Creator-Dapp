'use client'

import React, { createContext, useContext, useState } from 'react';

// Create a Context
const ERC20Context = createContext();

// Create a Provider component
export const ERC20Provider = ({ children }) => {
    const [state, setState] = useState({}); // Replace with your initial state

    return (
        <ERC20Context.Provider value={{ state, setState }}>
            {children}
        </ERC20Context.Provider>
    );
};

// Create a custom hook for easier consumption of the context
export const useERC20Context = () => {
    return useContext(ERC20Context);
};
