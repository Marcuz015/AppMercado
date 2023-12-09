import React, { createContext, useState} from 'react';

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function singIn(email, nome){
        if(email !=='' && nome !==''){
            setUser({
                email: email,
                nome: nome
            })

            navigation.navigate("HomeScreen");
        }
    }
        return(
            <AuthContext.Provider value={{nome: "jota", singIn, user}}>
                {children}
            </AuthContext.Provider>
        )
    
}

export default AuthProvider;