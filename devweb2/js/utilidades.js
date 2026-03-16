function juntarNome() {

    let nome = document.getElementById("nome").value; 
    let sobrenome = document.getElementById("sobrenome").value;
    let nomecompleto = nome + ' ' + sobrenome;
    let nomecompleto1 = `<i>${nome} <br>${sobrenome}</i>`;

    document.getElementById("nomecompleto").innerText = nomecompleto;
    document.getElementById("nomecompleto1").innerHTML = nomecompleto1;
}
function escreverNome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    let css = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">';
    let resultado = "<strong>" + nome + " " + sobrenome + "</strong><br>";

    document.writeln(css); 
    document.writeln(resultado);
    document.writeln("<button id='voltar' onclick='location.reload()'> " +
                     "<i class='fa-solid fa-angle-left'></i> Voltar </button>");
}
function mostrarLog(n,s) {
    console.log("Nome: " + n);
    console.log("Sobrenome: " + s);
    console.log("Nome Completo: " + n + " " + s);
}
function ajustarFoco() {
    document.getElementById("nome").focus();
}
function limparDados() {

    document.getElementById("nomes").reset();
    document.getElementById("nomecompleto").innerText = "";
    document.getElementById("nomecompleto1").innerHTML = "";

    ajustarFoco();
}
function alerta() {
    window.alert("Enquanto não fechar esta janela, \nnão será mostrado o nome completo.");
}