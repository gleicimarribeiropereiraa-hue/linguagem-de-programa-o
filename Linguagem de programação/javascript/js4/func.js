function somar(){
    let num1 =Number(document.getElementById("n1").value);
    let num2 =Number(document.getElementById("n1").value);
    let total =num1 + num2;

    document.getElementById("resultado").innerHTML = total;
}

function subtrair(){
    let num1 =Number(document.getElementById("n1").value);
    let num2 =Number(document.getElementById("n1").value);
    let total =num1 - num2;

    document.getElementById("resultado").innerHTML = total;
}

function dividir(){
    let num1 =Number(document.getElementById("n1").value);
    let num2 =Number(document.getElementById("n1").value);
    let total =num1 / num2;

    document.getElementById("resultado").innerHTML = total;
}

function multiplicar(){
    let num1 =Number(document.getElementById("n1").value);
    let num2 =Number(document.getElementById("n1").value);
    let total =num1 * num2;

    document.getElementById("resultado").innerHTML = total;
}