"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";

function Counter() {
  const [counter, setCounter] = useState(false);
  const studentsRef = useRef(null);

  let incr = 0;
  const incShow = useRef(null);
  const incShow1 = useRef(null);
  const incShow2 = useRef(null);
  const incShow3 = useRef(null);
  const incShow4 = useRef(null);

  const handleIncr = () => {
    incShow.current.innerHTML = incr;
    incShow1.current.innerHTML = incr;
    incShow2.current.innerHTML = incr;
    incShow3.current.innerHTML = incr;
    incShow4.current.innerHTML = incr;
    incr++;
    let timeData = setTimeout(() => {
      handleIncr();
    }, 1);
    if (incr >= 1070) {
      incr = 0;
      clearTimeout(timeData);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounter(true);
        }
      });
    });
    observer.observe(studentsRef.current);
    handleIncr();
    return () => observer.disconnect();
  }, [counter]);

  return (
    <Container>
      <StudenContainer $colorNumber={counter} ref={studentsRef}>
        <Student>
          <div>
            <WheelchairPickupIcon />
          </div>
          <div ref={incShow}></div>
          <div>دانشجویان</div>
        </Student>
        <Student>
          <div>
            <WheelchairPickupIcon />
          </div>
          <div ref={incShow1}></div>
          <div>دانشجویان</div>
        </Student>
        <Student>
          <div>
            <WheelchairPickupIcon />
          </div>
          <div ref={incShow2}></div>
          <div>دانشجویان</div>
        </Student>
        <Student>
          <div>
            <WheelchairPickupIcon />
          </div>
          <div ref={incShow3}></div>
          <div>دانشجویان</div>
        </Student>
        <Student>
          <div>
            <WheelchairPickupIcon />
          </div>
          <div ref={incShow4}></div>
          <div>دانشجویان</div>
        </Student>
      </StudenContainer>
      <FloatDiv>آخرین تاریخ به روزرسانی: 6 اردیبهشت 1402</FloatDiv>
    </Container>
  );
}

export default Counter;

const ShowUp = keyframes`
0%{
  opacity: 0;
  transform: translate3d(0,140px,0);
}
100%{
  opacity: 1;
  transform: translate3d(0,0,0);
}
`;

const Container = styled.div`
  max-width: 60rem;
  height: 15rem;
  margin: 0 auto;
  position: relative;
  top: -4rem;
  @media (max-width: 768px) {
    top: 16rem;
    margin-bottom: 25rem;
    width: 40rem;
  }
`;

const FloatDiv = styled.div`
  text-align: center;
  color: gray;
  position: relative;
  top: -1.8rem;
`;

const StudenContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0px 0.286em 0.286em rgba(0, 0, 0, 0.25);
  > :first-child {
    visibility: ${(props) => (props.$colorNumber ? "visible" : "hidden")};
    animation-name: ${(props) => (props.$colorNumber ? ShowUp : null)};
    animation-duration: 0.1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }
  > :nth-child(2) {
    visibility: ${(props) => (props.$colorNumber ? "visible" : "hidden")};
    animation-name: ${(props) => (props.$colorNumber ? ShowUp : null)};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }
  > :nth-child(3) {
    visibility: ${(props) => (props.$colorNumber ? "visible" : "hidden")};
    animation-name: ${(props) => (props.$colorNumber ? ShowUp : null)};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }
  > :nth-child(4) {
    visibility: ${(props) => (props.$colorNumber ? "visible" : "hidden")};
    animation-name: ${(props) => (props.$colorNumber ? ShowUp : null)};
    animation-duration: 0.7s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }
  > :nth-child(5) {
    visibility: ${(props) => (props.$colorNumber ? "visible" : "hidden")};
    animation-name: ${(props) => (props.$colorNumber ? ShowUp : null)};
    animation-duration: 0.9s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }
`;

const Student = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    > * {
      font-size: xx-large;
    }
    margin-bottom: 1rem;
  }
  > :nth-child(2) {
    font-size: 1.5rem;
    font-weight: bold;
    background: -webkit-linear-gradient(red, orange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  > :nth-child(3) {
    color: #012e71;
    font-weight: bold;
    margin-top: 0.2rem;
  }
`;
