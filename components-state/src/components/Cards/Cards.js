// useState nos cards

import React from "react";
import { useState } from 'react';
import "./Cards.css";
import enkei from "../../img/enkei-arashi.jpg";
import rays from "../../img/rays.jpg";
import bbs from "../../img/bbs.jpg";

function Cards () {

  // alterar imagens e textos de acordo com o array
  const images = [enkei, rays, bbs];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const texts = ['As rodas personalizadas da ENKEI oferecem o que há de mais moderno em projetos de rodas, tecnologia de ligas compostas, tais como processos fundidos / forjados, testes rígidos que devem passar pelos rigorosos Padrões JGTC e instalações de fabricação insuperáveis.', 'O ZE40 é um design de roda completamente novo, com cada um dos seus 10 raios, com um acabamento estético que também ajuda a reduzir o peso. Esses raios também terão 4 faces côncavas diferentes, dependendo da largura e do deslocamento do ZE40 que você escolher.', 'A roda CH-R incorpora o design de raio longo e angular desenvolvido para as lendárias rodas BBS GT no Motorsport. Combinado com uma região central muito eficiente, este design de roda é uma tremenda mistura de força e peso. Tecnologia Incorporando a tecnologia do desenvolvimento.'];
  const tittles = ['Enkei Arashi', 'Rays', 'BBS'];

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

    return (
        <div className="cards-box">
        <img className="rims" src={images[currentImageIndex]} alt=""/>
        <h3>{tittles[currentImageIndex]}</h3>
        <p>{texts[currentImageIndex]}</p>
        <button className="btn" onClick={handleNextImage}>Próximo</button>
        </div>
    )
}

export default Cards;