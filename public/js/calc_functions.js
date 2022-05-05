function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 9) return;
    if(display.value === '0') display.value = btn.value;
    //if (display.value ==='**') display.value
    else display.value += btn.value;
}

function somarflutuante(numfloat){
    document.getElementById("")
}

function calcularaiz(){
    const numero = document.getElementById("display");
    const resultado = Math.sqrt(numero.value);
    display.value = resultado;
}


var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.value;
    valor1 = parseInt(display.value);
    display.value = '0';
}

function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = parseInt(display.value);
    valor1 = eval(valor1+operador+valor2);
    display.value = valor1;
    operador = '';
}       

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}

function limparDisplay(){
    document.getElementById('display').value = "0"
}
