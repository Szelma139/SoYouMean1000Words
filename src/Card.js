import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-radius: 25px;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  overflow: hidden;
  background: #fff;

`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const MiddleContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const DaysAgo = styled.h3`
  color: ${props => props.color};
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
`;

const Text = styled.p`
  color: gray;
  text-align: center;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.color};
  height: 100%;

`;

const CardSquare = styled.div`
  border-right: 1px solid gray;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > span {
      font-weight: 200;
      color: white;
  }
`;

export const Card = ({color, text, title, url}) => {
  return (
    <Container>
      <Image src={url} />
      <MiddleContainer>
        <DaysAgo color={color}>4 days ago</DaysAgo>
        <Title>{title}</Title>
        <Text color={color}>
         {text} ASDsadasdasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasas
        </Text>
      </MiddleContainer>
      <BottomContainer color={color}>
        <CardSquare>
          <h3>7m</h3>
          <span>READ</span>
        </CardSquare>
        <CardSquare>
          <h3>55e</h3>
          <span>READ</span>
        </CardSquare>     <CardSquare>
          <h3>7m</h3>
          <span>READ</span>
        </CardSquare>
      </BottomContainer>
    </Container>
  );
};
