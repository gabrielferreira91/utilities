var titulo =  document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {

	var tdAltura = pacientes[i].querySelector(".info-altura");
	var tdPeso = pacientes[i].querySelector(".info-peso");
	var tdImc = pacientes[i].querySelector(".info-imc");


	var altura = tdAltura.textContent;
	var peso = tdPeso.textContent;

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);

	if (!pesoEhValido) {
	    console.log("Peso inválido!");
	    tdPeso.textContent = "Peso inválido!";
	    pesoEhValido = false;
	    pacientes[i].classList.add("paciente-invalido");

	}

	if (!alturaEhValida) {
	    console.log("Altura inválida!");
	    tdAltura.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    pacientes[i].classList.add("paciente-invalido");
	}

	if (alturaEhValida && pesoEhValido) {

	    var imc = calculaImc(peso, altura)
	    tdImc.textContent = imc;    
	} else {
	    tdImc.textContent = "Altura e/ou peso inválidos!"
	    pacientes[i].classList.add("paciente-invalido");
	}

}

function validaPeso(peso){
	if(peso >= 0 && peso < 1000) {
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >=0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}
}


function calculaImc(peso,altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}


//titulo.addEventListener("click", mostraMensagem);

//function mostraMensagem() {
//	console.log("Fui clicado");
//}
