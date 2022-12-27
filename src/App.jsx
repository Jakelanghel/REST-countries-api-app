import React, { useEffect, useState } from "react";
import { fetchAPI } from "./services/fetchAPI";
import { GlobalStyles } from "./components/shared/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import CardSmall from "./components/card/card-small/SmallCard";
import CardLarge from "./components/card/card-large/CardLarge";
import ContainerCards from "./components/card/container-cards/ContainerCards";

import { AnimatePresence } from "framer-motion";
function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [bordersNames, setBordersNames] = useState([]);

  const appTheme = isDark ? theme.dark : theme.light;

  const toggleTheme = () => setIsDark((oldState) => !oldState);

  useEffect(() => {
    fetchAPI("region/americas")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  const cardElements =
    countriesData.length > 1
      ? countriesData.map((country) => (
          <CardSmall
            name={country.name.official}
            flagImg={country.flags.svg}
            pop={country.population}
            reg={country.region}
            cap={country.capital}
            key={country.cca2}
          />
        ))
      : countriesData.map((country) => {
          const names = Object.values(country.name.nativeName);
          const nativeName = names[names.length - 1].common;

          let currencies = Object.values(country.currencies);
          currencies = Object.values(currencies[0]);
          const currency = currencies[0];

          const languages = Object.values(country.languages);

          const borders =
            country.borders.length > 3
              ? country.borders.slice(0, 3)
              : country.borders;

          return (
            <CardLarge
              name={country.name.common}
              nativeName={nativeName}
              flagImg={country.flags.svg}
              pop={country.population}
              reg={country.region}
              subReg={country.subregion}
              cap={country.capital}
              tld={country.tld[0]}
              currencies={currency}
              languages={languages.toString()}
              borders={bordersNames}
              key={country.cca2}
              setData={setCountriesData}
            />
          );
        });

  // console.log(bordersNames);

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <AnimatePresence>
          {cardElements.length > 1 ? (
            <>
              <Header onClick={toggleTheme} />
              <Form setData={setCountriesData} setBorders={setBordersNames} />
              <ContainerCards className="side-padding">
                {cardElements}
              </ContainerCards>
            </>
          ) : (
            <>
              <Header onClick={toggleTheme} />
              <ContainerCards className="side-padding">
                {cardElements}
              </ContainerCards>
            </>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
