import React from "react";
import "./style.css";
import banner from "../../assets/banner.png";

function main() {
  return (
    <div>
      <div className="container-main2">
        <div className="container-main2-text">
          <div className="main2-text">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, provident tenetur corrupti nam pariatur temporibus
              adipisci obcaecati voluptatum totam numquam! Quod impedit, ratione
              ipsam optio qui nisi excepturi debitis autem.
            </h3>
            <p>lorem ipsum</p>
          </div>
          <div className="main2-text">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, provident tenetur corrupti nam pariatur temporibus
              adipisci obcaecati voluptatum totam numquam! Quod impedit, ratione
              ipsam optio qui nisi excepturi debitis autem.
            </h3>
            <p>lore ipsum</p>
          </div>
        </div>
        <div className="main2-numeros">
          <div className="num">
              <h1>10k+</h1>
              <p>Artes</p>
          </div>
          <div className="num">
              <h1>200+</h1>
              <p>Vendas</p>
          </div>
          <div className="num">
              <h1>20</h1>
              <p>Artistas</p>
          </div>
          <div id="linha-vertical1"></div>
        </div>

        <div className="main2-banner">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default main;
