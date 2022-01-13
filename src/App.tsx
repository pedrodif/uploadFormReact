import React, { useCallback, useEffect, useState } from "react";
import FormularioCadastro from "./Components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { iProps2 } from "./Components/FormularioCadastro/type";
import "fontsource-roboto";


//No typeScript é necessário fazer a tipagem conforme foi feita acima para os dados que serão passados

function App() {

  const [form, setForm] = useState<iProps2>({} as iProps2);
  

  useEffect(() => {
    console.log(form);
  }, [form])
  //   const handlesubmit = React.useCallback(async (values: iProps2) => {
  //   console.log(values);
  // }, []);

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro setForm={setForm} />
      {/* O primeiro aoEnviar é o nome da props que criei, o que se encontra dentro de chaves é o valor
       que desejo passar que seria a função de mesmo nome escrita abaixo*/}
    </Container>
  );
}

// function aoEnviarForm(dados: iProps) {
//   console.log(dados);
// }

export default App;
