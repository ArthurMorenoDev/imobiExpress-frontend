import Api from "../../services/Api";
import { useState } from "react";
import { Container, ContainerForm, Label, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";

const Cadastro = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post("/createusers", data)
      .then((response) => {
        if (!response.data.error === true) {
          toast(response.data.message);
        } else {
          toast(response.data.message);
        }
      })
      .catch(() => {
        console.log("error: erro no sistema");
      });
    // console.log(data);
  };

  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se para acessar a plataforma!</p>
      <ContainerForm>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Label>Nome</Label>
          <Input
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Informe seu Nome"
          />
          <Label>E-mail</Label>
          <Input
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Informe seu E-mail"
          />
          <Label>Senha</Label>
          <Input
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Informe sua Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Cadastro;
