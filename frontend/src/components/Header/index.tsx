import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import logo from "~/assets/logo.svg";
import { IOng } from "~/types/types";

export default function Header() {
  const [ongName, setOngName] = useState("");
  const [storage] = useState(localStorage);

  useEffect(() => {
    const storageValue = localStorage.getItem("ong");
    if (storageValue) {
      const ong: IOng = JSON.parse(storageValue);
      setOngName(ong.name);
    }
  }, [storage]);

  return (
    <Container>
      <header>
        <div>
          <Link to="/home">
            <img src={logo} alt="Logo" />
          </Link>
          <div>
            <strong>Olá! {ongName}</strong>
            <Link to="/profile">
              <span>Meu Perfil</span>
            </Link>
          </div>
        </div>
        <Link to="/newCase">
          <button>Cadastrar novo caso</button>
        </Link>
      </header>
    </Container>
  );
}
