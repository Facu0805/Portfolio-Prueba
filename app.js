let habilidades = ["HTML", "CSS", "Bootstrap", "JavaScript"];

const idPresentacion = document.getElementById("presentacion");
idPresentacion.textContent = "Actualmente aprendiendo desarrollo web mediante un curso de Introducción a la Programación dictado por la UTN y por una página gratuita llamada freeCodeCamp.";

const idContenedorH = document.getElementById("contenedorH");
for (let i = 0; i < habilidades.length; i++) {
    idContenedorH.innerHTML += `
        <p class="mx-1 p-2 tec">${habilidades[i]}</p>
    `
}