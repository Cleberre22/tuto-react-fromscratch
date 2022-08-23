import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Country = () => {
  const { country } = useParams();
  console.log(country);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/" + country)
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div>
         <Logo />
            <Navigation />
      {countries.map((country, index) => (
        <div key={index}>
          <img
            src={country.flags.svg}
            alt={"drapeau " + country.translations.fra.common}
          />
          <p>Nom du pays: {country.translations.fra.common}</p>
          <p>Langue: {country.languages.fra}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Capital: {country.capital}</p>
          <p>Continent: {country.region}</p>
          <p>Superficie: {country.area.toLocaleString()}</p>
          <p>Pays frontalier: {"" + country.borders}</p>
       
        </div>
      ))}
    </div>
    
  );
};

export default Country;
