let numeroCliente = prompt('Digite qualquer valor: ');
numeroCliente = parseFloat(numeroCliente);

if (numeroCliente > 0) {
    alert("O valor digitado é positivo!");
} else if (numeroCliente < 0) {
    alert("O valor digitado é negativo!");
} else {
    alert("O valor é 0 ")
}

