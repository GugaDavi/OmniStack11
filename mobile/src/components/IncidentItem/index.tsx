import React from "react";
import Icons from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  Header,
  CaseHeader,
  Label,
  CaseTitle,
  OngHeader,
  OngName,
  Body,
  Value,
  Footer,
  SeeMore
} from "./styles";
import * as Pallete from "../../styles/colors";
import { IIncident } from "~/types";
import { formatPrice } from "../../utils/format";

interface Props {
  incident: IIncident;
  toDatails(incident: IIncident): void;
}

const IncidentItem: React.FC<Props> = ({ incident, toDatails }) => {
  return (
    <Container>
      <Header>
        <CaseHeader>
          <Label>CASO:</Label>
          <CaseTitle>{incident.title}</CaseTitle>
        </CaseHeader>
        <OngHeader>
          <Label>ONG:</Label>
          <OngName>{incident.name}</OngName>
        </OngHeader>
      </Header>

      <Body>
        <Label>VALOR:</Label>
        <Value>{formatPrice(incident.value)}</Value>
      </Body>

      <Footer onPress={() => toDatails(incident)}>
        <SeeMore>Ver mais Detalhes</SeeMore>
        <Icons name="arrow-forward" size={20} color={Pallete.segondColor} />
      </Footer>
    </Container>
  );
};

export default IncidentItem;
