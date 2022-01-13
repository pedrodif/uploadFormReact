import React, { useCallback, useEffect, useState } from "react";
import FormularioCadastro from "./Components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { iProps2 } from "./Components/FormularioCadastro/type";
import "fontsource-roboto";
import Error from "./Components/Error";


//No typeScript é necessário fazer a tipagem conforme foi feita acima para os dados que serão passados

function App() {

  const [form, setForm] = useState<iProps2>({} as iProps2);
  const [erros, setErros] = useState(true);


  //O effect ao indentificar uma alteração no fórmulario atualiza o formulário 
  useEffect(() => {
    console.log(form);
  }, [form])

  return (
    <Container component="article" maxWidth="sm">

      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>

      <FormularioCadastro 
        setForm={setForm} 
        setErros={setErros}
        erros={erros}
      />

      <Error 
        erros={erros}
      />

      {/* O primeiro setForm é o nome da props que criei, o que se encontra dentro de chaves é o valor
       que desejo passar que seria a função(setter) de mesmo nome escrita acima*/}

    </Container>
  );
}

export default App;
