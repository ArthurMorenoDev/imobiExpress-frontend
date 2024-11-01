import React from "react";
import { Container, ContainerForm, Label, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = ()=>{
    return(
        <Container>
            <h2>Acesse sua Conta</h2>
            <p>Entre com seu E-mail e Senha</p>
            <ContainerForm>
                <Form action="">
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

export default Login;