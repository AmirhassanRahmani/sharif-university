"use client";

import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import MailIcon from "@mui/icons-material/Mail";
import WifiIcon from "@mui/icons-material/Wifi";

function Footer() {
  return (
    <Container>
      <FooterTop>
        <LinkedInIcon />
        <TelegramIcon />
        <InstagramIcon />
      </FooterTop>
      <FooterMain>
        <RightSide>
          <RightList>
            <p>دفاتر و وزارتخانه‌ها</p>
            <ul>
              <li>دفتر مقام معظم رهبری</li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
            </ul>
          </RightList>
          <MiddleList>
            <p> سایر لینک‌های مفید </p>
            <ul>
              <li> معاونت علمی و فناوری ریاست جمهوری</li>
              <li> دانشگاه های وزارت علوم، تحقیقات و فناوری </li>
              <li> مرکز منطقه‌ای اطلاع رسانی علوم و فناوری</li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
              <li> پرتال امام خمینی (ره) </li>
            </ul>
          </MiddleList>
        </RightSide>
        <LeftSide>
          <LeftList>
            <ul>
              <li>
                <FmdGoodIcon />
                <p>تهران، خیابان آزادی، دانشگاه صنعتی شریف</p>
              </li>
              <li>
                <PhoneIcon />
                <p>۶۶۱۶۱ - ۰۲۱</p>
              </li>
              <li>
                <FaxIcon />
                <p>۶۶۱۶۴۰۵۱ - ۰۲۱</p>
              </li>
              <li>
                <MailIcon />
                <p>۱۴۵۸۸۸۹۶۹۴</p>
              </li>
              <li>
                <WifiIcon />
                <p>prm@sharif.edu</p>
              </li>
            </ul>
          </LeftList>
          <ImageContainer>
            <img
              src="https://www.sharif.edu/documents/47992/48026/Qr-Code+%281%29.png/9935e171-67ce-b5c3-8966-b0789f2e185f?t=1600520955155"
              alt=""
            />
          </ImageContainer>
        </LeftSide>
      </FooterMain>
      <FooterBottom>
        <ul>
          <li>آشنایی با دانشگاه</li>
          <li>/</li>
          <li>آموزش </li>
          <li>/</li>
          <li>پژوهش و فناوری </li>
          <li>/</li>
          <li>فرهنگ در شریف </li>
          <li>/</li>
          <li>زندگی در دانشگاه </li>
          <li>/</li>
          <li>پرتال خبری</li>
        </ul>
        <p>
          کلیه حقوق مادی و معنوی این وب سایت متعلق به دانشگاه صنعتی شریف
          می‌باشد.
        </p>
      </FooterBottom>
    </Container>
  );
}

export default Footer;

const Container = styled.div``;

const RightSide = styled.div`
  z-index: 15;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;
  @media (max-width: 992px) {
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    grid-template-columns: auto auto;
  }
`;

const ImageContainer = styled.div`
  > img {
    width: 8rem;
    height: 8rem;
  }
`;

const RightList = styled.div`
  > p {
    color: white;
    padding-bottom: 1.5em;
    border-bottom: 1px solid white;
    margin-bottom: 1.5rem;
  }
  > ul > li {
    color: white;
    padding: 0.3rem;
    font-size: 0.9rem;
    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      color: orange;
      border-right: 1.5px solid crimson;
    }
  }
`;

const MiddleList = styled.div`
  > p {
    color: white;
    padding-bottom: 1.5em;
    border-bottom: 1px solid white;
    margin-bottom: 1.5rem;
  }
  > ul > li {
    color: white;
    padding: 0.3rem;
    font-size: 0.9rem;
    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      color: orange;
      border-right: 1.5px solid crimson;
    }
  }
`;

const LeftList = styled.div`
  > ul > li {
    color: white;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    > :first-child {
      margin-left: 0.5rem;
      font-size: 1.2rem;
    }
  }
  > ul > li:nth-child(2) {
    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      color: orange;
    }
  }
  > ul > li:last-child {
    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      color: orange;
    }
  }
`;

const LeftSide = styled.div`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  @media (max-width: 992px) {
    margin: 0 auto;
    gap: 8rem;
  }
`;

const FooterTop = styled.div`
  background-color: #002051;
  padding: 0.3rem;
  color: white;
  > * {
    margin: 1rem;
  }
`;
const FooterMain = styled.div`
  position: relative;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(231.85deg, #012761 15.67%, #0148b0 98.6%);
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.18;
    background-position: 0 100%;
    background: url("https://www.sharif.edu/o/shu-theme/images/svg/footer.svg")
      no-repeat left 50px;
  }
  @media (max-width: 992px) {
    &:before {
      content: "";
      background: none;
    }
    flex-wrap: wrap;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #002051;
  padding: 1rem;
  color: white;
  > ul {
    display: flex;
  }
  > ul > li {
    padding: 0 0.3rem;
    font-size: 0.9rem;
    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      color: crimson;
    }
  }

  @media (max-width: 992px) {
    padding: 1.5rem;
    display: grid;
    gap: 2rem;
    > ul {
      margin-right: 18rem;
      > li {
        font-size: 0.8rem;
        color: gray;
      }
    }
    > p {
      margin-right: 24rem;
      font-size: 0.7rem;
    }
  }
`;
