import React, { useContext, useState } from 'react';

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('1');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = async () => {
        setLoading(true)
        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            const {drinks} = data;
            if(drinks){

            }
            else{
                setCocktails([])
            }
             setLoading(false);
        }  catch (error){
            console.log(error)
            setLoading(false)
        }
    }

useEffect(() => {
    fetchDrinks();
},[searchTerm])

    return(
       <AppContext.Provider value={{ loading, searchTerm,cocktails, setSearchTerm}}>
          {children}
       </AppContext.Provider> 
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }




































