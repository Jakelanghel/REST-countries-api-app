import React, { useEffect, useState } from "react";
import { fetchAPI } from "./services/fetchAPI";
import { GlobalStyles } from "./components/shared/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Card from "./components/card/Card";

function App() {
  const [countriesData, setCountriesData] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const appTheme = isDark ? theme.dark : theme.light;

  const toggleTheme = () => setIsDark((oldState) => !oldState);

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
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />

        <Header onClick={toggleTheme} />
        <Form setData={setCountriesData} />

        <div className="side-padding">{cardElements}</div>
      </ThemeProvider>
    </>
  );
}

export default App;
