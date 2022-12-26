import React from "react";
import { StyledCard } from "./Card.Styled";
const Card = (props) => {
  return (
    <StyledCard>
      <img
        src={props.flagImg}
        alt={`flag of the ${props.name}`}
        className="flag-img"
      />

      <div className="container-stats">
        <h2>{props.name}</h2>
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
    </StyledCard>
  );
};

export default Card;
