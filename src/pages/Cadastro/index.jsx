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

    // Verificação de campos vazios
    if (!data.name || !data.email || !data.password) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }

    Api.post("/createusers", data)
      .then((response) => {
        if (!response.data.error) {
          toast.success(response.data.message);
          window.location.href = "/login";
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(() => {
        toast.error("Erro no sistema, tente novamente.");
      });
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
