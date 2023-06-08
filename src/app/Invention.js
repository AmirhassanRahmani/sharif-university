"use client";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import useInView from "../../utils/useInView";

function Invention() {
  const HeaderOne = useRef(null);
  const HeaderTwo = useRef(null);
  const MainRef = useRef(null);

  const [BooleanHeaderTop] = useInView(HeaderOne);
  const [BooleanHeaderBottom] = useInView(HeaderTwo);
  const [BooleanMain] = useInView(MainRef);

  return (
    <Container>
      <Header>
        <HeaderTop ref={HeaderOne} $seeHeaderTop={BooleanHeaderTop}>
          دستاوردها و افتخارات
        </HeaderTop>
        <HeaderBottom ref={HeaderTwo} $seeHeaderBottom={BooleanHeaderBottom}>
          اتفاقاتی که در شریف، بهترین را رقم زده
        </HeaderBottom>
      </Header>
      <Main ref={MainRef} $mainInfo={BooleanMain}>
        <InformationCardsTop>
          <InformationSection>
            <img
              src="https://www.sharif.edu/image/journal/article?img_id=11086111&t=1683011278147"
              alt="info"
            />
            <h3> توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه</h3>
            <p>
              ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
              دانشگاه لومونوسف...
            </p>
          </InformationSection>
          <InformationSection>
            <img
              src="https://www.sharif.edu/image/journal/article?img_id=9885260&t=1680091499323"
              alt="info"
            />
            <h3> توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه</h3>
            <p>
              ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
              دانشگاه لومونوسف...
            </p>
          </InformationSection>
          <InformationSection>
            <img
              src="https://www.sharif.edu/image/journal/article?img_id=9530945&t=1680091499440"
              alt="info"
            />
            <h3> توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه</h3>
            <p>
              ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
              دانشگاه لومونوسف...
            </p>
          </InformationSection>
          <InformationSection>
            <img
              src="https://www.sharif.edu/image/journal/article?img_id=8299198&t=1680091499470"
              alt="info"
            />
            <h3> توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه</h3>
            <p>
              ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
              دانشگاه لومونوسف...
            </p>
          </InformationSection>
        </InformationCardsTop>
        <ButtonContainer>
          <button>سایر دستاورد ها</button>
        </ButtonContainer>
      </Main>
    </Container>
  );
}

export default Invention;

const ShowImage = keyframes`
  0%{
    opacity: 0;
    transform: translateZ(0) ;

  }
  100%{
    opacity: 1;
    transform: translateZ(1);
  }
`;

const FadeIn = keyframes`
  0%{
    opacity: 0;
    transform: translateZ(0) scale(0.6);

  }
  50%{
    opacity: 0.5;
    transform: translateZ(0.5) scale(0.8);
  }
  100%{
    opacity: 1;
    transform: translateZ(1) scale(1);
  }
`;

const Container = styled.div`
  margin-top: 3rem;
  @media (max-width: 1369px) {
    width: 75rem;
    margin: 3rem auto;
  }
  @media (max-width: 1244px) {
    width: 70rem;
    margin: 3rem auto;
  }
`;
const Header = styled.div`
  text-align: center;
`;
const HeaderTop = styled.h1`
  color: #0042a9;
  font-weight: 900;
  margin-bottom: 0.6rem;
  visibility: hidden;
  visibility: ${(props) => (props.$seeHeaderTop ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$seeHeaderTop ? ShowImage : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;
const HeaderBottom = styled.h3`
  color: #29c3be;
  font-weight: 600;
  font-size: 1.3rem;
  visibility: hidden;
  visibility: ${(props) => (props.$seeHeaderBottom ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$seeHeaderBottom ? ShowImage : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;
const Main = styled.div`
  max-width: 83rem;
  margin: 3rem auto;
  visibility: hidden;
  visibility: ${(props) => (props.$mainInfo ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$mainInfo ? FadeIn : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const InformationCardsTop = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1369px) {
    gap: 1rem;
  }
  @media (max-width: 992px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const InformationSection = styled.div`
  > img {
    width: 100%;
    border-top-right-radius: 1.4rem;
    border-top-left-radius: 1.4rem;
  }
  width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 1.4rem;

  > h3 {
    color: #1a55b2;
    padding: 10px;
    margin-bottom: 1rem;
  }

  > p {
    padding: 10px;
    color: gray;
  }

  box-shadow: 0 0.286em 0.286em rgba(0, 0, 0, 0.25);
  position: relative;
  margin-bottom: 2.5rem;

  &:hover {
    box-shadow: 0 0.286em 2em rgba(0, 0, 0, 0.45);
    transition: transform 0.4s ease-out;
    transform: translateY(-0.3rem);
  }
  @media (max-width: 992px) {
    width: 450px;
    height: 375px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  > button {
    background: #f93d52;
    color: white;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    box-shadow: 0px 10px 30px rgba(84, 84, 84, 0.15);
  }
  @media (max-width: 992px) {
    justify-content: center;
  }
`;
