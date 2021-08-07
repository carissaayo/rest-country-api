import './Search.css';
import {useGlobalContext} from '../Context';
import { useEffect,useCallback } from 'react';
const url = `https://restcountries.eu/rest/v2/region/`;



const Search=() =>{
const {setSearchTerm,setFilterTerm, filterTerm, setCountries,countries,searchTerm,loading,setLoading} = useGlobalContext();

 const fetchByRegion = useCallback( async ()=>{
  try {
     const response = await fetch(url
      + filterTerm.toLowerCase());
     const  filteredList = await response.json();
     setCountries(filteredList)
   
  } catch (error) {
    console.log(error);

  }
 },[filterTerm])
 
 useEffect(()=>{
   

  fetchByRegion();
 
 },[filterTerm,fetchByRegion])

 useEffect(()=>{

const newData = countries.filter((country,i)=>{
  return country.name.includes(searchTerm)
});
setCountries(newData)
 },[searchTerm])

    return (
      <section className="search-con">
        <div className="search-input-con">
          <div className="img-con">
            <i className='fas fa-search-location'></i>
          </div>
          <input
            placeholder="search for a country.."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="search-by-filter">
          <select
            name="regions"
            id="regions"
            onClick={(e) => {
              setFilterTerm(e.target.value);
            }}
          >
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option defaultValue="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );
}

export default Search
