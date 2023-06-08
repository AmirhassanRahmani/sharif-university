"use client";
import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ExplicitIcon from "@mui/icons-material/Explicit";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useInView from "../../utils/useInView";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [arrow, setArrow] = useState(false);
  const rotateArrow = useRef(null);
  const ulRef = useRef(null);
  const headerRef = useRef(null);
  const handleMenu = () => {
    setShowHeader(true);
  };
  const closeMenu = () => {
    setShowHeader(false);
  };
  const handleUnderUl = () => {
    rotateArrow.current.style.transition = "all 0.3s";
    rotateArrow.current.classList.toggle("spining");
    if (rotateArrow.current.classList.contains("spining")) {
      ulRef.current.style.display = "block";
    } else {
      ulRef.current.style.display = "none";
    }
  };

  const [BooleanHeader] = useInView(headerRef);

  return (
    <HeaderContainer ref={headerRef} $headerZ={BooleanHeader}>
      <HeaderTop>
        <HeaderLogo $fadeAnimate={showHeader}>
          <ImageContainer src="https://www.sharif.edu/documents/20124/0/logo-fa-IR.png/4d9b72bc-494b-ed5a-d3bb-e7dfd319aec8?t=1609608338755" />
          <h1>دانشگاه صنعتی شریف</h1>
        </HeaderLogo>
        <HeaderTopIcons>
          <IconButton>
            <ExplicitIcon />
          </IconButton>
          <IconButton>
            <PermIdentityIcon />
          </IconButton>
          <IconButton>
            <MenuIcon onClick={handleMenu} />
          </IconButton>
          <HeaderClick $showHeaderClick={showHeader}>
            <HeaderClickTop>
              <div>
                <img
                  src="https://www.sharif.edu/documents/20124/0/logo-fa-IR.png/4d9b72bc-494b-ed5a-d3bb-e7dfd319aec8?t=1609608338755"
                  alt=""
                  width={45}
                />
                <p>دانشگاه صنعتی شریف</p>
              </div>
              <div>
                <HighlightOffIcon onClick={closeMenu} />
              </div>
            </HeaderClickTop>
            <HeaderClickSearch>
              <div>
                <input type="text" placeholder="جستجو" />
                <SearchIcon className="searchInput" />
              </div>
            </HeaderClickSearch>
            <HeaderClickUl>
              <ul>
                <li>hassan</li>
                <li style={{ backgroundColor: "lightgray" }}>
                  <div>
                    <p>hassan</p>
                    <span
                      $rot={arrow}
                      onClick={handleUnderUl}
                      ref={rotateArrow}
                    >
                      <ArrowBackIosNewIcon />
                    </span>
                  </div>
                  <ul
                    //  $showUl={arrow}
                    ref={ulRef}
                  >
                    <li>salam</li>
                    <li>salam</li>
                    <li>salam</li>
                    <li>salam</li>
                    <li>salam</li>
                    <li>salam</li>
                    <li>salam</li>
                    <li>salam</li>
                    <li>salam</li>
                  </ul>
                </li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
                <li>hassan</li>
              </ul>
            </HeaderClickUl>
          </HeaderClick>
        </HeaderTopIcons>
      </HeaderTop>
      <HeaderBottom>
        <UnList>
          <li>
            صفحه اصلی
            <Anima></Anima>
          </li>
          <li>
            <KeyboardArrowDownIcon />
            صفحه اصلی
            <Anima></Anima>
            <ShowList>
              <li>آموزش</li>
              <li>حوزه ریاست دانشگاه صنعتی شریف</li>
              <li>نهاد نمایندگی مقام معظم رهبری</li>
              <li>نهاد نمایندگی مقام معظم رهبری</li>
              <li>نهاد نمایندگی مقام معظم رهبری</li>
              <li>نهاد نمایندگی مقام معظم رهبری</li>
              <li>نهاد نمایندگی مقام معظم رهبری</li>
            </ShowList>
          </li>
          <li>
            صفحه اصلی
            <Anima></Anima>
          </li>
          <li>
            صفحه اصلی
            <Anima></Anima>
          </li>
          <li>
            صفحه اصلی
            <Anima></Anima>
          </li>
          <li>
            صفحه اصلی
            <Anima></Anima>
          </li>
          <li>
            صفحه اصلی
            <Anima></Anima>
          </li>
          <li></li>
        </UnList>
        <div>
          <SearchIcon />
        </div>
      </HeaderBottom>
    </HeaderContainer>
  );
}

export default Header;

const Fade = keyframes`
  0%{
    opacity: 0;
    transform: translateZ(1) ;

  }
  100%{
    opacity: 1;
    transform: translateZ(0) ;
  }
`;

const ImageContainer = styled.img`
  position: absolute;
  top: 0;
  width: 105px;
  background-color: #012e51;
  border: 12px solid #012e51;
  border-radius: 100%;
  @media (max-width: 992px) {
    border: none;
    width: 56px;
    right: 6rem;
    top: 0.5rem;
  }
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1000;
  animation-name: ${(props) => (props.$headerZ ? Fade : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
`;

const HeaderTop = styled.div`
  color: white;
  background-color: #012e51;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  position: relative;
  @media (max-width: 992px) {
    padding: 1.3rem;
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  > h1 {
    font-size: 1.6rem;
    margin-right: 9rem;
  }
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.$fadeAnimate ? 0 : 1)};
`;

const HeaderTopIcons = styled.div`
  * {
    color: white;
    font-size: 1.2rem;
  }
`;

const HeaderClick = styled.div`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  display: none;
  background-color: #012e51;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, 0);
  border-bottom-right-radius: 1.5rem;
  @media (max-width: 992px) {
    display: ${(props) => (props.$showHeaderClick ? "inline-block" : "none")};
    transform: ${(props) =>
      props.$showHeaderClick ? "translate(0, 0)" : "translate(-100%, 0)"};
  }
`;

const HeaderClickTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  > :first-child {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    > img {
      margin-left: 0.8rem;
    }
  }
`;
const HeaderClickSearch = styled.div`
  > div {
    display: flex;
    align-items: center;
    background-color: lightgray;
    border-top-right-radius: 0.9rem;
    border-bottom-right-radius: 0.9rem;
    > input {
      border: none;
      padding: 0.4rem;
      outline: none;
      background: none;
      border-left: 1px solid gray;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      ::placeholder {
        color: gray;
        font-size: 0.9rem;
        padding: 0 0.6rem;
      }
    }
    > :last-child > * {
      color: black;
    }
    .searchInput {
      font-size: 1rem;
      margin: 0 1rem;
    }
  }
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const HeaderClickUl = styled.div`
  background-color: whitesmoke;
  color: gray;
  border-bottom-right-radius: 1.5rem;
  overflow: hidden;
  overflow-y: scroll;
  height: 40rem;
  > ul > li {
    color: black;
    padding: 1rem;
    border-bottom: 0.1px solid gray;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    > ul {
      padding: 0;
      margin-top: 1rem;
      > li {
        color: black;
        line-height: 3rem;
      }
    }
  }
  > ul > :nth-child(2) > div :last-child * {
    color: black;
  }
  > ul > :nth-child(2) > div > p {
    color: black;
  }

  > ul > :nth-child(2) > ul {
    display: none;
  }
`;

const HeaderBottom = styled.div`
  background-color: #012e99;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 2.9rem;
  > div {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.9rem;
    height: 1.4rem;
    margin-left: 1.4rem;
    border-radius: 1rem;
    > :first-child {
      font-size: 1.2rem;
      color: #012e99;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

const ShowList = styled.ul`
  list-style-type: none;
  visibility: hidden;
  background-color: #ffffff;
  color: black;
  width: 18rem;
  position: absolute;
  top: 2.1rem;
  padding: 20px;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  > li {
    padding: 10px;
    cursor: pointer;
    &:hover {
      transition: all 0.2s;
      color: crimson;
    }
  }
`;

const Anima = styled.div`
  position: absolute;
  top: 1.7rem;
  background-color: orange;
  width: 0;
  height: 3px;
  transition: width 0.3s;
`;

const UnList = styled.ul`
  position: relative;
  padding: 10px;
  display: flex;
  flex: 1;
  list-style-type: none;
  margin-right: 9rem;
  position: relative;
  > * {
    position: relative;
    padding: 0 10px;
    padding-bottom: 7px;
    color: white;
    border-bottom: 1px solid gray;
    &:hover {
      transition: color 0.4s;
      color: #f73d52;
      cursor: pointer;
    }
  }
  > * {
    &:hover {
      ${Anima} {
        width: 5.2rem;
      }
    }
  }
  > :nth-child(2) {
    display: flex;
    position: relative;

    &:hover {
      ${ShowList} {
        transition: all 0.4s;
        visibility: visible;
      }
    }
    > :first-child {
      margin-top: -3px;
    }
  }
`;
