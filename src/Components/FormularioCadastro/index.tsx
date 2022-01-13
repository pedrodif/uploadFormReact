import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import { iProps2 } from "./type";

interface iProps {
  // aoEnviar:(dados: iProps2) => void;
  // aoEnviar é o valor que estou passando(dados é o parametro e o iProps2 é a tipagem feita para o parametro)
  // o void é por que não tem retorno
  // handleSubmit: (values: iProps2) => void;
  setForm: ({}: iProps2) => void; 
}

function FormularioCadastro({ setForm }: iProps){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const submitForm = (event: any) => {
    event.preventDefault();
    console.log(event.target)

    const formatedValues = {
      nome: event.target,
      sobrenome: event.target,
      cpf: event.target
    }
    setForm({nome, sobrenome, cpf, promocoes, novidades});
  };


  // const aoEnviar = props.aoEnviar;
  return (
    <form
      // onSubmit={(event) => {
      //   event.preventDefault();
      //   // console.log(event.target);
      //   handleSubmit(event.target);
      // }}

      onSubmit={(value) => submitForm(value)}
  
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
