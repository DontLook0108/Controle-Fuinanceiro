var titulo = document.querySelector (".titulo"); 
titulo.textContent = "Financeiro Controle"; 

var receitas = document.querySelectorAll(".receita");

//var registro = 0; 
var saldo = 0.0;

//while (registro < receitas.length){
for(var registro = 0; registro < receitas.length; registro++) {
    var receita = receitas [registro]; 
    var tdValor = receita.querySelector(".info-valor");
    var tdSaldo = receita.querySelector(".info-saldo"); 
    var valor = parseFloat(tdValor.textContent);
    saldo+=valor; 
    tdSaldo.textContent = saldo.toFixed(2);
    
    if (saldo < 0) {
        tdSaldo.classList.add("receita-negativa");
    } 
    //registro++;
} 


var botao = document.querySelector("#adicionar-receita"); 
botao.addEventListener("click", function(evento){
    evento.preventDefault(); 
    var form = document.formulario; 
    var descricao = form.descricao.value; 
    var categoria = form.categoria.value;
    var data = form.data.value; 
    var valor = parseFloat(form.valor.value); 
    var msgErros = document.querySelector(".erros"); 
    var erros = [];

    limparErros(erros); 

    if (descricao.length <= 0){
        erros.push("A descrição é obrigatoria."); 
    } 
    if (categoria.length <= 0){
        erros.push("A categoria é obrigatoria."); 
    } 
    if (data.length <= 0){
        erros.push("A data é obrigatoria."); 
    } 
    if (isNaN(valor)) { 
        erros.push("O valor é obrigatório."); 
    } else{
        if(valor == 0) { 
            erros.push("O valor deve ser diferente de zero (0)."); 
        }
    }
    
    if (erros.length > 0) { 
        limparErros(msgErros);
        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erros[erro]; 
            msgErros.appendChild(li);
        })  
    } 
    var tabela = document.querySelector("tabela-receita"); 
    var tr = document.createElement("tr"); 
    var tdDescricao = document.createElement("td");
    var tdCategoria = document.createElement("td");
    var tdData = document.createElement("td");
    var tdValor = document.createElement("td");
    var tdSaldo = document.createElement("td");

    
    tdDescricao.textContent = descricao; 
    tdDescricao.classList.add(".info-descricao");
    tr.appendChild(tdDescricao); 

    tdCategoria.textContent = categoria;
    tdCategoria.classList.add(".info-categoria"); 
    tr.appendChild(tdCategoria); 

    tdData.textContent = data; 
    tdData.classList.add(".info-data");
    tr.appendChild(tdData); 

    tdValor.textContent = valor; 
    tdData.classList.add(".info-valor");
    tr.appendChild(tdValor); 

    var saldoAnterior = parseFloat(receitas[receitas.length - 1].querySelector(".info-saldo").textContent);
    var saldo = saldoAnterior + valor; 
    tdSaldo.textContent = saldo;
    tdSaldo.classList.add(".info-saldo"); 
    tr.appendChild(tdSaldo); 

    if(saldo < 0) {
        tdSaldo.classList.add("receita-negativa"); 
    } else{
        if(saldo > 0) {
            tdSaldo.classList.add("receita-positiva");
        }
    }

    tr.appendChild(tdSaldo); 


    limparErros(erros);
    formulario.reset();

}); 

function limparErros(erros) {
    erros.innerHTML = "";
};
       