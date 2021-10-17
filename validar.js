function validarDatos(){
    let verificar = true;
    /*Valida que los inputs tengan un valor*/
    if(!document.frm_vacunacion.opc_documento.value){
        alert("Seleccione un tipo de documento");
        document.frm_vacunacion.opc_documento.focus();
        verificar = false;
        console.log("Si pasa")
    }
    else if(!document.frm_vacunacion.documento_num.value && !document.querySelector('#documento_num').getAttribute('required')){
        alert("Número de documento es requerido, Ingrese el número del documento");
        document.frm_vacunacion.documento_num.focus();
        verificar = false;
    }
    else if(!document.frm_vacunacion.nombre_txt.value){
        alert("El campo Nombre es requerido!");
        document.frm_vacunacion.nombre_txt.focus();
        verificar = false;
    }

    else if(!document.frm_vacunacion.apellido_txt.value){
        alert("El campo Apellido es requerido!");
        document.frm_vacunacion.apellido_txt.focus();
        verificar = false;
    }
    
    else if(document.frm_vacunacion.opc_vacuna.value === "Elija una opción"){
        alert("Seleccione un tipo de vacuna");
        document.frm_vacunacion.opc_documento.focus();
        verificar = false;
    }
    
    else if(!document.frm_vacunacion.fecha1_txt.value){
        alert("El campo Fecha de la primera dosis es requerido");
        document.frm_vacunacion.fecha1_txt.focus();
        verificar = false;
    }
    else if(!document.frm_vacunacion.fecha2_txt.value){
        document.frm_vacunacion.fecha2_txt.value = "Pendiente";
        // document.getElementById("date1").removeAttribute('name');
    }

    if(verificar){
        document.frm_vacunacion.submit(); /*Si todo esta correcto submit() envia al formulario */
    }
}

/* Crear un evento de click, al dar click en el boton, llama a la funcion anterior y valida los datos del formulario*/
window.onload = function(){
    document.getElementById("enviar-datos").onclick = validarDatos;
}
