import styled from "styled-components";

interface Props {
    imagem: string;
}

export const BackgroundImage = styled.aside<Props>`
  display: none;

  background-image: url(${(props) => props.imagem});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #555;
  width: 100%;
  position: relative;
  .buttons__container {
    margin: 40px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon__button {
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: none;
      padding: 0;
      color: #d950e5;
      cursor: pointer;

      transition: 0.3s;

      svg {
        width: 100%;
        height: 100%;
      }

      :hover {
        color: #df5fef;
      }
    }
    .profile__button {
      width: 40px;
      height: 40px;
      border: none;
      padding: 0;
      color: #ccc;
      padding: 5px;
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
      border-radius: 12px;
      /** glassmorphism */
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);

      cursor: pointer;

      transition: 0.3s;

      svg {
        width: 100%;
        height: 100%;
      }

      :hover {
        background-color: rgba(255, 255, 255, 0);
      }
    }
  }
  .window__buttons {
    position: absolute;
    right: 0;
    top: 0;
    button {
      margin: 0;
      padding: 5px 10px;
      border: none;
      background-color: transparent;
      color: #ccc;
    }
    button:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: 768px) {
    display: block;
  }
`;
