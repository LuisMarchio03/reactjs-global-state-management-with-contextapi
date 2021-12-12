import { useContext } from "react";
import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UsuarioContext } from "../../common/contexts/Usuario";

const Login = () => {
  const history = useHistory();
  const { name, setName, saldo, setSaldo } = useContext(UsuarioContext);

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(ev) => setSaldo(ev.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={!name || name.length < 3}
        onClick={() => history.push("/feira")}
      >
        Avançar
      </Button>
    </Container>
  );
};

export default Login;
