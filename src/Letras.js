import React, { useState } from "react";

export default function Letras({ letraEscolhida, iniciando, letrasSelecionadas }) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const isDisabled = (letra) => letrasSelecionadas.includes(letra);

  return (
    <div className="container-letras">
      <div className="letras">
        {alfabeto.map((letra) => (
          <Botoes
            key={letra}
            escolhido={() => letraEscolhida(letra)}
            iniciado={iniciando}
            disabled={isDisabled(letra)}
            botoes={letra.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
}

function Botoes({ escolhido, iniciado, disabled, botoes }) {
  return (
    <button
      data-test="letter"
      onClick={escolhido}
      className={iniciado || disabled ? "letras-selecionadas" : "letras-nao-selecionadas"}
      disabled={iniciado || disabled}
    >
      {botoes}
    </button>
  );
}
