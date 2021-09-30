//FUNCION PARA VALIDAR USUARIO

function checkUsername(){

	let valor = document.getElementById("username").value;

	if(valor.length == 0){
		alert("El nombre de usuario es requerido.");
		return false;
	}
	else if(valor.length > 30){
		alert("El nombre de usuario debe tener una longitud máxima de 30 caracteres.");
		return false;
	}
	else{
		return true;
	}
}

//FUNCION PARA VALIDAR LA CONTRASEÑA

function checkContrasena(){

	let valor = document.getElementById("contrasena").value;

	if(valor.match(/[a-z]/) && valor.match(/[A-Z]/) && valor.match(/[0-9]/) && valor.length >= 8){ 
		return true;
	}
	else{ 
		alert("La contraseña debe contener por lo menos una letra mayúscula, una minúscula, un número y una longitud mayor o igual a 8 dígitos.");
		return false;
	}
}

//FUNCION PARA VALIDAR LA RESPUESTA DE SEGURIDAD

function checkRespuestaSeg(){

	let valor = document.getElementById("respuesta");

	if(valor == null || valor.match(/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/) || valor.length > 30 || valor.length == 0){ 
		alert("La respuesta solo debe contener caracteres alfanuméricos, debe tener una longitud no mayor a 30 dígitos y no puede dejarse vacía");
		return false;
	}
	else{ 
		return true;
	}
}

module.exports={checkUsername, checkContrasena, checkRespuestaSeg}