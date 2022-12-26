import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  margin-bottom: 2rem;

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  .container-theme-switcher {
    display: flex;
  }

  .theme-icon {
    width: 20px;
    margin-right: 0.5rem;
    transform: rotate(-20deg);
  }

  p {
    font-size: 0.95rem;
    font-weight: 600;
    margin-top: 5px;
  }
`;
