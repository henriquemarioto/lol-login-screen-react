import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #eaeaea;
  border-radius: 4px;

  input {
    background-color: transparent;
    padding: 15px 10px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    font-size: 12px;

    transition: 0.3s;

    ::placeholder {
      color: #999;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
