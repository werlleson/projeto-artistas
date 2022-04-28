 import React from "react";
import "./style.css";
import artista1 from "../../assets/fotos-artistas/artista-1.png";
import artista2 from "../../assets/fotos-artistas/artista-2.png";
import artista3 from "../../assets/fotos-artistas/artista-3.png";
import artista4 from "../../assets/fotos-artistas/artista-4.png";
import artista5 from "../../assets/fotos-artistas/artista-5.png";
import artista6 from "../../assets/fotos-artistas/artista-6.png";

function main4() {
  return (
    <div className="main4">
      <div className="title-main4">
       <h1>Melhores artistas</h1>
      </div>
      
      {/* container main4 1 */}

      <div className="container-main4-1">
        <div className="artista-1 card-person">
          <img src={artista1} alt="artista1" />
          <div className="text-container-main4">
            <h1>Mayk Brito</h1>
            <p>80 Fotografias</p>
          </div>
        </div>
        <div className="artista-2 card-person orange-card">
          <img src={artista2} alt="artista2" />
          <div className="text-container-main4">
            <h1>Jakeliny G.</h1>
            <p>99 Fotografias</p>
          </div>
        </div>
        <div className="artista-3 card-person">
          <img src={artista3} alt="artista3" />
          <div className="text-container-main4">
            <h1> João i. (Biro)</h1>
            <p>50 Fotografias</p>
          </div>
        </div>
      </div>

      {/* Container main4 2 */}

      <div className="container-main4-2">
        <div className="artista-4 card-person">
        <img src={artista4} alt="artista3" />
          <div className="text-container-main4">
            <h1>Tamires Santos</h1>
            <p>43 Fotografias</p>
          </div>
        </div>
        <div className="artista-5 card-person">
        <img src={artista5} alt="artista3" />
          <div className="text-container-main4">
            <h1>Ana Silva</h1>
            <p>28 Fotografias</p>
          </div>
        </div>
        <div className="artista-6 card-person">
        <img src={artista6} alt="artista3" />
          <div className="text-container-main4">
            <h1>Diego F.</h1>
            <p>20 Fotografias</p>
          </div>
        </div>
      </div>
      <div className="footer-artistas">
         <p>Ver todos os artistas <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9881 16.2079L15.6347 26.3674L17.7544 27.6929L24.1078 17.5334L25.8123 24.9286L28.248 24.3671L25.585 12.8136L14.0316 15.4766L14.593 17.9124L21.9881 16.2079Z" fill="#FF5B50"/>
</svg>
</p>
      </div>
    </div>
  );
}

export default main4;
