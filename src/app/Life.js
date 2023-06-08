"use client";

import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import useInView from "../../utils/useInView";

function Life() {
  const rotateHeaderTop = useRef(null);
  const rotateHeaderBottom = useRef(null);
  const rotateRightImage = useRef(null);
  const rotateLeftImage = useRef(null);
  const rotateLeftImageChilds = useRef(null);

  const [BooleanHeaderTop] = useInView(rotateHeaderTop, 1000);
  const [BooleanHeaderBottom] = useInView(rotateHeaderBottom);
  const [BooleanRotateRightImage] = useInView(rotateRightImage);
  const [BooleanRotateLeftImage] = useInView(rotateLeftImage);
  const [BooleanRotateChildImages] = useInView(rotateLeftImageChilds);

  return (
    <Container>
      <Header>
        <HeaderOne ref={rotateHeaderTop} $lifeIn={BooleanHeaderTop}>
          زندگی در شریف
        </HeaderOne>
        <HeaderTwo ref={rotateHeaderBottom} $exp={BooleanHeaderBottom}>
          بهترین تجربه زندگی دانشجویی در شریف
        </HeaderTwo>
      </Header>
      <Main>
        <MainRight
          ref={rotateRightImage}
          $univImageRotate={BooleanRotateRightImage}
        >
          <RightItem>
            <div>
              <img
                src="https://www.sharif.edu/documents/47992/0/article.jpg/1f15042c-dcdc-68ca-723f-0911432a4b45?t=1605397541761"
                alt=""
                className="imageLife"
              />
            </div>
            <div className="up">
              <h3>محیط دانشگاه</h3>
              <p> فراهم کردن بستر علمی با هدف رشد علمی در شریف</p>
            </div>
          </RightItem>
        </MainRight>
        <MainLeft>
          <LeftItem
            ref={rotateLeftImage}
            $univImageRotateLeft={BooleanRotateLeftImage}
            className="upRow"
          >
            <section className="lifeOne">
              <div>
                <img
                  src="https://www.sharif.edu/documents/48575/1216811/%D8%B4%D8%B1%DB%8C%D9%81%2B+%D8%A2%D9%82%D8%A7%DB%8C%D8%A7%D9%86.jpg/60bac611-b49e-cfaa-c986-ba5e41b91362?t=1628453631000"
                  alt=""
                  className="imageLife1"
                />
              </div>
              <div className="life1">
                <h3>محیط دانشگاه</h3>
                <p> فراهم کردن بستر علمی با هدف رشد علمی در شریف</p>
              </div>
            </section>
          </LeftItem>

          <LeftItemContainer
            ref={rotateLeftImageChilds}
            $foodRotate={BooleanRotateChildImages}
          >
            <section className="lifeTwo">
              <div>
                <img
                  src="https://www.sharif.edu/documents/47992/0/%D8%B9%D9%84%D9%85%DB%8C-900x570.jpg/53eaa596-2a32-24fa-6562-763225ef3e67?t=1607802382432"
                  alt=""
                  className="imageLife2"
                />
              </div>
              <div className="life2">
                <h3>محیط دانشگاه</h3>
                <p> فراهم کردن بستر علمی با هدف رشد علمی در شریف</p>
              </div>
            </section>
            <section className="lifeThree">
              <div>
                <img
                  src="https://www.sharif.edu/documents/47992/0/article+%282%29.jpg/8a79ddbe-867f-f22d-5cdd-49e3482220fb?t=1628324608152"
                  alt=""
                  className="imageLife3"
                />
              </div>
              <div className="life3">
                <h3>محیط دانشگاه</h3>
                <p> فراهم کردن بستر علمی با هدف رشد علمی در شریف</p>
              </div>
            </section>
          </LeftItemContainer>
        </MainLeft>
      </Main>
      <ButtonContainer>
        <button>مشاهده همه</button>
      </ButtonContainer>
    </Container>
  );
}

export default Life;

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

const RotateImage = keyframes`
0%{
  transform:perspective(2500px) rotateY(-100deg);

}
100%{
  transform:perspective(2500px) rotateY(0);
}
`;

const Container = styled.div`
  max-width: 83rem;
  margin: 0 auto;
  margin-top: 12rem;

  @media (max-width: 1369px) {
    max-width: 65rem;
    margin: 0 auto;
    margin-top: 7rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 17rem;
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
  @media (max-width: 768px) {
    position: relative;
    top: 14rem;
    left: 28rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const HeaderOne = styled.h1`
  margin-bottom: 1rem;
  color: #0042a9;
  font-weight: 900;
  visibility: hidden;
  visibility: ${(props) => (props.$lifeIn ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$lifeIn ? ShowImage : null)};
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const HeaderTwo = styled.h2`
  color: #29c3be;
  font-weight: 600;
  font-size: 1.3rem;
  visibility: hidden;
  visibility: ${(props) => (props.$exp ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$exp ? ShowImage : null)};
  animation-duration: 3.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.7rem;
  margin-top: 3rem;
  max-width: 83rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: grid;
    justify-content: space-evenly;
  }
`;

const MainRight = styled.div`
  visibility: hidden;
  visibility: ${(props) => (props.$univImageRotate ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$univImageRotate ? RotateImage : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  width: 42rem;
  height: 24rem;
  border-radius: 2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .up {
    position: absolute;
    width: 100%;
    height: 40%;
    padding: 1rem;
    right: 0;
    bottom: -6rem;
    z-index: 10;
    /* background-color: #fff; */
    opacity: 0.8;
    > h3 {
      margin-bottom: 1.5rem;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    > p {
      color: yellow;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .imageLife {
    width: 100%;
    /* opacity: 0.6; */
    height: 24rem;
    border-radius: 2rem;
    object-fit: fill;
    filter: brightness(70%);
  }

  &:hover {
    .up {
      transition: all 0.4s;
      bottom: -2rem;
    }
    ${this} {
      background-color: blue;
    }
    .imageLife {
      opacity: 0.6;
    }
  }
  @media (max-width: 1340px) {
    width: 35rem;
  }
  @media (max-width: 1340px) {
    width: 45rem;
  }
`;

const LeftItem = styled.div`
  visibility: hidden;
  visibility: ${(props) => (props.$univImageRotateLeft ? "visible" : "hidden")};
  animation-name: ${(props) =>
    props.$univImageRotateLeft ? RotateImage : null};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  @media (max-width: 768px) {
    width: 45rem;
  }
`;

const MainLeft = styled.div`
  width: 42rem;
  height: 24rem;
  border-radius: 2rem;
  .imageLife1 {
    width: 100%;
    height: 12rem;
    border-radius: 2rem;
    filter: brightness(70%);
  }
  .imageLife2 {
    width: 20rem;
    height: 12rem;
    border-radius: 2rem;
    filter: brightness(70%);
    @media (max-width: 768px) {
      width: 45rem;
      /* height: 15rem; */
    }
  }
  .imageLife3 {
    width: 20rem;
    height: 12rem;
    border-radius: 2rem;
    filter: brightness(70%);
    @media (max-width: 768px) {
      width: 45rem;
      /* height: 15rem; */
    }
  }
  .lifeOne {
    position: relative;
    border-radius: 2rem;
    height: 11rem;
    overflow: hidden;
    &:hover {
      .life1 {
        transition: all 0.4s;
        bottom: 1rem;
      }
      ${this} {
        background-color: blue;
      }
      .imageLife1 {
        opacity: 0.7;
      }
    }
  }
  .life1 {
    position: absolute;
    bottom: -1.6rem;
    right: 0;
    padding: 0.7rem;
    /* background-color: pink; */
    > h3 {
      margin-bottom: 1rem;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    > p {
      color: yellow;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 1369px) {
    width: 35rem;
  }
`;

const LeftItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12rem;
  margin-top: 1rem;

  .lifeTwo {
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    &:hover {
      .life2 {
        transition: all 0.4s;
        bottom: 1rem;
      }
      ${this} {
        background-color: blue;
      }
      .imageLife2 {
        opacity: 0.7;
      }
    }
    @media (max-width: 768px) {
      width: 45rem;
    }
  }
  .life2 {
    position: absolute;
    bottom: -1.6rem;
    right: 0.7rem;
    > h3 {
      margin-bottom: 1rem;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    > p {
      color: yellow;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .lifeThree {
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    &:hover {
      .life3 {
        transition: all 0.4s;
        bottom: 1rem;
      }
      ${this} {
        background-color: blue;
      }
      .imageLife3 {
        opacity: 0.7;
      }
    }
    @media (max-width: 768px) {
      width: 45rem;
    }
  }
  .life3 {
    position: absolute;
    bottom: -1.6rem;
    right: 0.7rem;
    > h3 {
      margin-bottom: 1rem;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    > p {
      color: yellow;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  > * {
    visibility: hidden;
    visibility: ${(props) => (props.$foodRotate ? "visible" : "hidden")};
    animation-name: ${(props) => (props.$foodRotate ? RotateImage : null)};
    animation-duration: 0.7s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }
  @media (max-width: 1369px) {
    gap: 0.5rem;
  }

  @media (max-width: 1244px) {
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    display: block;
    width: 45rem;
  }
`;

const RightItem = styled.div``;
