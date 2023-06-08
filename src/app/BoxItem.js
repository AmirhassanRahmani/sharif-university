"use client";

import styled from "styled-components";

function BoxItem({ item }) {
  return (
    <Container>
      <li>{item}</li>
    </Container>
  );
}

export default BoxItem;

const Container = styled.ul`
  /* visibility: hidden; */
  > li {
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: gray;
  }
`;
