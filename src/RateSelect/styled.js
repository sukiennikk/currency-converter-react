import styled from "styled-components";

export const LabelText = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  margin-bottom: 20px;

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
