import React, { Fragment } from "react";
import { Container, Item, Copy } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/LogoImg.png";

const Footer = () => {
    return(
       <Fragment>
         <Container>
            <Item>
                <img src={LogoImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos culpa iste nesciunt et fugit molestias, consequatur, harum dolorem hic saepe ipsam.</p>
                <nav>
                    <li><span><FaFacebook size={32}/></span></li>
                    <li><span><FaInstagram size={32}/></span></li>
                    <li><span><FaWhatsapp size={32}/></span></li>
                </nav>
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <li><span>Comprar</span></li>
                    <li><span>Alugar</span></li>
                    <li><span>Vender</span></li>
                </ul>
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <li><span>Comprar</span></li>
                    <li><span>Alugar</span></li>
                    <li><span>Vender</span></li>
                </ul>
            </Item>
            <Item>
                <h3>Our Services</h3>
                <ul>
                    <li><span>Comprar</span></li>
                    <li><span>Alugar</span></li>
                    <li><span>Vender</span></li>
                </ul>
            </Item>
        </Container>
        <Copy>
            <p>© 2024 Arthur Moreno. Todos os direitos reservados.</p>
            <ul>
                <li><span>Termos de Uso</span></li>
                <li><span>Politica de Privacidade</span></li>
                <li><span>Politicas de Cookies</span></li>
            </ul>
        </Copy>
       </Fragment>
    )
}

export default Footer;