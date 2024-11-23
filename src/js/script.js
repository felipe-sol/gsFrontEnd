let elem = document.getElementById("menu-item1")
console.log("Elem: ",elem);
let elemItens = document.getElementById("menu-itens1")
console.log("elemItens: ",elemItens);

function entrei() {
    console.log("entrei em cima do elemento");
    elemItens.classList.remove("menu-subitens-hidden")
}

function mover() {
    console.log("movimentando em cima do elemento");
}

function sai() {
    console.log("sai de cima do elemento");
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
