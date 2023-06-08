"use client";
import styled, { keyframes } from "styled-components";
import FactoryIcon from "@mui/icons-material/Factory";
import { useRef, useState } from "react";
import useInView from "../../utils/useInView";

function Triangle() {
  const [data, setData] = useState(false);
  const [dataTwo, setDataTwo] = useState(false);
  const [dataThree, setDataThree] = useState(false);
  const [dataFour, setDataFour] = useState(false);
  const [dataFive, setDataFive] = useState(false);
  const [dataSix, setDataSix] = useState(false);
  const [dataSeven, setDataSeven] = useState(false);
  const [dataEight, setDataEight] = useState(false);
  const refNav = useRef(null);
  const lineRef = useRef(null);
  const [BooleanTriangle] = useInView(refNav);
  // ****
  const orangeOne = useRef(null);
  const navListOne = useRef(null);

  const orangeTwo = useRef(null);
  const navListTwo = useRef(null);

  const orangeThree = useRef(null);
  const navListThree = useRef(null);

  const orangeFour = useRef(null);
  const navListFour = useRef(null);

  const orangeFive = useRef(null);
  const navListFive = useRef(null);

  const orangeSix = useRef(null);
  const navListSix = useRef(null);

  const orangeSeven = useRef(null);
  const navListSeven = useRef(null);

  const orangeEight = useRef(null);
  const navListEight = useRef(null);

  const showBox = () => {
    setData(true);
    if (dataTwo) {
      setDataTwo(false);
    }
    if (dataThree) {
      setDataThree(false);
    }
    if (dataFour) {
      setDataFour(false);
    }
    if (dataFive) {
      setDataFive(false);
    }
    if (dataSix) {
      setDataSix(false);
    }
    if (dataSeven) {
      setDataSeven(false);
    }
    if (dataEight) {
      setDataEight(false);
    }
    orangeOne.current.style.visibility = "visible";
    navListOne.current.style.opacity = "1";

    orangeTwo.current.style.visibility = "hidden";
    navListTwo.current.style.opacity = "0.6";

    orangeThree.current.style.visibility = "hidden";
    navListThree.current.style.opacity = "0.6";

    orangeFour.current.style.visibility = "hidden";
    navListFour.current.style.opacity = "0.6";

    orangeFive.current.style.visibility = "hidden";
    navListFive.current.style.opacity = "0.6";

    orangeSix.current.style.visibility = "hidden";
    navListSix.current.style.opacity = "0.6";

    orangeSeven.current.style.visibility = "hidden";
    navListSeven.current.style.opacity = "0.6";

    orangeEight.current.style.visibility = "hidden";
    navListEight.current.style.opacity = "0.6";
  };
  const showBoxTwo = () => {
    setDataTwo(true);
    if (data) {
      setData(false);
    }
    if (dataThree) {
      setDataThree(false);
    }
    if (dataFour) {
      setDataFour(false);
    }
    if (dataFive) {
      setDataFive(false);
    }
    if (dataSix) {
      setDataSix(false);
    }
    if (dataSeven) {
      setDataSeven(false);
    }
    if (dataEight) {
      setDataEight(false);
    }
    orangeOne.current.style.visibility = "hidden";
    navListOne.current.style.opacity = "0.6";

    orangeTwo.current.style.visibility = "visible";
    navListTwo.current.style.opacity = "1";

    orangeThree.current.style.visibility = "hidden";
    navListThree.current.style.opacity = "0.6";

    orangeFour.current.style.visibility = "hidden";
    navListFour.current.style.opacity = "0.6";

    orangeFive.current.style.visibility = "hidden";
    navListFive.current.style.opacity = "0.6";

    orangeSix.current.style.visibility = "hidden";
    navListSix.current.style.opacity = "0.6";

    orangeSeven.current.style.visibility = "hidden";
    navListSeven.current.style.opacity = "0.6";

    orangeEight.current.style.visibility = "hidden";
    navListEight.current.style.opacity = "0.6";
  };

  const showBoxThree = () => {
    setDataThree(true);
    if (data) {
      setData(false);
    }
    if (dataTwo) {
      setDataTwo(false);
    }
    if (dataFour) {
      setDataFour(false);
    }
    if (dataFive) {
      setDataFive(false);
    }
    if (dataSix) {
      setDataSix(false);
    }
    if (dataSeven) {
      setDataSeven(false);
    }
    if (dataEight) {
      setDataEight(false);
    }

    orangeOne.current.style.visibility = "hidden";
    navListOne.current.style.opacity = "0.6";

    orangeTwo.current.style.visibility = "hidden";
    navListTwo.current.style.opacity = "0.6";

    orangeThree.current.style.visibility = "visible";
    navListThree.current.style.opacity = "1";

    orangeFour.current.style.visibility = "hidden";
    navListFour.current.style.opacity = "0.6";

    orangeFive.current.style.visibility = "hidden";
    navListFive.current.style.opacity = "0.6";

    orangeSix.current.style.visibility = "hidden";
    navListSix.current.style.opacity = "0.6";

    orangeSeven.current.style.visibility = "hidden";
    navListSeven.current.style.opacity = "0.6";

    orangeEight.current.style.visibility = "hidden";
    navListEight.current.style.opacity = "0.6";
  };

  const showBoxFour = () => {
    setDataFour(true);
    if (data) {
      setData(false);
    }
    if (dataTwo) {
      setDataTwo(false);
    }
    if (dataThree) {
      setDataThree(false);
    }
    if (dataFive) {
      setDataFive(false);
    }
    if (dataSix) {
      setDataSix(false);
    }
    if (dataSeven) {
      setDataSeven(false);
    }
    if (dataEight) {
      setDataEight(false);
    }

    orangeOne.current.style.visibility = "hidden";
    navListOne.current.style.opacity = "0.6";

    orangeTwo.current.style.visibility = "hidden";
    navListTwo.current.style.opacity = "0.6";

    orangeThree.current.style.visibility = "hidden";
    navListThree.current.style.opacity = "0.6";

    orangeFour.current.style.visibility = "visible";
    navListFour.current.style.opacity = "1";

    orangeFive.current.style.visibility = "hidden";
    navListFive.current.style.opacity = "0.6";

    orangeSix.current.style.visibility = "hidden";
    navListSix.current.style.opacity = "0.6";

    orangeSeven.current.style.visibility = "hidden";
    navListSeven.current.style.opacity = "0.6";

    orangeEight.current.style.visibility = "hidden";
    navListEight.current.style.opacity = "0.6";
  };

  const showBoxFive = () => {
    setDataFive(true);
    if (data) {
      setData(false);
    }
    if (dataTwo) {
      setDataTwo(false);
    }
    if (dataThree) {
      setDataThree(false);
    }
    if (dataFour) {
      setDataFour(false);
    }
    if (dataSix) {
      setDataSix(false);
    }
    if (dataSeven) {
      setDataSeven(false);
    }
    if (dataEight) {
      setDataEight(false);
    }
    orangeOne.current.style.visibility = "hidden";
    navListOne.current.style.opacity = "0.6";

    orangeTwo.current.style.visibility = "hidden";
    navListTwo.current.style.opacity = "0.6";

    orangeThree.current.style.visibility = "hidden";
    navListThree.current.style.opacity = "0.6";

    orangeFour.current.style.visibility = "hidden";
    navListFour.current.style.opacity = "0.6";

    orangeFive.current.style.visibility = "visible";
    navListFive.current.style.opacity = "1";

    orangeSix.current.style.visibility = "hidden";
    navListSix.current.style.opacity = "0.6";

    orangeSeven.current.style.visibility = "hidden";
    navListSeven.current.style.opacity = "0.6";

    orangeEight.current.style.visibility = "hidden";
    navListEight.current.style.opacity = "0.6";
  };

  const showBoxSix = () => {
    setDataSix(true);
    if (data) {
      setData(false);
    }
    if (dataTwo) {
      setDataTwo(false);
    }
    if (dataThree) {
      setDataThree(false);
    }
    if (dataFour) {
      setDataFour(false);
    }
    if (dataFive) {
      setDataFive(false);
    }
    if (dataSeven) {
      setDataSeven(false);
    }
    if (dataEight) {
      setDataEight(false);
    }

    orangeOne.current.style.visibility = "hidden";
    navListOne.current.style.opacity = "0.6";

    orangeTwo.current.style.visibility = "hidden";
    navListTwo.current.style.opacity = "0.6";

    orangeThree.current.style.visibility = "hidden";
    navListThree.current.style.opacity = "0.6";

    orangeFour.current.style.visibility = "hidden";
    navListFour.current.style.opacity = "0.6";

    orangeFive.current.style.visibility = "hidden";
    navListFive.current.style.opacity = "0.6";

    orangeSix.current.style.visibility = "visible";
    navListSix.current.style.opacity = "1";

    orangeSeven.current.style.visibility = "hidden";
    navListSeven.current.style.opacity = "0.6";

    orangeEight.current.style.visibility = "hidden";
    navListEight.current.style.opacity = "0.6";
  };

  const showBoxSeven = () => {
    setDataSeven(true);
    if (data) {
      setData(false);
    }
    if (dataTwo) {
      setDataTwo(false);
    }
    if (dataThree) {
      setDataThree(false);
    }
    if (dataFour) {
      setDataFour(false);
    }
    if (dataFive) {
      setDataFive(false);
    }
    if (dataSix) {
      setDataSix(false);
    }
    if (dataEight) {
      setDataEight(false);
    }

    orangeOne.current.style.visibility = "hidden";
    navListOne.current.style.opacity = "0.6";

    orangeTwo.current.style.visibility = "hidden";
    navListTwo.current.style.opacity = "0.6";

    orangeThree.current.style.visibility = "hidden";
    navListThree.current.style.opacity = "0.6";

    orangeFour.current.style.visibility = "hidden";
    navListFour.current.style.opacity = "0.6";

    orangeFive.current.style.visibility = "hidden";
    navListFive.current.style.opacity = "0.6";

    orangeSix.current.style.visibility = "hidden";
    navListSix.current.style.opacity = "0.6";

    orangeSeven.current.style.visibility = "visible";
    navListSeven.current.style.opacity = "1";

    orangeEight.current.style.visibility = "hidden";
    navListEight.current.style.opacity = "0.6";
  };

  const showBoxEight = () => {
    setDataEight(true);
    if (data) {
      setData(false);
    }
    if (dataTwo) {
      setDataTwo(false);
    }
    if (dataThree) {
      setDataThree(false);
    }
    if (dataFour) {
      setDataFour(false);
    }
    if (dataFive) {
      setDataFive(false);
    }
    if (dataSix) {
      setDataSix(false);
    }
    if (dataSeven) {
      setDataSeven(false);
    }

    orangeOne.current.style.visibility = "hidden";
    navListOne.current.style.opacity = "0.6";

    orangeTwo.current.style.visibility = "hidden";
    navListTwo.current.style.opacity = "0.6";

    orangeThree.current.style.visibility = "hidden";
    navListThree.current.style.opacity = "0.6";

    orangeFour.current.style.visibility = "hidden";
    navListFour.current.style.opacity = "0.6";

    orangeFive.current.style.visibility = "hidden";
    navListFive.current.style.opacity = "0.6";

    orangeSix.current.style.visibility = "hidden";
    navListSix.current.style.opacity = "0.6";

    orangeSeven.current.style.visibility = "hidden";
    navListSeven.current.style.opacity = "0.6";

    orangeEight.current.style.visibility = "visible";
    navListEight.current.style.opacity = "1";
  };

  const lineOrange = () => {
    lineRef.current.style.visibility = "visible";
  };

  return (
    <Container onMouseOver={lineOrange}>
      <NavListContainer ref={refNav} $navIcons={BooleanTriangle}>
        <NavListItem
          onMouseEnter={showBox}
          ref={navListOne}
          className="itemNav"
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>دانشکده ها</h3>
          </NavBottom>
          <OrangeTriangle ref={orangeOne} className="fade"></OrangeTriangle>
        </NavListItem>

        <NavListItem
          onMouseEnter={showBoxTwo}
          ref={navListTwo}
          className="itemNav"
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>پژوهشکده ها</h3>
          </NavBottom>
          <OrangeTriangle ref={orangeTwo}></OrangeTriangle>
        </NavListItem>

        <NavListItem
          onMouseEnter={showBoxThree}
          ref={navListThree}
          className="itemNav"
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>معاونت ها</h3>
          </NavBottom>
          <OrangeTriangle ref={orangeThree}></OrangeTriangle>
        </NavListItem>

        <NavListItem
          onMouseEnter={showBoxFour}
          ref={navListFour}
          className="itemNav"
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>مراکز تحقیقاتی</h3>
          </NavBottom>
          <OrangeTriangle ref={orangeFour}></OrangeTriangle>
        </NavListItem>

        <NavListItem
          onMouseEnter={showBoxFive}
          className="itemNav"
          ref={navListFive}
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>پردیس ها</h3>
          </NavBottom>
          <OrangeTriangle ref={orangeFive}></OrangeTriangle>
        </NavListItem>

        <NavListItem
          onMouseEnter={showBoxSix}
          className="itemNav"
          ref={navListSix}
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>مراکز آموزشی</h3>
          </NavBottom>
          <OrangeTriangle ref={orangeSix}></OrangeTriangle>
        </NavListItem>

        <NavListItem
          onMouseEnter={showBoxSeven}
          ref={navListSeven}
          className="itemNav"
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>کتابخانه </h3>
          </NavBottom>
          <OrangeTriangle ref={orangeSeven}></OrangeTriangle>
        </NavListItem>

        <NavListItem
          onMouseEnter={showBoxEight}
          ref={navListEight}
          className="itemNav"
        >
          <NavTop>
            <FactoryIcon />
          </NavTop>
          <NavBottom>
            <h3>مراکز خدماتی</h3>
          </NavBottom>
          <OrangeTriangle ref={orangeEight}></OrangeTriangle>
        </NavListItem>
      </NavListContainer>
      <LineBottom ref={lineRef}></LineBottom>

      <BoxContainer>
        <BoxItemOne $showData={data} className="BoxItem">
          <ul>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
          </ul>
        </BoxItemOne>
        <BoxItemTwo $showDataTwo={dataTwo} className="BoxItem">
          <ul>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
          </ul>
        </BoxItemTwo>
        <BoxItemThree $showDataThree={dataThree} className="BoxItem">
          <ul>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
          </ul>
        </BoxItemThree>
        <BoxItemFour $showDataFour={dataFour} className="BoxItem">
          <ul>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پردیس خودگردان تهران</li>
            <li>پردیس خودگردان تهران</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پژوهشکده الکترونیک</li>
            <li>دانشکده شیمی</li>
            <li>دانشکده شیمی</li>
          </ul>
        </BoxItemFour>
        <BoxItemFive $showDataFive={dataFive} className="BoxItem">
          <ul>
            <li>پردیس پژوهش و فناوری</li>
            <li>پژوهشکده الکترونیک</li>
            <li>پردیس پژوهش و فناوری</li>
            <li>پردیس پژوهش و فناوری</li>
            <li>دانشکده شیمی</li>
            <li>پردیس پژوهش و فناوری</li>
          </ul>
        </BoxItemFive>
        <BoxItemSix $showDataSix={dataSix} className="BoxItem">
          <ul>
            <li>گروه فلسفه علم</li>
            <li>مدیریت تربیت بدنی</li>
            <li>مرکز زبان‌ها و زبان شناسی</li>
            <li>مرکز معارف اسلامی و علوم انسانی</li>
            <li>مرکز آموزش مهارت‌های مهندسی</li>
          </ul>
        </BoxItemSix>

        <BoxItemSeven $showDataSeven={dataSeven} className="BoxItem">
          <ul>
            <li>کتابخانه مرکزی</li>
            <li>کتابخانه مریم میرزاخانی</li>
            <li>موسسه انتشارات علمی شریف</li>
            <li>مجله ساینتیا ایرانیکا</li>
            <li>مجله علمی-پژوهشی شریف</li>
            <li>روزنامه شریف</li>
          </ul>
        </BoxItemSeven>

        <BoxItemEight $showDataEight={dataEight} className="BoxItem">
          <ul>
            <li>مرکز خدمات آزمایشگاهی </li>
            <li>مجتمع فناوری شریف</li>
            <li>مرکز فناوری اطلاعات و ارتباطات</li>
            <li>مرکز مشاوره</li>
          </ul>
        </BoxItemEight>
      </BoxContainer>
    </Container>
  );
}

export default Triangle;

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
  max-width: 83rem;
  margin: 8rem auto;
  @media (max-width: 1369px) {
    max-width: 78rem;
    margin: 5rem auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LineBottom = styled.div`
  max-width: 83rem;
  height: 0.5rem;
  margin: 0 auto;
  background-color: orange;
  visibility: hidden;
  @media (max-width: 1200px) {
    max-width: 70rem;
    margin: 0 auto;
    gap: 1rem;
  }
  @media (max-width: 992px) {
    max-width: 55rem;
    margin: 0 auto;
  }
`;

const BoxItemEight = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showDataEight ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;
const BoxItemSeven = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showDataSeven ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;
const BoxItemSix = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showDataSix ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;

const BoxItemFive = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showDataFive ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;

const BoxItemFour = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showDataFour ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;
const BoxItemThree = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showDataThree ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;

const BoxItemTwo = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showDataTwo ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;

const BoxItemOne = styled.div`
  padding: 2rem;
  display: ${(props) => (props.$showData ? "block" : "none")};
  > ul {
    max-width: 50rem;
    margin-right: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    > li {
      text-align: center;
      color: gray;
      font-size: 1.3rem;
    }
  }
`;
const BoxContainer = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  @media (max-width: 1200px) {
    max-width: 70rem;
    margin: 0 auto;
    gap: 1rem;
  }
  @media (max-width: 992px) {
    max-width: 55rem;
    margin: 0 auto;
  }
`;

const OrangeTriangle = styled.div`
  border-right: 25px solid transparent;
  border-left: 25px solid transparent;
  border-bottom: 25px solid #ff9d02;
  visibility: hidden;
  position: absolute;
  bottom: -2.5rem;
`;

const NavListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;
  margin-bottom: 2.5rem;
  > * {
    opacity: 0.6;
  }
  animation-name: ${(props) => (props.$navIcons ? FadeIn : null)};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  @media (max-width: 1200px) {
    max-width: 70rem;
    margin: 2rem auto;
    gap: 1rem;
  }
  @media (max-width: 992px) {
    max-width: 55rem;
    margin: 2rem auto;
  }
`;
const NavListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    ${this} {
      opacity: 1;
    }
    ${OrangeTriangle} {
      visibility: visible;
    }
  }
`;
const NavTop = styled.div`
  background: linear-gradient(
    234.26deg,
    #0ebcb6 11.37%,
    #023d9d 62.27%,
    #013c9c 65.1%
  );
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > :first-child {
    font-size: xx-large;
    color: white;
  }
  margin-bottom: 0.8rem;
`;
const NavBottom = styled.div``;
