"use client";

import styled from "styled-components";
import arrayNames from "../../dist/list";
import boxItems from "../../dist/box";
import NavListItem from "./NavListItem";
import BoxItem from "./BoxItem";
import { useState } from "react";

function Rectangle() {
  const [show, setShow] = useState(false);
  let [indexName, setIndexName] = useState(0);

  const handleShow = () => {
    setShow(true);
  };

  console.log(indexName);
  return (
    <Container>
      <NavListContainer onMouseEnter={handleShow} $showBox={show}>
        {arrayNames.map((listItem) => (
          <NavListItem
            key={listItem.id}
            name={listItem.name}
            id={listItem.id}
            open={setIndexName}
          />
        ))}
      </NavListContainer>
      <LineBottom></LineBottom>
      <BoxContainer>
        {boxItems[indexName].name.map((item) => (
          <BoxItem item={item} />
        ))}
      </BoxContainer>
    </Container>
  );
}

export default Rectangle;

const Container = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 5rem;
  }
`;

const LineBottom = styled.div`
  max-width: 60rem;
  height: 0.5rem;
  margin: 0 auto;
  background-color: orange;
  visibility: hidden;
`;

const BoxContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  min-height: 10rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: none;
  padding: 3rem;
`;

const NavListContainer = styled.div`
  display: grid;
  gap: 0.3rem;
  max-width: 60rem;
  margin: 1rem auto;
  ~ ${LineBottom} {
    visibility: ${(props) => (props.$showBox ? "visible" : "hidden")};
  }
  ~ ${BoxContainer} {
    display: ${(props) => (props.$showBox ? "block" : "none")};
  }
`;
