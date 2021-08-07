import {useEffect,useState} from 'react';
import {Link,useParams} from "react-router-dom";
import './CountryScreen.css';
import {useGlobalContext} from '../Context'

const CountryScreen = () =>{
  const {setLoading} = useGlobalContext();
  const {name} = useParams();
  const url = `https://restcountries.eu/rest/v2/name/`;
  const [country,setCountry] = useState([]);
const fetchCountry = async()=>{

  try {
    const response = await fetch(url + name.toLowerCase());
    const  data = await response.json();
    setCountry(data);
  setLoading(false);

  } catch (error) {
    console.log(error);
  }  
}
useEffect(()=>{

  fetchCountry();

},[name])
  
    return (
      <main className="country-screen">
        <div className="btn-con">
          <Link to="/">
            <button>
              <span>
             <i className='fas fa-arrow-left'></i>
              </span>
              back
            </button>
          </Link>
        </div>
        {country && country.map((countryDetails,i)=>{
          const {
            flag,
            nativeName,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            borders,
            population,
            languages,
            alpha2Code
          } = countryDetails;
          return (
            <section className="grid-con" key={alpha2Code}>
              <div className="image-con">
                <img src={flag} alt={name} />
              </div>
              <div className="country-info-con">
                <h4>
                  <span>Country Name: </span> {name}
                </h4>
                <p>
                  <span>Native Name:</span> {nativeName}
                </p>
                <p>
                  <span>Population:</span> {population}
                </p>
                <p>
                  <span>Region:</span> {region}
                </p>
                <p>
                  <span>Sub Region:</span> {subregion}
                </p>
                <p>
                  <span>Capital:</span> {capital}
                </p>
              </div>
              <div className="level-con">
                <p>
                  <span>Top Level Domain:</span>
                  {topLevelDomain}
                </p>
                <div>
                  <span>Currencies:</span>
                  {currencies && currencies.map((currency,i)=>{
                    return <p key={i}>{currency.name}</p>
                  })}
                </div>
                <div>
                  <span>Languages:</span>
                  {languages && languages.map((language,i)=>{
                    return <p key={i}>{language.name}</p>
                  }) }
                </div>
              </div>
              <div className="border-countries-con">
                <span>Border Countries:</span>
                <div className="border-btn-con">
                 
                  {borders.length>0 ? borders.map((border,i)=>{
                return (
                  <Link to={`/code/${border.toLowerCase()}`}>
                    <button key={i}>{border}</button>
                  </Link>
                );
              }):null}
                </div>
              </div>
            </section>
          );
        })}
       
      </main>
    );
}

export default CountryScreen
