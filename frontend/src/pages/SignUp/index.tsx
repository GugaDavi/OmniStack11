import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";
import Input from "~/components/Input";
import logo from "~/assets/logo.svg";
import * as Pallete from "~/styles/colors";
import { IOng } from "~/types/types";

import { Container } from "./styles";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export default function SignUp() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    const { name, email, whatsapp, city, uf } = data;
    try {
      const newOng = await api.post<IOng>("/ongs", {
        name,
        email,
        whatsapp,
        city,
        uf
      });
      alert(`Seu codigo de acesso é: ${newOng.data.id}`);
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.warn(
        "Erro ao efetuar cadastro, gentileza verifique os dados e tente novamente"
      );
    }
  };

  return (
    <Container>
      <div>
        <aside>
          <img src={logo} alt="Logo" />

          <h1>Cadastro</h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>

          <Link to="/">
            <div>
              <MdKeyboardArrowLeft size={24} color={Pallete.segondColor} />
              <strong>Já tenho cadastro</strong>
            </div>
          </Link>
        </aside>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome da ONG" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="whatsapp" type="text" placeholder="WhastApp" />
          <div>
            <Input name="city" type="text" placeholder="Cidade" />
            <Input
              name="uf"
              type="text"
              placeholder="UF"
              id="uf"
              maxLength={2}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
}
