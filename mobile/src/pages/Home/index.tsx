import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import { IIncident } from "../../types";

import logo from "../../assets/logo.png";
import {
  Container,
  Header,
  Image,
  Total,
  PageContainer,
  Title,
  TitleP,
  IncidentItems
} from "./styles";
import IncidentItem from "../../components/IncidentItem";
import { Alert } from "react-native";

export default function Home() {
  const { navigate } = useNavigation();
  const [incidents, setIncidents] = useState<IIncident[]>([]);

  useEffect(() => {
    async function getIncidents() {
      try {
        const resp = await api.get<IIncident[]>("/incidents");

        setIncidents(resp.data);
      } catch (error) {
        console.log(error);
        Alert.alert("Erro na requisição", "Tente novamente");
      }
    }

    getIncidents();
  }, []);

  function navigateToDatails(incident: IIncident) {
    navigate("IncidentsDatails", { item: incident });
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Total>Total de 43 caos</Total>
      </Header>

      <PageContainer>
        <Title>Bem-vindo!</Title>
        <TitleP>Escolha um dos casos abaixo e salve o dia</TitleP>
      </PageContainer>

      <IncidentItems
        showsVerticalScrollIndicator={false}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item }) => (
          <IncidentItem
            incident={item}
            toDatails={() => navigateToDatails(item)}
          />
        )}
      />
    </Container>
  );
}
