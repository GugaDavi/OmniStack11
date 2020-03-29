import styled from "styled-components";
import { darken } from "polished";

import * as Pallete from "~/styles/colors";

export const Container = styled.div`
  height: 100%;
  background: ${Pallete.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-around;

  section {
    max-width: 300px;

    img {
      margin-bottom: 70px;
    }

    form {
      h1 {
        color: ${Pallete.textColor};
        margin-bottom: 20px;
        font-size: 28px;
      }

      input {
        height: 50px;
        color: ${Pallete.textColor};
        padding: 0 20px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 4px;
        width: 100%;
        margin-bottom: 10px;
      }

      button {
        border: 0;
        background: ${Pallete.segondColor};
        color: #fff;
        padding: 15px 0px;
        width: 100%;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        transition: all 0.2s linear;
        margin-bottom: 15px;

        &:hover {
          background: ${darken(0.05, Pallete.segondColor)};
        }
      }
    }

    div {
      display: flex;
      align-items: center;

      strong {
        margin-left: 10px;
        color: ${Pallete.textColor};
      }
    }
  }
`;
