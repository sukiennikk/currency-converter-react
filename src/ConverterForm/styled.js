import styled from "styled-components";

export const Form = styled.form`
  width: 520px;
  padding: 40px 50px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  text-align: center;

  @media (max-width: 600px) {
    width: 90%;
    padding: 30px 20px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 20px 0;
`;

export const Caption = styled.legend`
  font-size: 28px;
  font-weight: 700;
  color: #167c80;
  margin-bottom: 10px;
`;

export const LabelText = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  margin-bottom: 20px;

  input,
  select {
    margin-top: 6px;
    padding: 10px 12px;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #d8d8d8;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #167c80;
  color: white;
  font-size: 20px;
  padding: 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.1s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
