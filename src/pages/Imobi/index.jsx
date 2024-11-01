import React, { Fragment } from "react";
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles";
import TopBanner from "../../components/TopBanner";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const Imobi= ()=> {
    return(
        <Fragment>
          <TopBanner/>
          <Container>
            <Left>
                <Thumb>
                    <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/>
                </Thumb>
                <Description>
                    <h2>Apartamento / Alugar</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit corrupti voluptatum. Animi veniam aliquam temporibus nemo, hic ducimus tenetur tempora, consequatur cupiditate porro aliquid itaque et numquam saepe beatae!</p>
                </Description>
            </Left>
            <Right>
                <Profile>
                    <ProfileImg>
                        <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
                    </ProfileImg>
                    <ProfileDescription>
                        <h3>Jhon Dee</h3>
                        <p>Descrição do Usuario</p>
                        <p>teste@email.com</p>
                    </ProfileDescription>
                </Profile>
                <ProfileContact>
                        <h3>Informações para contato</h3>
                        <p>(11)111-1111</p>
                        <p>teste@email.com</p>
                </ProfileContact>
                <ProfileFormContact>
                    <h3>Contate o anunciante</h3>
                    <form>
                       <Input type="text" placeholder="Nome:" />
                       <Input type="text" placeholder="Email:"/>
                       <TextArea placeholder="Mensagem:" name="" cols="30" rows="10" id=""></TextArea>
                        <Button>Enviar Mensagem</Button>
                    </form>
                </ProfileFormContact>
            </Right>
          </Container>
        </Fragment>
    )
}

export default Imobi;