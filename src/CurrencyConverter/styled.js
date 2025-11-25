import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url("./images/background.jpg");
  background-size: cover;
  background-position: center;
  padding-top: 60px;
`;

export const Card = styled.div`
  width: 450px;
  background: white;
  padding: 40px 30px;
  border-radius: 24px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.15);

  @media (max-width: 480px) {
    width: 90%;
    padding: 30px 20px;
  }
`;
