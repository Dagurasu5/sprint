//FUNCION PARA VALIDAR LA RESPUESTA DE SEGURIDAD

/*const form = document.getElementById('form-registro');
const inputs = document.querySelectorAll('#form-registro input');

const expresiones{
    respuesta: /^[a-zA-Z0-9\_\-]{4,16}$/;
}

form.addEventListener('btn-registrar', (e) => ) {
    e.preventDefault();
}*/

function checkRespuestaSeg(valor) {
    if (valor == "" || valor >= 30){
        alert("el campo Respuesta no puede estar vacio")
        return false;
    }
    else{
        if (valor.length >= 30){
            alert("El campo Respuesta de seguridad tiene que tener maximo 30 caracteres");
            return false;
        }
        else{
            if (/^[a-zA-Z0-9\_\-]{4,16}$/.test(valor)){
                alert("La Respuesta no puede tener caracteres especiales")
                return false;
            }
        }
    }
}

module.exports=checkRespuesta;