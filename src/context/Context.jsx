import { createContext } from "react";
import runChat from "../config/baffle-ct";

export const Context = createContext();
const ContextProvider = (props)=>{

    const onSent = async(prompt)=>{
        await runChat(prompt)
    }

    onSent("what is react")
    const contextValue={

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider