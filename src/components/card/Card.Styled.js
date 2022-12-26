import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.elements};

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
