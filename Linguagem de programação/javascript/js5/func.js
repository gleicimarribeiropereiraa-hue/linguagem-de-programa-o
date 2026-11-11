
function diaSemana(){
    let valor= Number(document.getElementById("dia").value);
    if(valor!= 7  && valor!= 1){
        alert("Dia de Semana!!!😨")
    }else{
        alert("Fim de semana Aproveitem😎")
    }

    switch(valor){
        case 1:
        alert ("Domingo😎😎");
        break;
        case 2:
        alert ("Segunda😨");
        break;
        case 3:
        alert("Terça 😨");
        break;
        case 4:
        alert("Quarta😨");
        break;
        case 5:
        alert("Quinta😨");
        break;
        case 6:
        alert("Sexta😎😎");
        break;
        case 6:
        alert("Sábado😎😎");
        break;
}
    
}

