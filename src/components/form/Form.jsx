import React, { useState, useEffect, useRef } from "react";
import { StyledForm } from "./Form.Styled";
import { fetchAPI } from "../../services/fetchAPI";

import DropDown from "./dropDown/DropDown";

const Form = (props) => {
  let inputRef = useRef();

  const getBorderCountries = (obj) => {
    const bordersArr =
      obj.borders.length > 3 ? obj.borders.slice(0, 3) : obj.borders;

    bordersArr.forEach((name) => {
      fetchAPI(`name/${name}`)
        .then((res) => res.json())
        .then((data) => {
          props.setBorders((oldState) => [...oldState, data[0].name.common]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const searchByCountry = (e) => {
    e.preventDefault();
    props.setBorders([]);
    const filter = `name/${inputRef.current.value}`;
    fetchAPI(filter)
      .then((res) => res.json())
      .then((data) => {
        getBorderCountries(data[0], props.setBorders);
        props.setData([data[0]]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterByRegion = (e) => {
    const region = `region/${e.target.textContent}`;
    fetchAPI(region)
      .then((res) => res.json())
      .then((data) => props.setData(data));
  };

  return (
    <StyledForm className="side-padding">
      <form action="" onSubmit={searchByCountry}>
        <label htmlFor="usr-input">search countries</label>
        <div className="container-search">
          <button className="search-btn" onClick={searchByCountry}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="search-icon"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </button>
          <input
            type="text"
            id="usr-input"
            className="search-input"
            placeholder="Search for a country..."
            ref={inputRef}
          />
        </div>

        <DropDown setData={props.setData} filterByRegion={filterByRegion} />
      </form>
    </StyledForm>
  );
};

export default Form;
