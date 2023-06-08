"use client";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Informations from "./Informations";
import Education from "./Education";
import Counter from "./Counter";
import Learning from "./Learning";
import Life from "./Life";
import Invention from "./Invention";
import SharifEvents from "./SharifEvents";
import Triangle from "./Triangle";
import Footer from "./Footer";
import styled, { keyframes } from "styled-components";
import Rectangle from "./Rectangle";

export default function Home() {
  return (
    <Container>
      <Header />
      <HeaderImage />
      <Informations />
      <Education />
      <Counter />
      <Learning />
      <Life />
      <Invention />
      <SharifEvents />
      <Triangle />
      <Rectangle/>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
