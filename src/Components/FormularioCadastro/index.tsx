import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import { iProps2 } from "./type";


interface iProps {

  // aoEnviar:(dados: iProps2) => void;
  // aoEnviar é o valor que estou passando(dados é o parametro e o iProps2 é a tipagem feita para o parametro)
  // o void é por que não tem retorno
 
  //setForm é a função(setter) que permite alterar o estado do formulário, aqui ela está sendo passada como propriedade, 
  //e a sua assinatura é feita no parametro que está na função que gera o componente. 

  setForm: ({}: iProps2) => void; 
  setErros: React.Dispatch<React.SetStateAction<boolean>>;
  erros: boolean; 
} 

function FormularioCadastro({ setForm, setErros, erros }: iProps){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [msgError, setMsgError] = useState({cpf: {texto: "" }});

  const submitForm = (event: any) => {
    event.preventDefault();
    setForm({nome, sobrenome, cpf, promocoes, novidades});
  };

  function validarCPF(){
    if(cpf.length !== 11){ 
      setErros(false);
      setMsgError({cpf: {texto: "CPF deve ter 11 dígitos" }});
   
    }else{
      setErros(true);
      setMsgError({cpf: {texto: " " }});
      
    }
  }

  return (
    <form
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

        onBlur={validarCPF}
        error={!erros}
        helperText={msgError.cpf.texto}
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
