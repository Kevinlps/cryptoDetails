import { createContext, ReactNode, useState } from "react";

type UserContextType = {
    vsCurrency: string
    setVsCurrency: (newState:string)=> void
}

const initialValue: UserContextType = {
    vsCurrency: 'jpy',
    setVsCurrency: ()=>{},
}

export const UserContext = createContext<UserContextType>(initialValue)

type UserContextProps = { children: ReactNode}

export const UserContextprovider = ({ children }:UserContextProps)=>{
    const [vsCurrency , setVsCurrency] = useState(initialValue.vsCurrency)

    return (
        <UserContext.Provider value={{vsCurrency , setVsCurrency}}>
            {children}
        </UserContext.Provider>
    )
}