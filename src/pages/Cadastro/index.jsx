import React from "react";
import { Container, ContainerForm, Label, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Cadastro = ()=>{
    return(
        <Container>
            <h2>Crie sua conta</h2>
            <p>Cadastre-se para acessar a plataforma!</p>
            <ContainerForm>
                <Form action="">
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Informe seu Nome"/>
                    <Label>E-mail</Label>
                    <Input type="text" placeholder="Informe seu E-mail"/>
                    <Label>Senha</Label>
                    <Input type="text" placeholder="Informe sua Senha"/>
                    <Button>Fazer Login</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Cadastro;