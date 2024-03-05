import React, {useContext, useState} from'react';

const LanguageContext = React.createContext();

export const LanguageProvider = ({children}) =>{

    const [languageEng,setLanguageEng] = useState(false);
    const [emitScrollEvent, setEmitScrollEvent] = useState(false)

    return (
        <LanguageContext.Provider value={{
            languageEng,
            setLanguageEng,
            emitScrollEvent, 
            setEmitScrollEvent
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext= () =>{
    return useContext(LanguageContext);
}