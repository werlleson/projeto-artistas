import React from "react";
import astrounautan1 from "../../assets/fotos-astrounauta/astronauta-1.png";
import astrounautan2 from "../../assets/fotos-astrounauta/astronauta-2.png";
import astrounautan3 from "../../assets/fotos-astrounauta/astronauta-3.png";
import astrounautan4 from "../../assets/fotos-astrounauta/astronauta-4.png";
import "./style.css";

function main3() {
  return (
    <div className="main3 ">
      <div className="main3-title">
        <h1>Populares da semana</h1>
      </div>
      <div className="container-main3">
        <div className="container-colum">
          <div className="card-colum">
            <h2>
              Astrounauto 1{" "}
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6468 6.01317L3.05783 22.9456L6.59058 25.1549L17.1795 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385878 4.79446L1.32158 8.85405L13.6468 6.01317Z"
                  fill="white"
                />
              </svg>
            </h2>
            <div className="main3-paragrafo-row">
              <p>Mayk Brito </p>
              <p>1.50 RKT</p>
            </div>
            <img src={astrounautan1} alt="astrounautan1" />
          </div>
          <div className="card-colum">
            <h2>
              Astrounauto 2{""}
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6468 6.01317L3.05783 22.9456L6.59058 25.1549L17.1795 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385878 4.79446L1.32158 8.85405L13.6468 6.01317Z"
                  fill="white"
                />
              </svg>
            </h2>
            <div className="main3-paragrafo-row">
              <p>João Inácio (Biro)</p>
              <p>3.75 RKT</p>
            </div>
            <img src={astrounautan2} alt="astrounautan2" />
          </div>
        </div>
        <div id="linha-vertical"></div>
        <div className="container-colum-2">
          <div className="card-colum">
            <h2>
              Astrounauto 3{" "}
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6468 6.01317L3.05783 22.9456L6.59058 25.1549L17.1795 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385878 4.79446L1.32158 8.85405L13.6468 6.01317Z"
                  fill="white"
                />
              </svg>
            </h2>
            <div className="main3-paragrafo-row">
              <p>Jakeliny Gracielly</p>
              <p>2.0 RKT</p>
            </div>
            <img src={astrounautan3} alt="astrounautan3" />
          </div>
          <div className="card-colum">
            <h2>
              Astrounauto 4{" "}
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6468 6.01317L3.05783 22.9456L6.59058 25.1549L17.1795 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385878 4.79446L1.32158 8.85405L13.6468 6.01317Z"
                  fill="white"
                />
              </svg>
            </h2>
            <div className="main3-paragrafo-row">
              <p>Tamires Santos</p>
              <p>4.30 RKT</p>
            </div>
            <img src={astrounautan4} alt="astrounautan4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default main3;
