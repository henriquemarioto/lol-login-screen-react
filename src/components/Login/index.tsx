import { ContainerLogo, Footer, Form, Section } from "./styles";
import { FaArrowRight } from "react-icons/fa";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/imgs/logo.svg";
import Input from "../Input";
import InputPassword from "../InputPassword";

const Login = () => {
  return (
    <Section>
      <ContainerLogo>
        <img src={Logo} alt="logo" className="logo" />
      </ContainerLogo>

      <Form>
        <label className="fazer__login">Fazer login</label>
        <div className="container__info">
          <Input
            type="text"
            name="conta"
            id="conta"
            placeholder="Nome de usuário"
          />

          <InputPassword
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
          />
        </div>

        <div className="container__login_rede_social">
          <button className="container__rede facebook" type="button">
            <BsFacebook color="#fff" />
          </button>
          <button className="container__rede google" type="button">
            <FcGoogle />
          </button>
          <button className="container__rede apple" type="button">
            <BsApple color="#fff" />
          </button>
        </div>

        <label className="check__box">
          <input type="checkbox" name="" id="" />
          Manter login
        </label>

        <div className="container__submit">
          <button className="submit" type="button">
            <FaArrowRight />
          </button>
        </div>
      </Form>

      <Footer>
        <div className="container__links">
          <a href="https://recovery.riotgames.com/pt-br?region=BR1">
            NÃO CONSEGUE INICIAR SESSÃO?
          </a>
          <a
            href="https://signup.br.leagueoflegends.com/pt/signup/index"
            className="criar__conta"
          >
            CRIAR CONTA
          </a>
        </div>
        <p>V20.11.0</p>
      </Footer>
    </Section>
  );
};

export default Login;
