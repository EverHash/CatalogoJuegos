export function crearElemento(elemento){

    return document.createElement(elemento);

}

export function obtenerElementoHTML(id){

    return document.getElementById(id);

}

export function eliminarTodosLosChildren(id){

    let elemento = obtenerElementoHTML(id);

    while(elemento.firstChild){

        elemento.removeChild(elemento.firstChild);

    }

}