import styled from "styled-components";

export const StyledSmallCard = styled.div`
  max-width: 450px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => {
    return theme.boxShadow ? theme.boxShadow : null;
  }};

  &:hover {
    cursor: pointer;
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

  .flag-img {
    width: 100%;
    height: 250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }

  .container-stats {
    padding: 1.5rem;
    padding-bottom: 2.5rem;
  }

  @media screen and (min-width: 900px) {
    width: 400px;

    .flag-img {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
`;
