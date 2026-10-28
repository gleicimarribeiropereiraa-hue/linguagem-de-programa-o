//alert("Clicado")
//alert('Seja bem vindo')
var contaClick = 0;


AbreMensagem=()=>{
      contaClick=contaClick +1;
  //Onclick  alert("Botão clicado");
  document.querySelector('button').addEventListener("click",()=> alert("Clicou no botão"+" "+ contaClick));


}
