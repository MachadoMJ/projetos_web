var butlogar = document.querySelector("#logar");
var butcadastrar = document.querySelector("#cadastrar");

var body = document.querySelector("body");


butcadastrar.addEventListener("click", function () {
    return body.className = "cadastrar animar";
});

butlogar.addEventListener("click", function () {
    return body.className = "logar";
});