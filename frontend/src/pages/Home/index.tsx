import React, { useEffect, useState } from "react";
import { MdMoveToInbox } from "react-icons/md";

import Header from "~/components/Header";
import CaseItem from "~/components/CaseItem";
import { IIncidents, IOng } from "~/types/types";
import api from "~/services/api";

import { Container } from "./styles";

export default function Home() {
  const [incidents, setIncidents] = useState<IIncidents[]>([]);

  useEffect(() => {
    async function ongIncidentsList() {
      const storageValue = localStorage.getItem("ong");

      if (storageValue) {
        const ong: IOng = JSON.parse(storageValue);

        api.defaults.headers.authorization = ong.id;

        const ongIncidents = await api.get<IIncidents[]>("/profile");

        setIncidents(ongIncidents.data);
      }
    }

    ongIncidentsList();
  }, []);

  async function handleDelete(id: number) {
    const deleteConfirm = window.confirm(`Você deseja deletar o caso: ${id}`);

    if (deleteConfirm) {
      await api.delete(`/incidents/${id}`);
      setIncidents(incidents.filter(i => i.id !== id));
    }
  }

  return (
    <Container>
      <Header />

      <div id="homeBody">
        <h1>Casos cadastrados</h1>

        {incidents.length > 0 ? (
          <ul>
            {incidents.map(incident => (
              <CaseItem
                incident={incident}
                key={incident.id}
                deleteCase={() => handleDelete(incident.id)}
              />
            ))}
          </ul>
        ) : (
          <div>
            <MdMoveToInbox size={100} color="#ccc" />
            <strong>Sem casos cadastrados</strong>
          </div>
        )}
      </div>
    </Container>
  );
}
