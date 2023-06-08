"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

function Education() {
  const videoRef = useRef(null);
  const paraRef = useRef(null);

  const playIconRef = useRef(null);
  const [videoImage, setvideoImage] = useState(false);
  const [paragImage, setParagImage] = useState(false);

  const handlePlay = () => {
    videoRef.current.setAttribute("controls", "true");
    videoRef.current.play();
    playIconRef.current.style.display = "none";
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setvideoImage(true);
        }
      });
    });
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [videoImage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setParagImage(true);
        }
      });
    });
    observer.observe(paraRef.current);
    return () => observer.disconnect();
  }, [paragImage]);

  return (
    <Container>
      <SectionTop>
        <SectionIntro $educationParag={paragImage} ref={paraRef}>
          <h3>چرا تحصیل در دانشگاه صنعتی شریف؟</h3>
          <p>
            دانشگاه صنعتی شریف در سال ۱۳۴۴ با هدف تربیت و تامین بخشی از نیروهای
            متخصص موردنیاز کشور، در سطوح بالای علمی تاسیس گردید. این دانشگاه در
            مقایسه با بسیاری از دانشگاه‌های ایران و جهان دانشگاهی جوان و در حال
            رشد است. خوشبختانه در طول دوران فعالیت خود توانسته است به صورت یک
            موسسه علمی پیشرو در صنعت، فناوری‌های روز و علوم کاربردی در عرصه علم،
            منطقه‌ای و جهانی مطرح و جایگاه ارزشمندی پیدا کند.
          </p>
          <button>بیشتر بدانید</button>
        </SectionIntro>

        <SectionVideoContainer $education={videoImage}>
          <PlayIcon onClick={handlePlay} ref={playIconRef}>
            <img
              src="	https://www.sharif.edu/o/shu-theme/images/svg/play-button.svg"
              alt=""
            />
          </PlayIcon>
          <SectionVideo
            ref={videoRef}
            preload="none"
            poster="https://www.sharif.edu/documents/47992/0/article.jpg/1f15042c-dcdc-68ca-723f-0911432a4b45?t=1605397541761"
          >
            <source
              src="https://www.sharif.edu/documents/47992/1132281/%DA%86%D8%B1%D8%A7+%D8%B4%D8%B1%DB%8C%D9%81.mp4/784c1948-9a52-36fd-7bd9-1c4fc6027373?t=1623174817891"
              type="video/mp4"
            />
          </SectionVideo>
        </SectionVideoContainer>
      </SectionTop>
    </Container>
  );
}

export default Education;

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
  background-color: #29c3be;
  padding: 2rem;
  padding-top: 8rem;
  margin-top: 13rem;
  height: 29rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const SectionIntro = styled.div`
  position: relative;
  > h3 {
    color: white;
    font-size: 25px;
    font-weight: 800;
  }
  > p {
    max-width: 40rem;
    line-height: 2rem;
    font-size: 19px;
    color: #465252;
    margin-top: 1.5rem;
  }
  > button {
    background-color: #f93d52;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 1.5rem;
    border: none;
    font-size: 18px;
    font-weight: 800;
    border-radius: 1.7rem;
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: 0px 0.286em 0.286em rgba(0, 0, 0, 0.25);
  }
  flex: 1;
  visibility: hidden;
  visibility: ${(props) => (props.$educationParag ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$educationParag ? FadeIn : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;

  @media (max-width: 1369px) {
    > h3 {
      color: white;
      font-size: 25px;
      font-weight: 800;
    }
    > p {
      max-width: 40rem;
      line-height: 2rem;
      font-size: 19px;
      color: #465252;
      margin-top: 1.5rem;
    }
    top: -10rem;
  }
  @media (max-width: 768px) {
    top: -15rem;
    > h3 {
      margin-right: 9rem;
    }
    > p {
      margin-right: 9rem;
    }
    > button {
      bottom: -4rem;
      left: 30rem;
    }
  }
`;

const SectionVideo = styled.video`
  display: block;
  position: absolute;
  top: -22rem;
  left: 0rem;
  width: 42rem;
  height: 25rem;
  box-shadow: 0px 0.286em 0.286em rgba(0, 0, 0, 0.25);
  border-radius: 2.5rem;
  &[poster] {
    object-fit: fill;
  }
  @media (max-width: 1369px) {
    width: 27rem;
    height: 23rem;
    top: -32rem;
  }
  @media (max-width: 768px) {
    width: 40rem;
  }
`;

const SectionTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 83rem;
  margin: 0 auto;

  @media (max-width: 1369px) {
    max-width: 75rem;
    margin: 0 auto;
    margin-top: 10rem;
  }

  @media (max-width: 1244px) {
    max-width: 70rem;
    margin: 0 auto;
    margin-top: 10rem;
  }
`;

const PlayIcon = styled.div`
  cursor: pointer;
  border-radius: 2.5rem;
  z-index: 100;
  color: red;
  position: absolute;
  top: -12rem;
  left: 19.2rem;

  @media (max-width: 1369px) {
    position: absolute;
    top: -23rem;
    left: 11.2rem;
  }

  @media (max-width: 768px) {
    left: 17.2rem;
  }
`;
const SectionVideoContainer = styled.div`
  position: relative;
  visibility: hidden;
  visibility: ${(props) => (props.$education ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$education ? FadeIn : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  @media (max-width: 768px) {
    top: 29rem;
    left: 13rem;
  }
`;
