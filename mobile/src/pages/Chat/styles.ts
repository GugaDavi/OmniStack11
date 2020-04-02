import styled from "styled-components/native";
import { FlatList } from "react-native";

import * as Pallete from "../../styles/colors";

export const Background = styled.View`
  justify-content: flex-start;
  padding-top: 40px;
  height: 100%;
  background: ${Pallete.primaryColor};
`;

export const Container = styled.KeyboardAvoidingView``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 10px 20px;
`;

export const Image = styled.Image``;

export const ChatBody = styled.View`
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  margin: 0px 20px 15px;
`;

export const ChatHeader = styled.View`
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  background: ${Pallete.segondColor};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const ChatContent = styled(FlatList)`
  background: #fff;
  max-height: 400px;
`;

export const Message = styled.View`
  padding: 10px 15px;
`;

export const Author = styled.Text`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
`;

export const MessageContent = styled.View`
  background: #eee;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const MessageValue = styled.Text`
  font-size: 16px;
`;

export const Submit = styled.View`
  width: 100%;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  background: #eee;
  height: 60px;
  line-height: 18px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  align-items: center;
  background: ${Pallete.segondColor};
  justify-content: center;
  height: 60px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
