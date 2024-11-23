let elem = document.getElementById("menu-item1")
console.log("Elem: ",elem);
let elemItens = document.getElementById("menu-itens1")
console.log("elemItens: ",elemItens);

function entrei() {
    elemItens.classList.remove("menu-subitens-hidden")
}

function sai() {
    elemItens.classList.add("menu-subitens-hidden")
}

elem.addEventListener("mouseenter", entrei);
//elem.addEventListener("mousemove", mover);
elemItens.addEventListener("mouseleave", sai);

  let imagens =[
    "src/assets/placasolar.jpg",
    "src/assets/energia-eolica.jpg",
    "src/assets/eolicas.jpg"
];
let i=0;
let time =10000;

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length) {i=0;}
    setTimeout("slideShow()",time)  
    }
    slideShow();
