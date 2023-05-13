import React, { useState, useRef } from "react";

export default function Letras({ letraEscolhida, iniciando }) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Referência para controlar se os botões já foram reinicializados
  const reiniciarRef = useRef(false);

  // Função para reinicializar o estado dos botões
  const reiniciarBotoes = () => {
    reiniciarRef.current = true;
  };

  return (
    <div className="container-letras">
      <div className="letras">
        {alfabeto.map((letra) => (
          <Botoes data-test="letter" key={letra} escolhido={() => letraEscolhida(letra)} iniciado={iniciando} reiniciar={reiniciarBotoes} botoes={letra.toUpperCase()} />
        ))}
      </div>
    </div>
  );
}

function Botoes({ escolhido, iniciado, reiniciar, botoes }) {
  const [disabledBotao, setDisabledBotao] = useState(false);

  function disable() {
    setDisabledBotao(true);
  }

  // Verificar se os botões precisam ser reinicializados
  if (reiniciar.current) {
    setDisabledBotao(false);
    reiniciar.current = false;
  }

  return (
    <button
      data-test="letter"
      onClick={() => {
        escolhido();
        disable();
      }}
      className={iniciado || disabledBotao ? "letras-selecionadas" : "letras-nao-selecionadas"}
      disabled={iniciado || disabledBotao}
    >
      {botoes}
    </button>
  );
}