import styled from "styled-components/native";

import * as Pallete from "../../styles/colors";

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const CaseHeader = styled.View``;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CaseTitle = styled.Text.attrs({
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
  padding: 10px 20px;
`;

export const Value = styled.Text`
  font-size: 18px;
  color: ${Pallete.textColor};
`;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #eee;
  padding: 20px;
`;

export const SeeMore = styled.Text`
  font-size: 16px;
  color: ${Pallete.segondColor};
  font-weight: bold;
`;
