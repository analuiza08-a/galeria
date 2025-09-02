const visorImg = document.querySelector("#imagem-principal");
const legenda = document.querySelector("#legenda");
const thumbsWrap = document.querySelector("#thumbs");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

const imagens = [
{ src: "https://img.cybercook.com.br/imagens/receitas/279/sorvete-de-acai-2.jpeg" },
  { src: "https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg" },
  { src: "https://sushimusic.correka.com.br/_core/_uploads/144/2025/01/0025170125di3ehig3jg.png"},
  { src: "https://static.itdg.com.br/images/360-240/5d139b703a9df7604abf863a3bd76aa6/252863-shutterstock-1938293728.jpg"},
  { src: "https://i0.wp.com/bernadetealves.com/wp-content/uploads/2021/12/Pastel-e-caldo-de-cana-combinacao-que-resiste-ao-tempo-e-movimenta-a-economia-Bernadete-Alves.jpg?fit=1200%2C645&ssl=1"}
];

let atual = 0; 

function atualizarVisor() {
  visorImg.src = imagens[atual].src;
  visorImg.alt = imagens[atual].alt;
  legenda.textContent = imagens[atual].alt;

  Array.from(thumbsWrap.children).forEach((thumb, i) => {
    thumb.classList.toggle("active", i === atual);
  });
}

function mudarPara(index) {
  atual = (index + imagens.length) % imagens.length; 
  atualizarVisor();
}

imagens.forEach((img, i) => {
  const thumb = document.createElement("button");
  thumb.className = "thumb";
  thumb.type = "button";
  thumb.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
  thumb.addEventListener("click", () => mudarPara(i));
  thumbsWrap.appendChild(thumb);
});

btnPrev.addEventListener("click", () => mudarPara(atual - 1));
btnNext.addEventListener("click", () => mudarPara(atual + 1));

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") mudarPara(atual + 1);
  if(e.key === "ArrowLeft") mudarPara(atual - 1);
});

document.addEventListener("DOMContentLoaded", atualizarVisor);