"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Informations() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersectingOne, setIsIntersectingOne] = useState(false);
  const [isIntersectingTwo, setIsIntersectingTwo] = useState(false);

  const refImage = useRef(null);
  const refImageOne = useRef(null);
  const refImageTwo = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setTimeout(() => {
        setIsIntersecting(entry.isIntersecting);
      }, 400);
    });
    // console.log(isIntersecting);
    observer.observe(refImage.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const observerOne = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersectingOne(true);
        }
      });
    });
    // console.log(isIntersectingOne);
    observerOne.observe(refImageOne.current);
    return () => observerOne.disconnect();
  }, [isIntersectingOne]);

  useEffect(() => {
    const observerTwo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersectingTwo(true);
        }
      });
    });
    // console.log(isIntersectingOne);
    observerTwo.observe(refImageTwo.current);
    return () => observerTwo.disconnect();
  }, [isIntersectingTwo]);

  return (
    <Container>
      <HeaderComponent ref={refImage} $sel={isIntersecting}>
        اخبار و اطلاعیه‌ها
      </HeaderComponent>
      <InformationsContainer>
        <InformationCards>
          <InformationCardsTop ref={refImageOne} $info={isIntersectingOne}>
            <InformationSection>
              <img
                src="https://www.sharif.edu/image/journal/article?img_id=11274658&t=1683626003329"
                alt="info"
              />
              <h3>
                {" "}
                توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه
              </h3>
              <p>
                ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
                دانشگاه لومونوسف...
              </p>
            </InformationSection>
            <InformationSection>
              <img
                src="https://www.sharif.edu/image/journal/article?img_id=11348697&t=1683695912460"
                alt="info"
              />
              <h3>
                {" "}
                توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه
              </h3>
              <p>
                ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
                دانشگاه لومونوسف...
              </p>
            </InformationSection>
            <InformationSection>
              <img
                src="https://www.sharif.edu/image/journal/article?img_id=11321866&t=1683639978196"
                alt="info"
              />
              <h3>
                {" "}
                توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه
              </h3>
              <p>
                ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
                دانشگاه لومونوسف...
              </p>
            </InformationSection>
            <InformationSection>
              <img
                src="https://www.sharif.edu/image/journal/article?img_id=11313662&t=1683724464057"
                alt="info"
              />
              <h3>
                {" "}
                توسعه همکاری دانشگاه صنعتی شریف با دانشگاه‌های برتر روسیه
              </h3>
              <p>
                ششمین اجلاس روسای دانشگاه‌های برتر ایران و روسیه به میزبانی
                دانشگاه لومونوسف...
              </p>
            </InformationSection>
          </InformationCardsTop>
          <InformationCardsBottom
            ref={refImageTwo}
            $infoBottom={isIntersectingTwo}
          >
            <InformationSectionBottom>
              <img
                src="https://www.sharif.edu/image/journal/article?img_id=11244138&t=1683452838813"
                alt="teacher"
              />
              <section>
                <h3>برگزاری آیین نکوداشت دکتر سهراب‌پور در دانشگاه</h3>
                <p>
                  آیین نکوداشت دکتر سعید سهراب‌پور استاد پیشکسوت و ممتاز دانشکده
                  مهندسی مکانیک روز سه...
                </p>
                <p>
                  {" "}
                  <span>
                    <AccessTimeIcon />
                  </span>
                  <span> 6 اردیبهشت 1402</span>
                </p>
              </section>
            </InformationSectionBottom>
            <InformationSectionBottom>
              <img
                src="https://www.sharif.edu/image/journal/article?img_id=11241930&t=1683447601490"
                alt="teacher"
              />
              <section>
                <h3>برگزاری آیین نکوداشت دکتر سهراب‌پور در دانشگاه</h3>
                <p>
                  آیین نکوداشت دکتر سعید سهراب‌پور استاد پیشکسوت و ممتاز دانشکده
                  مهندسی مکانیک روز سه...
                </p>
                <p>
                  {" "}
                  <span>
                    <AccessTimeIcon />
                  </span>
                  <span> 6 اردیبهشت 1402</span>
                </p>
              </section>
            </InformationSectionBottom>
          </InformationCardsBottom>
        </InformationCards>
      </InformationsContainer>
      <PortableInfo>
        <h3>
          برای مشاهده اخبار و اطلاعیه های بیشتر، از پرتال خبری دانشگاه صنعتی
          شریف بازدید کنید.{" "}
        </h3>
        <button> پرتال خبری</button>
      </PortableInfo>
    </Container>
  );
}

export default Informations;

const Container = styled.div`
  background-color: whitesmoke;
  @media (max-width: 1369px) {
    width: 75rem;
    margin: 0 auto;
  }
  @media (max-width: 1244px) {
    width: 70rem;
    margin: 0 auto;
  }
`;

const HeaderComponent = styled.h2`
  text-align: center;
  line-height: 10rem;
  color: #3367b9;
  font-size: 30px;
  font-weight: 800;
  visibility: hidden;
  visibility: ${(props) => (props.$sel ? "visible" : "hidden")};
`;

const InformationsContainer = styled.div``;

const InformationCards = styled.div`
  max-width: 83rem;
  margin: 0 auto;
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

const InformationCardsTop = styled.div`
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  visibility: ${(props) => (props.$info ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$info ? FadeIn : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  @media (max-width: 1369px) {
    gap: 1rem;
  }
  @media (max-width: 992px) {
    /* display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
  }
`;

const InformationCardsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  visibility: ${(props) => (props.$infoBottom ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$infoBottom ? FadeIn : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  @media (max-width: 1369px) {
    gap: 1rem;
  }
  @media (max-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const InformationSectionBottom = styled.div`
  width: 650px;
  height: 200px;
  background-color: white;
  border-radius: 1.4rem;
  display: flex;
  position: relative;
  margin-bottom: 2.5rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.286em 2em rgba(0, 0, 0, 0.45);
    transition: transform 0.4s ease-out;
    transform: translateY(-0.3rem);
  }
  > img {
    width: 50%;
    border-top-right-radius: 1.4rem;
    border-bottom-right-radius: 1.4rem;
  }
  box-shadow: 0 0.286em 0.286em rgba(0, 0, 0, 0.25);
  > section {
    > h3 {
      color: #1a55b2;
      padding: 10px;
      margin-bottom: 1rem;
    }
    > p {
      padding: 10px;
      color: gray;
    }
    > :last-child {
      display: flex;
      align-items: center;
      justify-content: end;
      > span {
        margin-left: 1rem;
        font-size: 12px;
        > :first-child {
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    width: 970px;
    height: 200px;
  }
  @media (max-width: 768px) {
    width: 970px;
    height: 100px;
    > img {
      display: none;
    }
    > section {
      p {
        display: none;
      }
      > :last-child {
        position: absolute;
        left: 0;
      }
    }
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

const PortableInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 83rem;
  margin: 0 auto;
  > h3 {
    color: #06388b;
    font-weight: 700;
  }
  > button {
    background-color: #f93d52;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.5rem;
    border: none;
    font-size: 18px;
    font-weight: 800;
    border-radius: 1.7rem;
    margin-right: 1rem;
    box-shadow: 0px 0.286em 0.286em rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 992px) {
    justify-content: center;
  }
`;
