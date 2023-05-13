export default function Jogo({ imagensForca, jogoIniciado, iniciando, novaPalavra, statusJogo, estadoJogo }) {
  return (
    <div>
      <div className="jogo-container">
        <div className="imagens-forca">
          <img data-test="game-image" src={imagensForca} alt="forca"></img>
        </div>
        <div className="escolher-palavra">
          <button data-test="choose-word" onClick={jogoIniciado} disabled={iniciando}>
            Escolher Palavra
          </button>
          <p data-test="word" resposta={novaPalavra} className={`palavraEscolhida ${statusJogo === "Ganhou" ? "ganhou" : statusJogo === "Perdeu" ? "perdeu" : ""}`}>
            {estadoJogo}
          </p>
        </div>
      </div>
    </div>
  );
}
