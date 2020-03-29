import styled from "styled-components";

import * as Pallet from "~/styles/colors";
import { darken } from "polished";

export const Container = styled.div`
  flex: 1;
  background: ${Pallet.primaryColor};

  header {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    height: 75px;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      background: ${Pallet.segondColor};
      color: #fff;
      border-radius: 8px;
      padding: 15px 20px;
      transition: 0.2s linear all;

      &:hover {
        background: ${darken(0.05, Pallet.segondColor)};
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        height: 50px;
        margin-right: 20px;
      }

      > div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;

        strong {
          line-height: 24px;
          font-size: 18px;
        }

        span {
          color: #999;
          transition: 0.2s linear all;

          &:hover {
            color: ${Pallet.segondColor};
          }
        }
      }
    }
  }
`;
