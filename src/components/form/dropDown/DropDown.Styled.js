import styled from "styled-components";

export const StyledDropDown = styled.div`
  font-weight: 600;
  position: relative;
  z-index: 1;

  .container-dropdown {
    width: 275px;
    background-color: ${({ theme }) => theme.elements};
    border-radius: 7px;
  }

  .dropdown-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-shadow: ${({ theme }) => {
      return theme.boxShadow ? theme.boxShadow : null;
    }};
  }

  .dropdown-select:hover {
    cursor: pointer;
  }

  .arrow-img {
    width: 20px;
    filter: ${({ theme }) => theme.filterWhite};
  }

  .dropdown-options {
    width: 275px;
    margin-top: 0.5rem;
    position: absolute;
    z-index: 1000;
    padding: 0.5rem 0;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => {
      return theme.boxShadow ? theme.boxShadow : null;
    }};
  }

  .option {
    line-height: 1.5rem;
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    /* background-color: var(--white); */
  }

  .option:hover {
    cursor: pointer;
  }
`;
