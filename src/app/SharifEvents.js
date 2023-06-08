"use client";

import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import useInView from "../../utils/useInView";

function SharifEvents() {
  const HeaderOne = useRef(null);
  const HeaderTwo = useRef(null);
  const sharifRef = useRef(null);

  const [BooleanHeaderTop] = useInView(HeaderOne);
  const [BooleanHeaderBottom] = useInView(HeaderTwo);
  const [BooleanSharif] = useInView(sharifRef);

  return (
    <Container>
      <Header>
        <HeaderTop ref={HeaderOne} $seeHeaderTop={BooleanHeaderTop}>
          رویدادهای شریف
        </HeaderTop>
        <HeaderBottom ref={HeaderTwo} $seeHeaderBottom={BooleanHeaderBottom}>
          با شریف، چند قدم جلوتر باشید
        </HeaderBottom>
      </Header>
      <Main>
        <SharifEventsCardContainer ref={sharifRef} $sharifCard={BooleanSharif}>
          <SharifEventsCard>
            <CardImage>
              <SharifEventsCardImage src="https://www.sharif.edu/documents/48575/11235450/image.png.jpeg/dbb52d65-7dcd-90b9-c6c7-e4fa3f69d1d3?t=1683434719308" />
            </CardImage>
            <CardHover>
              <h2>رویداد دستاوردهای نوین در فیزیک بنیادی از نگاهی فلسفی</h2>
              <p> اطلاعات بیشتر</p>
              <div className="btn-show">
                <span>بیشتر بخوانید </span>
              </div>
              <div className="title-show">
                <h3>اردیبهشت</h3>
                <h4>1402</h4>
              </div>
            </CardHover>
          </SharifEventsCard>

          <SharifEventsCard>
            <CardImage>
              <SharifEventsCardImage src="https://www.sharif.edu/documents/47992/0/11112255+%282%29.jpg/d286f775-d2f6-70d5-03c0-7ed7cc094386?t=1683628879395" />
            </CardImage>
            <CardHover>
              <h2>رویداد دستاوردهای نوین در فیزیک بنیادی از نگاهی فلسفی</h2>
              <p> اطلاعات بیشتر</p>
              <div className="btn-show">
                <span>بیشتر بخوانید </span>
              </div>
              <div className="title-show">
                <h3>اردیبهشت</h3>
                <h4>1402</h4>
              </div>
            </CardHover>
          </SharifEventsCard>

          <SharifEventsCard>
            <CardImage>
              <SharifEventsCardImage src="https://www.sharif.edu/o/adaptive-media/image/11315770/thumbnail-1700x1000/poster+%282%29.jpg?t=1683621799823" />
            </CardImage>
            <CardHover>
              <h2>رویداد دستاوردهای نوین در فیزیک بنیادی از نگاهی فلسفی</h2>
              <p> اطلاعات بیشتر</p>
              <div className="btn-show">
                <span>بیشتر بخوانید </span>
              </div>
              <div className="title-show">
                <h3>اردیبهشت</h3>
                <h4>1402</h4>
              </div>
            </CardHover>
          </SharifEventsCard>
        </SharifEventsCardContainer>

        <ButtonContainer>
          <button>سایر دستاورد ها</button>
        </ButtonContainer>
      </Main>
    </Container>
  );
}

export default SharifEvents;

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
  @media (max-width: 1369px) {
    width: 75rem;
    margin: 3rem auto;
  }
  @media (max-width: 1244px) {
    width: 70rem;
    margin: 3rem auto;
  }
`;

const Main = styled.div`
  max-width: 86rem;
  margin-top: 4rem;
  margin-right: 3rem;
`;

const SharifEventsCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  visibility: hidden;
  visibility: ${(props) => (props.$sharifCard ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$sharifCard ? FadeIn : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  @media (max-width: 1369px) {
    gap: 1rem;
  }
  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

const CardHover = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(231.85deg, #012761 15.67%, #0148b0 98.6%);
  width: 100%;
  height: 45%;
  border-radius: 0 0 1.5rem 1.5rem;
  padding: 1rem;
  > h2 {
    text-align: center;
    color: orange;
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 4rem;
    margin-top: 2.5rem;
  }
  > p {
    color: white;
    font-size: 1.2rem;
  }
  > .btn-show {
    background: #f93d52;
    color: white;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    box-shadow: 0px 10px 30px rgba(84, 84, 84, 0.15);
    width: 8rem;
    position: absolute;
    bottom: 0;
    transform: translate(-60%, -50%);
    /* visibility: hidden; */
    opacity: 0;
  }

  > .title-show {
    position: absolute;
    bottom: 8.3rem;
    left: 2rem;
    background: #ffc000;
    border-radius: 1rem;
    padding: 1rem;
    width: 6rem;
    height: 6rem;
    text-align: center;
    > :first-child {
      margin-bottom: 0.3rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:before {
    content: "";
    position: absolute;
    width: 95%;
    height: 100%;
    top: 0;
    bottom: 0;
    opacity: 0.15;
    left: 0;
    border-radius: 20px;
    background: url("	https://www.sharif.edu/o/shu-theme/images/svg/news.svg")
      no-repeat left 50px;
  }

  @media (max-width: 992px) {
    > h2 {
      margin-bottom: 6rem;
    }
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
`;

const SharifEventsCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
`;

const SharifEventsCard = styled.div`
  position: relative;
  width: 20rem;
  height: 24rem;
  border-radius: 1.5rem;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    ${CardHover} {
      background-image: none;
      &:before {
        content: "";
        background: none !important;
      }
      background-color: #012761;
      transition: height 0.8s ease;
      height: 100%;
      opacity: 0.9;
    }

    .btn-show {
      transition: opacity 0.7s ease-in-out;
      opacity: 1;
    }
    .title-show {
      transition: opacity 0.7s ease-in-out;
      opacity: 0;
    }
  }
  @media (max-width: 992px) {
    width: 30rem;
    height: 25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
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
