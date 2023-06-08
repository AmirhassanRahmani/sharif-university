"use client";

import styled, { keyframes } from "styled-components";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import { useEffect, useRef, useState } from "react";

function Learning() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hTwo, setHTwo] = useState(false);
  const [hFour, setHFour] = useState(false);
  const refImage = useRef(null);
  const h2ref = useRef(null);
  const h4ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    });
    observer.observe(refImage.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHTwo(true);
        }
      });
    });
    observer.observe(h2ref.current);
    return () => observer.disconnect();
  }, [hTwo]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHFour(true);
        }
      });
    });
    setTimeout(() => {
      observer.observe(h4ref.current);
    }, 1700);
    return () => observer.disconnect();
  }, [hFour]);

  return (
    <Container>
      <Header>
        <Header2 ref={h2ref} $headT={hTwo}>
          با تحصیل در شریف
        </Header2>
        <Header4 ref={h4ref} $headF={hFour}>
          یکی از برترین‌های مدیریت علمی، فنی و اجرایی کشور باشید
        </Header4>
      </Header>
      <ProofImageContainer>
        <ProofImage
          src="https://www.sharif.edu/documents/47992/75749/sharif-compress.jpg/68922d3c-bdb2-bd81-d5cf-86f07da7f03f?t=1665310344274"
          ref={refImage}
          $proof={isIntersecting}
        />
      </ProofImageContainer>
      <InfoBar>
        <InfoItem>
          <InfoItemHeader>
            <WheelchairPickupIcon />
          </InfoItemHeader>
          <h2>دکتری</h2>
          <InfoHover>
            <div>
              <WheelchairPickupIcon />
            </div>
            <div>
              <h2>دکتری</h2>
            </div>
            <ul>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
            </ul>
          </InfoHover>
        </InfoItem>
        <InfoItem>
          <InfoItemHeader>
            <WheelchairPickupIcon />
          </InfoItemHeader>
          <h2>دکتری</h2>
          <InfoHover>
            <div>
              <WheelchairPickupIcon />
            </div>
            <div>
              <h2>دکتری</h2>
            </div>
            <ul>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
            </ul>
          </InfoHover>
        </InfoItem>
        <InfoItem>
          <InfoItemHeader>
            <WheelchairPickupIcon />
          </InfoItemHeader>
          <h2>دکتری</h2>
          <InfoHover>
            <div>
              <WheelchairPickupIcon />
            </div>
            <div>
              <h2>دکتری</h2>
            </div>
            <ul>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
            </ul>
          </InfoHover>
        </InfoItem>
        <InfoItem>
          <InfoItemHeader>
            <WheelchairPickupIcon />
          </InfoItemHeader>
          <h2>دکتری</h2>
          <InfoHover>
            <div>
              <WheelchairPickupIcon />
            </div>
            <div>
              <h2>دکتری</h2>
            </div>
            <ul>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
              <li>
                رشته <span>: 20</span>
              </li>
            </ul>
          </InfoHover>
        </InfoItem>
      </InfoBar>
    </Container>
  );
}

export default Learning;

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
const Container = styled.div``;

const Header = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const Header2 = styled.div`
  color: #0049a9;
  margin-bottom: 1rem;
  font-size: 1.9rem;
  font-weight: 700;
  visibility: hidden;
  visibility: ${(props) => (props.$headT ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$headT ? ShowImage : null)};
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const Header4 = styled.div`
  color: #29c3be;
  font-size: 1.3rem;
  font-weight: 600;
  visibility: hidden;
  visibility: ${(props) => (props.$headF ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$headF ? ShowImage : null)};
  animation-duration: 3.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const ProofImageContainer = styled.div``;

const InfoHover = styled.div`
  width: 14rem;
  height: 15rem;
  padding: 1.4rem;
  background-color: white;
  box-shadow: 0px 1.071em 1.429em rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  position: relative;
  top: -15rem;
  visibility: hidden;
  > :first-child {
    background: linear-gradient(
      234.26deg,
      #0ebcb6 11.37%,
      #023d9d 62.27%,
      #013c9c 65.1%
    );
    color: white;
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    padding: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    > :first-child {
      font-size: xx-large;
    }
  }
  > :nth-child(2) {
    line-height: 4rem;
  }
  > :nth-child(3) {
    > li span {
      color: orange !important;
    }
  }
`;

const ProofImage = styled.img`
  width: 100%;
  height: 34.714em;
  object-fit: cover !important;
  box-shadow: 0px 1.071em 1.429em rgba(0, 0, 0, 0.2);
  visibility: hidden;
  visibility: ${(props) => (props.$proof ? "visible" : "hidden")};
  animation-name: ${(props) => (props.$proof ? ShowImage : null)};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60rem;
  max-height: 10rem;
  margin: 0 auto;
  padding: 1rem;
  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    max-width: 31rem;
    margin-bottom: 30rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;
  &:hover {
    ${InfoHover} {
      visibility: visible;
    }
  }
  @media (max-width: 992px) {
    > h2 {
      display: none;
    }
    ${InfoHover} {
      visibility: visible;
      top: 0;
      margin: 0 auto;
    }
    gap: 3rem;
  }
`;

const InfoItemHeader = styled.div`
  background: linear-gradient(
    234.26deg,
    #0ebcb6 11.37%,
    #023d9d 62.27%,
    #013c9c 65.1%
  );
  color: white;
  border-radius: 100%;
  width: 6rem;
  height: 6rem;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
  > :first-child {
    font-size: xx-large;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;
