import styled from "styled-components";

import * as Pallete from "~/styles/colors";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  div.profile {
    max-width: 1000px;
    margin: 0 auto;
    padding: 75px;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    h1 {
      margin-bottom: 30px;
    }

    form {
      margin-bottom: 10px;

      button {
        background: ${Pallete.segondColor};

        &:hover {
          background: ${darken(0.05, Pallete.segondColor)};
        }
      }
    }

    div.inputsGroup {
      display: flex;

      input.uf {
        max-width: 70px;
        margin-left: 10px;
      }
    }

    button {
      border: 0;
      width: 100%;
      background: ${darken(0.4, Pallete.primaryColor)};
      display: flex;
      justify-content: center;
      color: #fff;
      padding: 15px 0px;
      border-radius: 4px;
      transition: all 0.2s linear;

      &:hover {
        background: ${darken(0.45, Pallete.primaryColor)};
      }
    }
  }
`;
