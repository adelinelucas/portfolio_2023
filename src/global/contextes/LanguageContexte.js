import React, {useContext, useState} from'react';

const LanguageContext = React.createContext();

export const LanguageProvider = ({children}) =>{

    const [languageEng,setLanguageEng] = useState(false);

    return (
        <LanguageContext.Provider value={{
            languageEng,
            setLanguageEng
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext= () =>{
    return useContext(LanguageContext);
}