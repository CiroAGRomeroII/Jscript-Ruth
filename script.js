/**
 * SISTEMA PROMOCIONAL: "¡INVERTÍ EN TU FUTURO!"
 * Implementación de conceptos de la documentación de LenguajeJS.com
 */

const nombreAcademia = "Tech Academy BA";
const precioBecaMaximo = 5000; 

const promocion = {

    verificarElegibilidad: function() {
        const contenedor = document.getElementById("res-elegibilidad");
        
        let edadUsuario = prompt("Por favor, ingresá tu edad:");
        let presupuestoUsuario = prompt("¿Cuánto estás dispuesto a invertir en tu educación (USD)?");

        edadUsuario = parseInt(edadUsuario);
        presupuestoUsuario = parseFloat(presupuestoUsuario);

        if (isNaN(edadUsuario) || isNaN(presupuestoUsuario)) {
            contenedor.innerText = "[!] Error: Por favor ingresá valores numéricos válidos.";
            return;
        }

        let mensajeResultado = `=== EVALUACIÓN EN: ${nombreAcademia} ===\n`;
        
        if (edadUsuario >= 18 && edadUsuario <= 75 && presupuestoUsuario >= 1200) {
            mensajeResultado += "¡Felicidades! Calificás para el Acceso Premium Directo.\n";
            mensajeResultado += "Acceso inmediato al campus virtual habilitado.";
        } else if (edadUsuario >= 16 && presupuestoUsuario < 1200) {
            mensajeResultado += "Calificás para nuestro Programa de Becas Estudiantiles.\n";
            mensajeResultado += "Se te asignará un mentor de soporte financiero.";
        } else {
            mensajeResultado += "Requisitos no cumplidos de forma automática.\n";
            mensajeResultado += "Un asesor se comunicará con tu tutor legal.";
        }

        contenedor.innerText = mensajeResultado;
    },

    cursos: [
        { id: 1, titulo: "Bootcamp Fullstack JavaScript", precio: 2500, stockCupos: 15, activo: true },
        { id: 2, titulo: "Especialización en Arquitectura Cloud", precio: 4000, stockCupos: 0, activo: true },
        { id: 3, titulo: "Diseño de Interfaces UX/UI", precio: 1800, stockCupos: 8, activo: false },
        { id: 4, titulo: "Inteligencia Artificial con Python", precio: 3500, stockCupos: 20, activo: true }
    ],

    renderizarCursos: function(listaAFiltrar) {
        const contenedorCursos = document.getElementById("lista-cursos");
        contenedorCursos.innerHTML = ""; 

        listaAFiltrar.forEach(curso => {
            const card = document.createElement("div");
            card.className = "curso-card";
            card.innerHTML = `
                <strong>${curso.titulo}</strong><br>
                Inversión: $${curso.precio} USD | Cupos disponibles: ${curso.stockCupos}<br>
                <em>Estado del Trayecto: ${curso.activo ? "Abierto" : "Próximamente"}</em>
            `;
            contenedorCursos.appendChild(card);
        });
    },

    filtrarCursosDisponibles: function() {
        const cursosDisponibles = this.cursos.filter(curso => curso.activo && curso.stockCupos > 0);
        
        this.renderizarCursos(cursosDisponibles);
        
        alert("Filtro aplicado: Mostrando solo trayectos con vacantes e inscripciones abiertas.");
    },

    simularInscripcion: function() {
        const contenedor = document.getElementById("res-inscripcion");

        const estudiantePrueba = new Estudiante(
            1044, 
            "Micaela Silva", 
            "msilva@email.tech", 
            "Bootcamp Fullstack JavaScript"
        );

        contenedor.innerText = estudiantePrueba.obtenerFichaDigital();
    }
};

class Estudiante {
    constructor(legajo, nombre, email, cursoInscripto) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.email = email;
        this.cursoInscripto = cursoInscripto;
        this.fechaInscripcion = new Date().toLocaleDateString(); 
    }

    obtenerFichaDigital() {
        return `=== FICHA DIGITAL DE INSCRIPCIÓN ===\n` +
               `Nro Legajo: #000${this.legajo}\n` +
               `Estudiante: ${this.nombre}\n` +
               `Contacto: ${this.email}\n` +
               `Trayecto Asignado: ${this.cursoInscripto}\n` +
               `Fecha de Alta en Sistema: ${this.fechaInscripcion}\n` +
               `-------------------------------------\n` +
               `Estado del Alumno: REGULAR / REVISADO`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    promocion.renderizarCursos(promocion.cursos);
});
