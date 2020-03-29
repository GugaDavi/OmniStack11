import React from "react";
import { MdDelete } from "react-icons/md";

import { Container } from "./styles";
import { IIncidents } from "~/types/types";
import format from "~/utils/format";

interface Props {
  incident: IIncidents;
  key: string | number;
  deleteCase(id: number): void;
}

const CaseItem: React.FC<Props> = ({ incident, key, deleteCase }) => {
  return (
    <Container key={key}>
      <header>
        <div>
          <strong>CASO:</strong>
          <span>{incident.title}</span>
        </div>
        <button onClick={() => deleteCase(incident.id)}>
          <MdDelete size={24} color="#f00" />
        </button>
      </header>

      <div>
        <strong>DESCRIÇÃO:</strong>

        <p>{incident.description}</p>
      </div>

      <footer>
        <strong>VALOR:</strong>

        <p>{format(incident.value)}</p>
      </footer>
    </Container>
  );
};

export default CaseItem;
