import styled from "styled-components";

export const StyledDropDown = styled.div`
  position: relative;
  z-index: 1;
  background-color: var(--white);
  font-weight: 600;

  .container-dropdown {
    width: 275px;
  }

  .dropdown-box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
  }

  .dropdown-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
  }

  .arrow-img {
    width: 50px;
    padding: 1rem;
  }

  .dropdown-options {
    width: 275px;
    margin-top: 0.5rem;
    position: absolute;
    z-index: 1000;
    padding: 0.5rem 0;
    border-radius: 10px;
    background-color: var(--white);
  }

  .option {
    line-height: 2rem;
    padding: 0.5rem 0;
    padding-left: 1rem;
    background-color: var(--white);
  }

  .option:hover {
    cursor: pointer;
  }
`;
