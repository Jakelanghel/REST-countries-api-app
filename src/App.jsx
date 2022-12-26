import React, { useEffect, useState } from "react";
import { fetchAPI } from "./services/fetchAPI";
import { GlobalStyles } from "./components/shared/Global";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Card from "./components/card/Card";

function App() {
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    fetchAPI("region/ame")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  const cardElements = countriesData
    ? countriesData.map((country) => (
        <Card
          name={country.name.official}
          flagImg={country.flags.svg}
          pop={country.population}
          reg={country.region}
          cap={country.capital}
          key={country.cca2}
        />
      ))
    : null;

  return (
    <>
      <GlobalStyles />
      <Header />
      <Form setData={setCountriesData} />

      <div className="side-padding">{cardElements}</div>
    </>
  );
}

export default App;
