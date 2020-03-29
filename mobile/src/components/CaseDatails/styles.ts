import styled from "styled-components/native";

import * as Pallete from "../../styles/colors";

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin: 20px;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CaseTitle = styled.View``;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 18px;
  color: ${Pallete.textColor};
`;

export const OngHeader = styled.View``;

export const OngName = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 18px;
  color: ${Pallete.textColor};
`;

export const Body = styled.View`
  margin: 30px 0px;
`;

export const Description = styled.Text``;

export const Footer = styled.View``;

export const Value = styled.Text`
  font-size: 18px;
  color: ${Pallete.textColor};
`;
