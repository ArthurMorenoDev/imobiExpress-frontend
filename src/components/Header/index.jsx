import React from "react";
import LogoImg from "../../assets/LogoImg.png";
import { Container, Menu, Logo} from "./styles";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <Container>
            <Logo>
                <Link to='/'><img src={LogoImg} alt=""/></Link>
            </Logo>
            <Menu>
                <ul>
                   <Link to ='/login'><li><span>Cadastro/Login</span></li></Link>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header;