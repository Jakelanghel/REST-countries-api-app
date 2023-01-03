import React, { useRef } from "react";
import { StyledSmallCard } from "./SmallCard.Styled";
import { fetchAPI } from "../../../services/fetchAPI";

const Card = (props) => {
  const nameRef = useRef();

  const onClick = (e) => {
    const name = nameRef.current.textContent;
    fetchAPI(`name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        props.setCountry(data);
      });
  };
  return (
    <StyledSmallCard onClick={onClick} id={props.name}>
      <img
        src={props.flagImg}
        alt={`flag of the ${props.name}`}
        className="flag-img"
      />

      <div className="container-stats">
        <h2 ref={nameRef}>{props.name}</h2>
        <p className="population">
          Population: <span>{props.pop.toLocaleString("en-US")}</span>
        </p>
        <p className="region">
          Region: <span>{props.reg}</span>
        </p>
        <p className="capital">
          Capital: <span>{props.cap}</span>
        </p>
      </div>
    </StyledSmallCard>
  );
};

export default Card;
