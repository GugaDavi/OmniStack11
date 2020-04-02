import styled from "styled-components";

import * as Pallete from "~/styles/colors";

export const Container = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 200px);
  bottom: calc(100% + 30px);
  background-color: #fff;
  border-radius: 4px;

  box-shadow: 0.5px -1px 3px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    left: calc(70%);
    bottom: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #fff;
  }

  header {
    background: ${Pallete.segondColor};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0px;

    strong {
      color: #fff;
    }
  }

  div.content {
    background: #fff;
    max-height: 260px;
    overflow: scroll;
    position: relative;
    padding-bottom: 40px;

    padding-right: 5px;
    margin-right: 5px;

    div {
      display: flex;
      padding: 10px 5px;

      strong {
        font-size: 12px;
      }

      p {
        margin: 0px 5px;
        padding: 0px 5px;
        background: #eee;
        border-radius: 4px;
        font-size: 12px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }
    }
  }

  div.footer {
    padding: 0;
    margin: 0;
    height: 40px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 5px;
    background: #fff;
    display: flex;

    textarea {
      width: 100%;
      margin-right: 5px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      border: 0px;
      background: #ff892e;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      padding: 0px 5px;
      color: #fff;
      font-weight: bold;
      font-size: 10px;
    }
  }
`;
