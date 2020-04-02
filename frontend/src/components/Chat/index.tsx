import React, { useRef } from "react";

import { Container } from "./styles";

export default function Chat() {
  const chatView = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <header>
        <strong>Nome da Ong</strong>
      </header>
      <div className="content" ref={chatView}>
        <ul>
          <li>
            <div>
              <strong>ong:</strong>
              <p>Olá tudo bom?</p>
            </div>
          </li>
          <li>
            <div>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare
                consequat. Praesent lacinia ultrices consectetur. Sed non ipsum
                felis. Não sou faixa preta cumpadi, sou preto inteiris,
                inteiris. Quem manda na minha terra sou euzis! Per aumento de
                cachacis, eu reclamis.
              </p>
              <strong>:Usuário</strong>
            </div>
          </li>
          <li>
            <div>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare
                consequat. Praesent lacinia ultrices consectetur. Sed non ipsum
                felis. Não sou faixa preta cumpadi, sou preto inteiris,
                inteiris. Quem manda na minha terra sou euzis! Per aumento de
                cachacis, eu reclamis.
              </p>
              <strong>:Usuário</strong>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer">
        <textarea maxLength={200} />
        <button>Enviar</button>
      </div>
    </Container>
  );
}
