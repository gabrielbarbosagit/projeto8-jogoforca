import React, { useState } from "react";

export default function Letras({ letraEscolhida, iniciando }) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Função para reinicializar o estado dos botões
  const reiniciarBotoes = () => {
    // Lógica para reinicializar o estado dos botões
  };

  return (
    <div className="container-letras">
      <div className="letras">
        {alfabeto.map((letra) => (
          <Botoes key={letra} escolhido={() => letraEscolhida(letra)} iniciado={iniciando} reiniciar={reiniciarBotoes} botoes={letra.toUpperCase()} />
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

  // Função para reiniciar o estado do botão quando um novo jogo for iniciado
  const reiniciarBotao = () => {
    setDisabledBotao(false);
  };

  // Chamar a função de reinicialização quando um novo jogo for iniciado
  React.useEffect(() => {
    reiniciarBotao();
  }, [iniciado]);

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
