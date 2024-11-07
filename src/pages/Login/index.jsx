import React, { useState } from "react";
import { Container, ContainerForm, Label, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AppAuth } from "../../context/AppAuth";

const Login = ()=>{
    const auth = AppAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
         await auth.authenticate(email, password);
    }
    return(
        <Container>
            <h2>Acesse sua Conta</h2>
            <p>Entre com seu E-mail e Senha</p>
            <ContainerForm>
                <Form onSubmit={handleSubmit}>
                    <Label>E-mail</Label>
                    <Input
                     type="text"
                     name="email" 
                     placeholder="Informe seu E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                     />
                    <Label>Senha</Label>
                    <Input
                     type="password"
                     name="password" 
                     placeholder="Informe sua Senha"
                     onChange={(e) => setPassword(e.target.value)}
                     />
                    <Button type="submit">Fazer Login</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default Login;