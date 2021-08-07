import './Country.css'
import {Link} from "react-router-dom";
const Country= ({country})=> {
 const { population ,region,capital,flag,name} = country;
    return (
      <Link to={`country/${name.toLowerCase()}`}>
        <main className="country-con">
          <div className="img-con">
            <img src={flag} alt={name}/>
          </div>
          <article className="country-info">
            <h2>{name}</h2>
            <p>
              <span>population:</span>
              {population}
            </p>
            <p>
              <span>Region:</span>
              {region}
            </p>
            <p>
              <span>Capital:</span>
              {capital}
            </p>
          </article>
        </main>
      </Link>
    );
}

export default Country
