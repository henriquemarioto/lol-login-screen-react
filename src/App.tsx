import Image from "./components/Image";
import Login from "./components/Login";
import { imagem } from "./main";
import { Container, ContainerContent } from "./styles";

function App() {
  return (
    <Container>
      <ContainerContent>
        <Login />
        <Image imagem={imagem} />
      </ContainerContent>
    </Container>
  );
}

export default App;
