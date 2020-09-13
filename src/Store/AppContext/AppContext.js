import React, {createContext} from 'react';
import { useTheme } from '@material-ui/core/styles';

export const AppContext = createContext();


const AppContextProvider = (props) => {
    const theme = useTheme();
    return (
        <AppContext.Provider value={{...theme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
