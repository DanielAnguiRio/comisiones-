const VENTA_BASE = 5;

function calcularComision(numeroVentas,precioProducto){
    let comision = 0;

    if(numeroVentas > VENTA_BASE){
        let ventasExtra = numeroVentas - VENTA_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}

function validarVentas(){
    let numeroVentasStr = recuperarTexto("txtVentas");

    if(numeroVentasStr.length > 5){
        alert("Maximo 5 caracteres");
        return false;
    }else{
        return true;
    }
}


function validarCampo(idInput, idError){
    let valor = document.getElementById(idInput).value;
    let error = document.getElementById(idError);

    // Vacío
    if(valor === ""){
        error.innerText = "Este campo es obligatorio";
        return;
    }

    // Solo números
    if(isNaN(valor)){
        error.innerText = "Solo se permiten números";
        return;
    }

    // Máximo 5 dígitos
    if(valor.length > 5){
        error.innerText = "Máximo 5 dígitos";
        return;
    }

    // Si todo está bien
    error.innerText = "";
}
 

function calcular(){

    if(validarVentas() == false){
        return;
    }
    //recuperamos propiedades de las cajas de texto 
    //let componenteSueldoBase=document.getElementById("txtSueldoBase");
    //let componenteVentas=document.getElementById("txtVentas");
    //let componentePrecio=document.getElementById("txtPrecio");

    //recuperamos el valor de las caja de texto 
    //let sueldoBaseStr=componenteSueldoBase.value;
   // let numeroVentasStr=componenteVentas.value;
    //let precioProductosStr=componentePrecio.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let precioProductosStr = recuperarTexto("txtPrecio");

    //convertimos el texto a numero 
    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let precioProducto=recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas,precioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal")

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}