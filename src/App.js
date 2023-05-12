import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';
import palavras from './Palavras';
import forca0 from "./assets/imgs/forca0.png";
import forca1 from "./assets/imgs/forca1.png";
import forca2 from "./assets/imgs/forca2.png";
import forca3 from "./assets/imgs/forca3.png";
import forca4 from "./assets/imgs/forca4.png";
import forca5 from "./assets/imgs/forca5.png";
import forca6 from "./assets/imgs/forca6.png";

let palavra = [];
let underline = "";
let restart = false;


export default function App() {

const [estadoPalavra, setStatePalavra] = useState("");
const [erro, setErro] = useState(0);
const [iniciar, setIniciar] = useState(true);
const [statusJogo, setStatusJogo] = useState("");
const [imagem, setImagem] = useState(forca0);

const shuffle = () => Math.random() - 0.5;

function restartPagina(){
  if (restart) {
    restart = true;
    setStatePalavra('');
    setErro(0);
    setStatusJogo('');
    setImagem(forca0);
  }

  iniciarJogo();

}

function iniciarJogo() {
  palavras.sort(shuffle);
  palavra = Array.from(palavras[palavras.length - 1]);
  setIniciar(false);
  underline = "_".repeat(palavra.length);
  setStatePalavra(underline);
}

function letraClicada(botoes) {
  const positions = palavra.flatMap((letra, index) => letra === botoes ? index : []);
  if (positions.length !== 0) {
    const mapping = Array.from(underline);
    positions.forEach((position) => {
      mapping[position] = botoes;
    });
    underline = mapping.join("");
    setStatePalavra(underline);
  } else {
    setErro(erro + 1);
    estadoForca();
  }
  endGame();
}

function estadoForca(){
  const imagensForca = [
  forca0, 
  forca1,
  forca2,
  forca3,
  forca4,
  forca5,
  forca6,
];

setImagem(imagensForca[ erro + 1 ]);
endGame();

}

function endGame(){
  if (erro > 5 && underline !== palavra.join("")) {

    setStatusJogo("Perdeu");
    setIniciar(true);
    setStatePalavra(palavra);
    setErro(6);
    setImagem(forca6); 
    restart = true;
  } else if (underline === palavra.join("")){
    setStatusJogo("Ganhou"); 
    setIniciar(true); 
    restart = true;
  }
}

return (
  <>
    <Jogo
      jogoIniciado={restartPagina}
      estadoJogo={estadoPalavra}
      iniciando={!iniciar}
      novaPalavra={palavra.join("")}
      statusJogo={statusJogo}
      errorQtd={erro}
      imagensForca={imagem}
    />
    <Letras 
    iniciando={iniciar} letraEscolhida={letraClicada}
    />
    </>

);
};








