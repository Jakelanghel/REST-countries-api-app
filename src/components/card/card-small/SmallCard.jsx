import React, { useRef } from "react";
import { StyledSmallCard } from "./SmallCard.Styled";
import { nanoid } from "nanoid";

const Card = (props) => {
  const nameRef = useRef();

  const onClick = (e) => {
    const name = nameRef.current.textContent;
    props.handleClick(e, name);
  };
  return (
    <StyledSmallCard onClick={onClick} id={nanoid()}>
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
