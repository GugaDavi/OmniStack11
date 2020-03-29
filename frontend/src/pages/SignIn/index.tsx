import React, { useState, FormEvent } from "react";
import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

import logo from "~/assets/logo.svg";
import heroes from "~/assets/heroes.png";
import { IOng } from "~/types/types";

import { Container } from "./styles";
import * as Pallet from "~/styles/colors";

export default function SignIn() {
  const [id, setId] = useState<string>();

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const resp = await api.post<IOng>("/session", { id });

      localStorage.setItem("ong", JSON.stringify(resp.data));
      history.push("/home");
    } catch (error) {
      toast.error("Id incorreto ou Ong não existe");
    }
  }

  return (
    <Container>
      <section>
        <img src={logo} alt="Logo" />

        <form onSubmit={handleSignIn}>
          <label htmlFor="ongId">
            <h1>Faça seu Logon</h1>

            <input
              type="text"
              id="ongId"
              placeholder="Seu ID"
              onChange={e => setId(e.target.value)}
            />

            <button type="submit">Entrar</button>
          </label>
        </form>

        <Link to="/register">
          <div>
            <MdExitToApp size={24} color={Pallet.segondColor} />
            <strong>Não tenho Cadastro</strong>
          </div>
        </Link>
      </section>

      <img src={heroes} alt="" />
    </Container>
  );
}
