import React from "react";
import { StyledSmallCard } from "./SmallCard.Styled";
const Card = (props) => {
  return (
    <StyledSmallCard>
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
    </StyledSmallCard>
  );
};

export default Card;
