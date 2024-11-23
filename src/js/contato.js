const form  =document.getElementById("form")
const nome  =document.getElementById("nome")
const email =document.getElementById("email")
const telefone =document.getElementById("telefone")

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

form.addEventListener('submit',(e)=>{

  e.preventDefault()
  checarCampos()
})  

function checarCampos(){
  const nomeValor = nome.value.trim()
  const emailValor = email.value.trim()
  const telefoneValor = telefone.value.trim()

  if(nomeValor === ""){
    validarErro(nome, "Preencha o campo nome")
  }
  else{
    validarSucesso(nome)
  }

  if(emailValor === ""){
    validarErro(email, "Preencha o campo email")
  }
  else{
    validarSucesso(email)
  }

  if(telefoneValor === ""){
    validarErro(telefone, "Preencha o telefone")
  }
  else{
    validarSucesso(telefone)
  }
}

function validarErro(input,message){
  const conteudo = input.parentElement;
  const small = conteudo.querySelector('small')
  small.innerText = message 
  conteudo.className = "conteudo error"
}

function validarSucesso(input){
  const conteudo = input.parentElement;
  conteudo.className = "conteudo sucesso"
}
