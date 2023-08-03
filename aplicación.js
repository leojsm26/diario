// Crea un arreglo vacío para almacenar los registros
let registros = [];

// Función para agregar un registro
function agregarRegistro(registro) {
    registros.push(registro);
    actualizarRegistros();
}

// Función para eliminar un registro
function eliminarRegistro(indice) {
    registros.splice(indice, 1);
    actualizarRegistros();
}

// Función para actualizar la visualización de los registros
function actualizarRegistros() {
    let listaRegistros = document.getElementById('listaRegistros');
    listaRegistros.innerHTML = '';
    for (let i = 0; i < registros.length; i++) {
        let registro = registros[i];
        let elementoRegistro = document.createElement('li');
        elementoRegistro.innerHTML = registro;
        let botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = 'Eliminar';
        botonEliminar.onclick = function() {
            eliminarRegistro(i);
        }
        elementoRegistro.appendChild(botonEliminar);
        listaRegistros.appendChild(elementoRegistro);
    }
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(evento) {
    evento.preventDefault();
    let entradaRegistro = document.getElementById('entradaRegistro');
    let registro = entradaRegistro.value;
    agregarRegistro(registro);
    entradaRegistro.value = '';
}

// Agrega un detector de eventos al formulario
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', manejarEnvioFormulario);
