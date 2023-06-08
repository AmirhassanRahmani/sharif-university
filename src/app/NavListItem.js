"use client";

import { useState } from "react";
import styled from "styled-components";

function NavListItem({ name, id, open }) {
  const handleShow = (e) => {
    open(id - 1);
  };

  return <Container onClick={handleShow}>{name}</Container>;
}

export default NavListItem;

const Container = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  background: #31bebc;
  text-align: center;
  color: white;
  padding: 1rem;
  border-radius: 0.7rem;
  &:hover {
    background: #002051;
  }
`;
