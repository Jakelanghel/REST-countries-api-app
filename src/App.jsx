import React, { useEffect, useState } from "react";
import { fetchAPI } from "./services/fetchAPI";
import { GlobalStyles } from "./components/shared/Global";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header/Header";
import Form from "./components/form/Form";
import CardSmall from "./components/card/card-small/SmallCard";
import CardLarge from "./components/card/card-large/CardLarge";
import ContainerCards from "./components/card/container-cards/ContainerCards";

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cardElements =
    countriesData.length > 1
      ? countriesData.map((country) => (
          <CardSmall
            key={country.cca2}
            setCountry={setCountriesData}
            setBorders={setBordersNames}
            name={country.name.official}
            flagImg={country.flags.svg}
            pop={country.population}
            reg={country.region}
            cap={country.capital}
          />
        ))
      : countriesData.map((country) => {
          return (
            <CardLarge
              key={country.cca2}
              setData={setCountriesData}
              setBorders={setBordersNames}
              country={country}
              flagImg={country.flags.svg}
              pop={country.population}
              reg={country.region}
              subReg={country.subregion}
              cap={country.capital}
              tld={country.tld[0]}
              borders={bordersNames}
            />
          );
        });

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
