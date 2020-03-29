import React, { useRef, useState } from "react";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { toast } from "react-toastify";

import Input from "~/components/Input";
import api from "~/services/api";
import history from "~/services/history";
import { Container } from "./styles";
import * as Pallete from "~/styles/colors";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import logo from "~/assets/logo.svg";
import { IOng } from "~/types/types";

interface FormData {
  title: string;
  value: string;
}

export default function NewIncident() {
  const formRef = useRef<FormHandles>(null);
  const [description, setDescription] = useState("");

  const handleSubmit: SubmitHandler<FormData> = async data => {
    const { title, value } = data;
    const price = Number(value);

    try {
      const storageValue = localStorage.getItem("ong");

      if (storageValue) {
        const ong: IOng = JSON.parse(storageValue);

        api.defaults.headers.authorization = ong.id;
        await api.post<{ id: number }>("/incidents", {
          title,
          description,
          value: price
        });
        history.goBack();
        toast.success("Caso adicionado com sucesso");
      }
    } catch (error) {
      console.log(error);
      toast.warn("Erro ao criar caso, poderia tentar novamente?");
    }
  };

  return (
    <Container>
      <div>
        <aside>
          <img src={logo} alt="Logo" />

          <h1>Cadastrar novo caso</h1>

          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/home">
            <div>
              <MdKeyboardArrowLeft size={24} color={Pallete.segondColor} />
              <strong>Voltar para Home</strong>
            </div>
          </Link>
        </aside>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" type="text" placeholder="Título do caso" />
          <textarea
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          />
          <Input name="value" type="number" placeholder="Valor em reais" />

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
}
