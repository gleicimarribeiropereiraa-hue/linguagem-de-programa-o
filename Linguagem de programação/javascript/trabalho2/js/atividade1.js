
function Infoturno(){

let turno =document.getElementById('turno').value;
const M ="matutino";
const V= "Vespertino";
const N= "Noturno";

switch(turno){
    case M:
        document.getElementById('turno_aula').innerHTML=M +"Bom Dia";
    break
     case V:
        document.getElementById('turno_aula').innerHTML=V +"Boa Tarde";
    break
     case N:
        document.getElementById('turno_aula').innerHTML=N+"Boa Noite";
    break
}
}