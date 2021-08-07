
import React, {useContext,useEffect,useState} from 'react'
const url = `https://restcountries.eu/rest/v2/all`;
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
   
  const getModefromLocaleStorage = localStorage.getItem("Mode")
    ? JSON.parse(localStorage.getItem("Mode"))
    : [];
  // States
    const [countries,setCountries] = useState([]);
    const [darkMode,setDarkMode] = useState(getModefromLocaleStorage);
    const [loading,setLoading]= useState(true);
    const [searchTerm,setSearchTerm] = useState('a');
    const [filterTerm,setFilterTerm] = useState('africa');
    
     const setModeToLocaleStorage = localStorage.setItem(
       "Mode",
       JSON.stringify(darkMode)
     );
    // Functionalities
    const toggleTheme= ()=>{
      setDarkMode(!darkMode);
    }
  

  

    // Fetching the countries
 const fetchCountries = async()=>{
try {
        const response = await fetch(url);
        const countries = await response.json();
        ;
        setCountries(countries); 
        setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
 }
 

useEffect(()=>{
    
    fetchCountries();

},[])
  return (
    <AppContext.Provider
      value={{
        countries,
        setDarkMode,
        darkMode,
        toggleTheme,
        loading,
        setLoading,
        setSearchTerm,
        searchTerm,
        setFilterTerm,
        filterTerm,
        setCountries
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
