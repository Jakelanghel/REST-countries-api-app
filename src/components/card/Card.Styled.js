import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 5rem;

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

  .flag-img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }

  .container-stats {
    padding: 1.5rem;
    padding-bottom: 3rem;
  }
`;
