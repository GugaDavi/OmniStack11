import React from "react";

import { Container, Icon, Button } from "./styles";
import Chat from "../Chat";

export default function ChatButton() {
  return (
    <Container>
      <Button>
        <Icon />
        <Chat />
      </Button>
    </Container>
  );
}
