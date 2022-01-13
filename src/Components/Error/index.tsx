import React from "react";


interface iProps{
    erros: boolean;
}

function Error({erros}: iProps){
    console.log(erros)
    return(
        <span>{erros ? " " : "CPF deve ter 11 dígitos"}</span>
    )
}

export default Error; 