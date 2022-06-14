import { useState } from "react";
import { Container } from "./styles";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InputPassword = ({ ...rest }) => {
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  return (
    <Container>
      <input {...rest} type={hiddenPassword ? "password" : "text"}/>

      {/* Button reveal password */}
      {hiddenPassword ? (
        <button
          onClick={() => setHiddenPassword(!hiddenPassword)}
          type="button"
        >
          <AiFillEyeInvisible />
        </button>
      ) : (
        <button
          onClick={() => setHiddenPassword(!hiddenPassword)}
          type="button"
        >
          <AiFillEye />
        </button>
      )}
    </Container>
  );
};

export default InputPassword;
