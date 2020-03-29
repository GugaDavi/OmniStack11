import React, { useEffect, useState, useRef } from "react";
import { Form } from "@unform/web";
import { SubmitHandler, FormHandles } from "@unform/core";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";
import Input from "~/components/Input";
import { Container } from "./styles";
import Header from "~/components/Header";
import { IOng } from "~/types/types";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [ong, setOng] = useState<IOng>();

  useEffect(() => {
    const storageValue = localStorage.getItem("ong");

    if (storageValue) {
      const ong: IOng = JSON.parse(storageValue);

      setOng(ong);
    }
  }, []);

  function handleSignOut() {
    const confirmSignOut = window.confirm("Deseja sair?");

    if (confirmSignOut) {
      localStorage.clear();

      history.go(-(history.length - 1));
    }
  }

  const handleSubmit: SubmitHandler<FormData> = async data => {
    if (ong) {
      try {
        await api.put(`/ongs/${ong.id}`, data);

        const { id } = ong;

        const resp = await api.post<IOng>("/session", { id });
        localStorage.setItem("ong", JSON.stringify(resp.data));

        history.goBack();
        toast.success("Perfil atualizado com sucesso");
      } catch (error) {
        console.log(error);
        toast.error("Erro ao atualizar, poderia tentar novamente?");
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="profile">
          <h1>Perfil</h1>

          <Form initialData={ong} ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Nome da ONG" />
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="whatsapp" type="text" placeholder="WhastApp" />
            <div className="inputsGroup">
              <Input name="city" type="text" placeholder="Cidade" />
              <Input
                name="uf"
                type="text"
                placeholder="UF"
                className="uf"
                maxLength={2}
              />
            </div>

            <button type="submit">Atualizar</button>
          </Form>
          <button onClick={handleSignOut} type="button">
            Sair
          </button>
        </div>
      </Container>
    </>
  );
};

export default Profile;
