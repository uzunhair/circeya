import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
