import './Countries.css';
import Country from './Country';
import Search from "./Search";
import {useGlobalContext} from '../Context';
const Countries=() =>{
 const {countries} = useGlobalContext(); 

    return (
      <div className="countries">
        <Search />
        <div className="countries-con">
          
              {countries.map((country)=>{
                const{alpha2Code} = country;
                return (<Country key={alpha2Code} country={country}/>)
              })}
    
        </div>
      </div>
    );
}

export default Countries
