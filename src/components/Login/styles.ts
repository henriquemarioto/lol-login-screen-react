import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--cor-fundo);
  min-width: 320px;
  width: 100%;
  max-width: 360px;
  padding: 20px 45px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  img {
    width: 100px;
    filter: brightness(110%);
    filter: contrast(150%);
  }
`;

export const Form = styled.form`
  margin-top: 60px;

  .fazer__login {
    font-size: 20px;
    font-weight: 600;
    color: #222;
    text-align: center;
    display: block;
  }
  .container__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  .container__login_rede_social {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container__rede {
      width: 80px;
      padding: 6px;
      border-radius: 5px;
      background-color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .facebook {
      background-color: #1877f2;
    }
    .google {
      background-color: #fff;
      border: 2px solid #eee;
    }
    .apple {
      background-color: #000;
    }
  }
  .check__box {
    margin-top: 5px;
    display: flex;
    align-items: center;
    color: #111;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;

    input[type="checkbox"] {
      background-color: #999;
      padding: 7px;
      margin: 5px 8px 5px 0;
    }
  }
  .container__submit {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .submit {
    margin-top: 70px;
    width: 60px;
    height: 60px;
    background-color: transparent;
    padding: 0;
    position: relative;
    border: 2px solid #ddd;
    border-radius: 15px;

    transition: 0.3s;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      color: #ddd;
      transition: 0.3s;
    }

    :hover {
      background-color: #ddd;

      svg {
        color: var(--cor-fundo);
      }
    }
  }
  button {
    border: none;
    box-sizing: border-box;
  }
  button:hover {
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  position: relative;
  .container__links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a,
  p {
    font-size: 9px;
    text-decoration: none;
    text-align: center;
    color: #999;
    font-weight: bold;
  }
  a {
    margin-top: 10px;
    width: 200px;
    transition: 0.3s;

    :hover {
      color: #888;
    }
  }
  p {
    text-align: right;
    position: absolute;
    right: 0;
    bottom: -2px;
  }
`;
