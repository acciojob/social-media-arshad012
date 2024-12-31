import React, { createContext, useState } from "react";

export const RefreshContext = createContext();

export const RefreshContextProvider = ({children}) => {
    const [refreshButtonDisabled, setRefreshButtonDisabled] = useState(true);
    const [clickCount, setClickCount] = useState(0);

    const getNotifications = () => {
        setClickCount(prev => prev+1);
    }

    return (
        <RefreshContext.Provider 
            value={{
                    refreshButtonDisabled, 
                    setRefreshButtonDisabled, 
                    getNotifications, 
                    clickCount,
                }}>
            {children}
        </RefreshContext.Provider>
    )
}