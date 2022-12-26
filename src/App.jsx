import React, { useEffect, useState } from "react";
import { fetchAPI } from "./services/fetchAPI";
import { GlobalStyles } from "./components/shared/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import ContainerCards from "./components/card/container-cards/ContainerCards";

import { AnimatePresence } from "framer-motion";
function App() {
  const [countriesData, setCountriesData] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const appTheme = isDark ? theme.dark : theme.light;

  const toggleTheme = () => setIsDark((oldState) => !oldState);

  useEffect(() => {
    fetchAPI("region/americas")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  console.log(countriesData);

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
        <AnimatePresence mode="wait">
          {countriesData ? (
            <ContainerCards className="side-padding" key={countriesData.length}>
              {cardElements}
            </ContainerCards>
          ) : null}
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
