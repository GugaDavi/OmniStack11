import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import * as Pallete from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${Pallete.primaryColor};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 10px 20px;
`;

export const Image = styled.Image``;

export const Contact = styled.View`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  margin: 0px 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const ContactTitle = styled.Text`
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
`;

export const ContactP = styled.Text`
  font-weight: bold;
  font-size: 21px;
  line-height: 30px;
`;

export const ContactSpan = styled.Text`
  font-size: 16px;
  margin: 20px 0px 10px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ContactButton = styled(RectButton)`
  padding: 15px 20px;
  background: ${Pallete.segondColor};
  border-radius: 4px;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
