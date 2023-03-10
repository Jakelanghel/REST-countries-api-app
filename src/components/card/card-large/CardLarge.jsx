import React, { useRef } from "react";
import { fetchAPI } from "../../../services/fetchAPI";
import { StyledLargeCard } from "../card-large/CardLarge.Styled";

const CardLarge = (props) => {
  const btnRef = useRef();
  const getNativeName = () => {
    const names = Object.values(props.nativeNames);
    const nativeName = names[names.length - 1].common;
    return nativeName;
  };

  const getCurrencies = () => {
    let currencies = Object.values(props.currencies);
    currencies = Object.values(currencies[0]);
    const currency = currencies[0];
    return currencies;
  };

  const getLanguage = () => {
    return Object.values(props.languages);
  };

  const back = () => {
    fetchAPI("region/americas")
      .then((res) => res.json())
      .then((data) => {
        props.setData(data);
      });
  };

  const handleBtnClick = (e) => {
    const name = btnRef.current.textContent;
    props.search(e, name);
  };

  const borderButtons = props.borders.map((border) => (
    <button
      className="border-btn"
      key={border}
      ref={btnRef}
      onClick={handleBtnClick}
    >
      {border}
    </button>
  ));

  const nativeName = getNativeName();
  const currency = getCurrencies();
  const language = getLanguage();

  return (
    <StyledLargeCard>
      <button className="back-btn" onClick={back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="back-arrow"
        >
          <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" />
        </svg>
        Back
      </button>

      <div className="container-row">
        <div className="container-img">
          <img
            src={props.flagImg}
            alt={`flag of the ${props.name}`}
            className="flag-img"
          />
        </div>

        <div className="container-col">
          <div className="container-row">
            <div className="container-stats">
              <h2>{props.name}</h2>
              <p className="population">
                Native name: <span>{nativeName}</span>
              </p>
              <p className="population">
                Population: <span>{props.pop.toLocaleString("en-US")}</span>
              </p>
              <p className="sub-region">
                Sub Region: <span>{props.subReg}</span>
              </p>
              <p className="region">
                Region: <span>{props.reg}</span>
              </p>
              <p className="capital">
                Capital: <span>{props.cap}</span>
              </p>
            </div>

            <div className="container-stats mar-tp">
              <p className="domain">
                Top Level Domain: <span>{props.tld}</span>
              </p>
              <p className="domain">
                Currencies: <span>{currency[0]}</span>
              </p>
              <p className="domain">
                Language: <span>{language}</span>
              </p>
            </div>
          </div>
          {props.borders.length >= 1 ? (
            <div className="container-border">
              <h3>Border Countries:</h3>
              <div className="container-border-btns">{borderButtons}</div>
            </div>
          ) : null}
        </div>
      </div>
    </StyledLargeCard>
  );
};

export default CardLarge;
