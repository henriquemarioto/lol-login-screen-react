import { BackgroundImage } from "./styles";
import { BsExclamationDiamondFill, BsFillPersonFill } from "react-icons/bs";

interface Props {
    imagem: string;
}

const Image = ({ imagem }: Props) => {
  return (
    <BackgroundImage imagem={imagem}>
      <div className="buttons__container">
        <button className="icon__button">
          <BsExclamationDiamondFill />
        </button>

        <button className="profile__button">
          <BsFillPersonFill />
        </button>
      </div>

      <div className="window__buttons">
        <button>_</button>
        <button>X</button>
      </div>
    </BackgroundImage>
  );
};

export default Image;
