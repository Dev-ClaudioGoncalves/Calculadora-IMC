// Variaveis
const calcular = document.getElementById("buttonCalcular");

//Eventos
calcular.addEventListener("click", function () {
  let peso = parseFloat(document.getElementById("inputPeso").value);
  let altura = parseInt(document.getElementById("inputAltura").value);
  let result = calcularImc(peso, altura).toFixed(2);
  let linhas = document.querySelectorAll("tr");

  if(isNaN(peso) || isNaN(altura)){
    document.querySelector('.tratativa').innerHTML = 'Por favor, preencha todas as informações.';
    document.querySelector(".resultado-imc").innerText = ``;
    linhas[1].classList.remove('styleTable');
    linhas[2].classList.remove('styleTable');
    linhas[3].classList.remove('styleTable');
    linhas[4].classList.remove('styleTable');
    document.querySelector('.container-result').classList.remove('displayNone');
    document.querySelector('body').style.cssText = 'height: 100vh;'

  }else{
    document.querySelector('.tratativa').innerHTML = ''
    document.querySelector('body').style.cssText = 'height: 1200px;'
    document.querySelector('.container-result').classList.add('displayNone');


    linhas[1].classList.remove("styleTable");
    linhas[2].classList.remove("styleTable");
    linhas[3].classList.remove("styleTable");
    linhas[4].classList.remove("styleTable");
  
    if (result > 0 && result < 18.5) {
      linhas[1].classList.add("styleTable");
    } else if (result >= 18.5 && result < 24.9) {
      linhas[2].classList.add("styleTable");
    } else if (result >= 24.9 && result < 30) {
      linhas[3].classList.add("styleTable");
    } else {
      linhas[4].classList.add("styleTable");
    } 
    document.querySelector(".resultado-imc").innerText = `${result} kg/m2.`;
  } 
});

function calcularImc(peso, altura) {
  return peso / ((altura * altura) / 10000);
}
