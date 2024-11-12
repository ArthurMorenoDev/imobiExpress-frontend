import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlApi } from "../../services/Api";

const Card = ({thumb, tipo, endereco, valor, slug}) => {
  return (
  <Container>
    <Img>
    <img src={`${urlApi}/uploads/${thumb}`}alt=""/>
    </Img>
    <Description>
        <h3>{tipo}</h3>
        <Itens>
            <span><FaMapMarkerAlt/>{endereco}</span>
            <span>{valor}</span>
        </Itens>
        <Link to={`imovel/${slug}`}>Detalhes<FaArrowRight/></Link>
    </Description>
  </Container>)
};
export default Card;
