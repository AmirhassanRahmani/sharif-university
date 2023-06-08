"use client";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useInView from "../../utils/useInView";

function HeaderImage() {
  const imageRef = useRef(null);
  const handlePage = () => {
    let step = 20;
    if (window.pageYOffset > 600) {
      return;
    }
    window.scrollBy(0, step);
    setTimeout(() => {
      handlePage();
    }, 10);
  };

  const [BooleanImage] = useInView(imageRef);

  return (
    <Container>
      <ImageContainer
        src="https://www.sharif.edu/documents/47992/48029/sardar-1.jpg/e498e166-7ea6-79b5-eadf-a916147a1177?t=1625580960184"
        ref={imageRef}
        $imageShow={BooleanImage}
      />

      <ImageBottomRight src="https://www.sharif.edu/image/journal/article?img_id=11056126&t=1683008236748" />

      <HoverImage>
        <div>
          <h3>خرداد 1402</h3>
          <HighlightOffIcon />
        </div>
        <div>
          <p> آیین دانش آموختگی سال تحصیلی</p>
          <p>1400-1401</p>
        </div>
      </HoverImage>

      <ImageFooter>
        <h3>دانشگاه صنعتی شریف، پرچم‌دار بیداری و تفکر علمی کشور</h3>
        <h3 onClick={handlePage}>
          ادامه بدهید
          <KeyboardArrowDownIcon />
        </h3>
        <ImageTemplate>
          <p>شریف من</p>
          <ImageTopLeft src="https://www.sharif.edu/documents/20124/0/My_sharif_New_1-min.png/85929f84-1040-ca3f-6d90-e237303f7460?t=1662443264697" />
        </ImageTemplate>
      </ImageFooter>
    </Container>
  );
}

export default HeaderImage;

const Container = styled.div``;

const ImageContainer = styled.img`
  position: relative;
  object-fit: fill;
  height: 80vh;
  width: 100vw;
  max-width: 100%;
  display: block;
  @media (max-width: 1212px) {
    width: 100vw;
    min-width: 100%;
  }
  transition: opacity 1s ease;
  opacity: ${(props) => (props.$imageShow ? 1 : 0)};
`;

const HoverImage = styled.div`
  position: absolute;
  /* bottom: 4rem; */
  bottom: 6rem;
  right: 2rem;
  width: 17rem;
  height: 10rem;
  padding: 15px;
  visibility: hidden;
  border-radius: 1rem;
  > * {
    color: white;
  }
  > :first-child {
    display: flex;
    margin-bottom: 2rem;
    > h3 {
      flex: 1;
      color: yellow;
    }
  }
  > :nth-child(2) {
    > :first-child {
      margin-bottom: 1rem;
    }
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background: url("https://www.sharif.edu/o/shu-theme/images/svg/news.svg")
      no-repeat right 3.56rem;
  }
  background: linear-gradient(231.85deg, #012761 15.67%, #0148b0 98.6%);
  @media (max-width: 992px) {
    position: absolute;
    border: 1px solid white;
    border-radius: 1rem;
    bottom: 7rem;
    right: 2rem;
    visibility: visible;
  }
`;

const ImageBottomRight = styled.img`
  position: absolute;
  border: 1px solid white;
  border-radius: 1rem;
  /* bottom: 4rem; */
  bottom: 6rem;
  right: 2rem;
  &:hover ~ ${HoverImage} {
    visibility: visible;
  }
  &:hover {
    visibility: hidden;
  }

  @media (max-width: 992px) {
    position: absolute;
    border: 1px solid white;
    border-radius: 1rem;
    bottom: 7rem;
    right: 2rem;
    visibility: hidden;
  }
`;

const ImageTopLeft = styled.img`
  width: 40px;
`;

const ImageTemplate = styled.div`
  position: absolute;
  top: -34rem;
  left: 2rem;
  background-color: #607a8c;
  padding: 10px;
  width: 120px;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  > p {
    color: white;
    flex: 1;
  }
`;

const ImageFooter = styled.div`
  display: flex;
  align-items: center;
  background-color: #012e51;
  padding: 13px;
  height: 3.7rem;
  position: relative;
  > :first-child {
    color: white;
    flex: 1;
  }
  > :nth-child(2) {
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
