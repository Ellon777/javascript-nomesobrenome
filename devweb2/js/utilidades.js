function juntarNome() {
    let      nome = document.getElementById("nome").value; 
    let sobrenome = document.getElementById("sobrenome").value;

    // 1. Concatenação de strings normal.
    let nomecompleto = nome + ' ' + sobrenome;

    // 2. Uso de interpolação strings (template strings).
    let nomecompleto1 = `<i>${nome} <br>${sobrenome}</i>`;

    // 3. Injetar texto da variável nomecompleto na tag <p> cujo id é "nomecompleto".
    document.getElementById("nomecompleto").innerText = nomecompleto;

    // 4. Injetar texto da variável nomecompleto1 na tag <p> cujo id é "nomecompleto1".
    document.getElementById("nomecompleto1").innerHTML = nomecompleto1;
}