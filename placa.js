alert("Eu sou um alert!");
console.log("cheyenne")

var nome = "victor"
localStorage.setItem("nome", nome)
localStorage.getItem("nome")
console.log(localStorage.getItem("nome"))
// guardar no local storage
// recuperar do local storage e atribuir uma variavel
// fazer console log dessa variável


var placa = document.getElementById("placa")
var dados = localStorage.getItem ("numeroplaca")
if (dados == null){
    localStorage.setItem("numeroplaca", "[]");
    dados = [];
}

var registro = {
    placaveiculo:placa.value
}

dados.push(registro);
    localStorage.setItem("numeroplaca", JSON.stringify(dados));
