import styled from "styled-components";

export const StyledForm = styled.main`
  width: 100%;

  label {
    display: none;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .container-search {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    margin-bottom: 3rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => {
      return theme.boxShadow ? theme.boxShadow : null;
    }};
  }

  .search-btn {
    border: none;
    background-color: ${({ theme }) => theme.elements};
    padding: 1rem;
  }

  .search-btn:hover {
    cursor: pointer;
  }

  .search-icon {
    width: 18px;
    filter: invert(58%) sepia(61%) saturate(0%) hue-rotate(193deg)
      brightness(102%) contrast(92%);
  }

  .search-input {
    width: 100%;
    border: none;
    font-size: 1rem;
    letter-spacing: 0.5px;
    padding: 1rem 0;
    padding-left: 1rem;
    background-color: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.text};
  }

  #usr-input::placeholder {
    color: ${({ theme }) => theme.input};
    opacity: 0.8;
  }

  .container-cards {
    position: relative;
    z-index: 0;
  }

  @media screen and (min-width: 600px) {
    form {
      flex-direction: row;
      justify-content: space-between;
    }

    .container-search {
      width: 50%;
    }
  }
`;
