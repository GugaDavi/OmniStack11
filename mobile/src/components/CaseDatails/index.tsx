import React from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Label,
  Title,
  CaseTitle,
  OngHeader,
  OngName,
  Body,
  Description,
  Footer,
  Value
} from "./styles";
import { IIncident } from "../../types";
import { formatPrice } from "../../utils/format";

interface Props {
  incident: IIncident;
}

const CaseDatails: React.FC<Props> = ({ incident }) => {
  return (
    <Container>
      <Header>
        <CaseTitle>
          <Label>CASO</Label>
          <Title>{incident.title}</Title>
        </CaseTitle>
        <OngHeader>
          <Label>ONG</Label>
          <OngName>{incident.name}</OngName>
        </OngHeader>
      </Header>
      <Body>
        <Label>DESCRIÇÃO</Label>
        <Description>{incident.description}</Description>
      </Body>

      <Footer>
        <Label>VALOR:</Label>
        <Value>{formatPrice(incident.value)}</Value>
      </Footer>
    </Container>
  );
};

export default CaseDatails;
