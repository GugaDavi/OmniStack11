import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Icons from "react-native-vector-icons/MaterialIcons";
import * as MailComposer from "expo-mail-composer";

import logo from "../../assets/logo.png";
import {
  Container,
  Header,
  Image,
  Contact,
  ContactTitle,
  ContactP,
  ContactSpan,
  ContactButton,
  ContactButtonText,
  Buttons
} from "./styles";
import CaseDatails from "../../components/CaseDatails/";
import { RootStackParamList } from "~/types";

export default function IncidentDetails() {
  const { goBack, navigate } = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "IncidentsDatails">>();
  const { item } = route.params;
  const message = `Olá ${item.name}, estou entrando em contato pois gostaria de ajudar no caso: ${item.title}`;

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${item.title}`,
      recipients: [item.email],
      body: message
    });
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Image source={logo} />
      </Header>

      <CaseDatails incident={item} />

      <Contact>
        <ContactTitle>Salve o dia!</ContactTitle>
        <ContactP>Seja o herói desse caso</ContactP>

        <ContactSpan>Entre em contato</ContactSpan>
        <Buttons>
          <ContactButton onPress={() => navigate("Chat", { incident: item })}>
            <ContactButtonText>Chat</ContactButtonText>
          </ContactButton>
          <ContactButton onPress={sendMail}>
            <ContactButtonText>E-mail</ContactButtonText>
          </ContactButton>
        </Buttons>
      </Contact>
    </Container>
  );
}
