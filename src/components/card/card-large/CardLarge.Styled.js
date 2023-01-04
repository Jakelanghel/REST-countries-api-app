import styled from "styled-components";

export const StyledLargeCard = styled.div`
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 5rem;
  background-color: transparent;

  .back-btn {
    width: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => {
      return theme.boxShadowBtn ? theme.boxShadowBtn : null;
    }};
    background-color: transparent;
    border: none;
    margin-bottom: 5rem;
  }

  .back-arrow {
    width: 20px;
    filter: ${({ theme }) => {
      return theme.filterWhite ? theme.filterWhite : null;
    }};
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 2rem;
    font-weight: 600;
  }

  span {
    font-weight: 300;
    margin-left: 0.25rem;
  }

  .container-img {
    width: 100%;
  }

  .flag-img {
    width: 100%;
npm     margin-bottom: 3rem;
  }

  .container-stats {
    margin-bottom: 3rem;
  }

  .container-border-btns {
    display: flex;
    gap: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .border-btn {
    width: 25%;
    padding: 0.5rem 0;
    border: none;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => {
      return theme.boxShadowBtn ? theme.boxShadowBtn : null;
    }};
    color: ${({ theme }) => theme.text};
  }

  .border-btn:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1100px) {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;

    .container-img {
      max-width: 400px;
      border-radius: 3px;
      margin-right: 1rem;
    }

    .flag-img {
      width: 100%;
      height: auto;
    }

    .container-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .container-stats {
      max-width: 250px;
    }

    .mar-tp {
      margin-top: 4.3rem;
    }

    .container-border {
      width: 100%;
      display: flex;
      align-items: center;
      align-self: flex-start;
    }

    h3 {
      margin-right: 3rem;
      margin-bottom: 0;
    }

    .container-border-btns {
      width: 55%;
    }
  }
`;
