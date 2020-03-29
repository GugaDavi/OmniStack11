import styled from "styled-components";
import { darken } from "polished";

import * as Pallete from "~/styles/colors";

export const Container = styled.div`
  height: 100%;
  background: ${Pallete.primaryColor};
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 75px;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    aside {
      max-width: 400px;
      img {
        margin-bottom: 30px;
      }

      h1 {
        font-size: 24px;
        color: ${Pallete.textColor};
        margin-bottom: 25px;
      }

      p {
        color: #444;
        font-size: 16px;
        line-height: 35px;
      }

      div {
        display: flex;
        align-items: center;
        margin-top: 25px;

        strong {
          margin-left: 15px;
          color: ${Pallete.textColor};
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 350px;

      div {
        display: flex;

        input#uf {
          width: 70px;
          margin-left: 10px;
        }
      }

      button {
        border: 0;
        background: ${Pallete.segondColor};
        display: flex;
        justify-content: center;
        color: #fff;
        padding: 15px 0px;
        border-radius: 4px;
        transition: all 0.2s linear;

        &:hover {
          background: ${darken(0.05, Pallete.segondColor)};
        }
      }
    }
  }
`;
