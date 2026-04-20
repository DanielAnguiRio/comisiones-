const VENTA_BASE = 5;

function calcularComision(numeroVentas,precioProducto){
    let comision = 0;

    if(numeroVentas > VENTA_BASE){
        let ventasExtra = numeroVentas - VENTA_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}

function calcular(){

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