import styled from "styled-components";

export const Container = styled.div`
  div#homeBody {
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px 0px;

    h1 {
      margin-bottom: 20px;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 150 px;
    }
  }
`;
