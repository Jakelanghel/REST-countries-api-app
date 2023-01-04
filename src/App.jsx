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

  const getBorderNames = (borders) => {
    borders = borders.length > 3 ? borders.slice(0, 3) : borders;
    borders.forEach((name) => {
      fetchAPI(`name/${name}`)
        .then((res) => res.json())
        .then((data) => {
          setBordersNames((oldState) => [...oldState, data[0].name.common]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const searchByCountry = (e, ref) => {
    ref = ref.toLowerCase();
    e.preventDefault();
    setBordersNames([]);
    const filter = `name/${ref}`;
    fetchAPI(filter)
      .then((res) => res.json())
      .then((data) => {
        const borders = data[0].borders ? data[0].borders : false;
        borders ? getBorderNames(borders) : null;
        setCountriesData([data[0]]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAPI("all")
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
            name={country.name.official}
            flagImg={country.flags.svg}
            pop={country.population}
            reg={country.region}
            cap={country.capital}
            handleClick={searchByCountry}
          />
        ))
      : countriesData.map((country) => {
          return (
            <CardLarge
              key={country.cca2}
              name={country.name.official}
              setData={setCountriesData}
              nativeNames={country.name.nativeName}
              currencies={country.currencies}
              languages={country.languages}
              flagImg={country.flags.svg}
              pop={country.population}
              reg={country.region}
              subReg={country.subregion}
              cap={country.capital}
              tld={country.tld[0]}
              borders={bordersNames}
              search={searchByCountry}
            />
          );
        });

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <AnimatePresence>
          {cardElements.length > 1 ? (
            <main>
              <Header onClick={toggleTheme} />
              <Form
                setData={setCountriesData}
                setBorders={setBordersNames}
                search={searchByCountry}
              />
              <ContainerCards className="side-padding">
                {cardElements}
              </ContainerCards>
            </main>
          ) : (
            <main>
              <Header onClick={toggleTheme} />
              <ContainerCards className="side-padding">
                {cardElements}
              </ContainerCards>
            </main>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
