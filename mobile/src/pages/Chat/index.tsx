import React from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";

import {
  Background,
  Container,
  Header,
  Image,
  ChatBody,
  ChatHeader,
  Title,
  ChatContent,
  Message,
  Author,
  MessageValue,
  MessageContent,
  Input,
  Submit,
  SubmitButton
} from "./styles";
import logo from "../../assets/logo.png";
import { RootStackParamList } from "~/types";

export default function Chat() {
  const { goBack } = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "Chat">>();
  const { incident } = route.params;

  return (
    <Background>
      <Container behavior="position" enabled>
        <Header>
          <TouchableOpacity onPress={goBack}>
            <Icons name="arrow-back" size={24} />
          </TouchableOpacity>
          <Image source={logo} />
        </Header>

        <ChatBody>
          <ChatHeader>
            <Title>{incident.name}</Title>
          </ChatHeader>
          <ChatContent
            data={[1, 2, 3, 4]}
            keyExtractor={i => String(i)}
            renderItem={({ item }) => (
              <Message>
                <Author>ONG:</Author>
                <MessageContent>
                  <MessageValue>
                    Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare
                    consequat. Praesent lacinia ultrices consectetur. Sed non
                    ipsum felis. Não sou faixa preta cumpadi, sou preto
                    inteiris, inteiris. Quem manda na minha terra sou euzis! Per
                    aumento de cachacis, eu reclamis.
                  </MessageValue>
                </MessageContent>
              </Message>
            )}
          />
          <Submit>
            <Input
              placeholder="Mensagem"
              returnKeyType="none"
              multiline={true}
            />
            <SubmitButton>
              <Icons name="keyboard-arrow-right" size={24} color="#fff" />
            </SubmitButton>
          </Submit>
        </ChatBody>
      </Container>
    </Background>
  );
}
