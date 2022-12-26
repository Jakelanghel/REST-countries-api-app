import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.elements};

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  .container-theme-switcher {
    display: flex;
  }

  .theme-icon {
    width: 20px;
    margin-right: 0.5rem;
    transform: rotate(-20deg);
    filter: ${({ theme }) => {
      return theme.filterWhite ? theme.filterWhite : null;
    }};
  }

  p {
    font-size: 0.95rem;
    font-weight: 600;
    margin-top: 5px;
  }

  @media screen and (min-width: 900px) {
    h1 {
      font-size: 1.5rem;
    }

    .theme-icon {
      width: 25px;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;
