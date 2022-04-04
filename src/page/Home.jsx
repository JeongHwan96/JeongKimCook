import React from "react";
import Button from "../components/Button";
import Dessert from "../components/Dessert";
import EuropeFood from "../components/EuropeFood";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KoreanFood from "../components/KoreanFood";
import { useNavigate } from "react-router-dom";
//image
import LogoImg from "../image/Logo1.png";
import HeaderMenu from "./../components/HeaderMenu";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <Header
          leftContent={<img src={LogoImg} />}
          headText={"누구나 만들수있는 요리하는 개발자의 레시피"}
          rightContent={
            <>
              <Button text={"About  Me"} />{" "}
              <Button
                type={"positive"}
                text={"글쓰기"}
                onClick={() => navigate("/new")}
              />
            </>
          }
        />
      </section>

      <section>
        <HeaderMenu FirstMenuText={"추천"} SecondMenuText={"분류"} />
      </section>

      <section className="KoreanFood">
        <KoreanFood />
      </section>

      <section className="EuropeFood">
        <EuropeFood />
      </section>

      <section className="Dessert">
        <Dessert />
      </section>

      <Footer footerText={"ⓒ 2022 JeongKim all rights reserved"} />
    </>
  );
};

export default Home;
