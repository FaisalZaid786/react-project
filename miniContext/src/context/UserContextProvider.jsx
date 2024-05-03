
import React, {createContext } from "react";

 export const userContext = createContext();

const StoreProvider  = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <userContext.Provider value={{user, setUser}} >
            {children}
        </userContext.Provider>
    )
}

export default StoreProvider;