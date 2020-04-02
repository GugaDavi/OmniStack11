import styled from "styled-components";
import { darken } from "polished";
import { MdChat } from "react-icons/md";

import * as Pallete from "~/styles/colors";

export const Container = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const Button = styled.button`
  position: relative;
  padding: 20px;
  border-radius: 50%;
  border: 0px;
  background: ${Pallete.segondColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;

  &:hover {
    background: ${darken(0.05, Pallete.segondColor)};
    padding: 23px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);

    &::after {
      width: 25px;
      height: 25px;
    }
  }

  &::after {
    position: absolute;
    transition: 0.2s;
    right: 0;
    top: 0;
    width: 0px;
    height: 0px;
    background-color: #ff892e;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    content: "";
    border-radius: 50%;
  }
`;

export const Icon = styled(MdChat).attrs({
  size: 35
})`
  color: #fff;
`;
