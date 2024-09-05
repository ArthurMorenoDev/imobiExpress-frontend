import React, { Fragment} from "react";
import LogoImg from "../../assets/LogoImg.png";
import { Container, Menu, Logo} from "./styles";

const Header = ()=>{
    return(
        <Container>
            <Logo>
                <img src={LogoImg} alt=""/>
            </Logo>
            <Menu>
                <ul>
                    <li><span>Cadastro/Login</span></li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;