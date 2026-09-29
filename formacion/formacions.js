let formacion = [
    {
        nombre: "Tecnicatura Superior en Programación",
        institucion: "Universidad Tecnológica Nacional (UTN)",
        fecha: "2027 - 2028",
        descripcion: "Formación intensiva en desarrollo de software, algoritmos, estructuras de datos y bases de datos relacionales.", 
    },

    {
        nombre: "Inglés Nivel A1",
        institucion: "Busuu",
        fecha: "2026",
        descripcion: "Curso de nivel A1, enfocado en lo básico del inglés.",

    },

    {
        nombre: "Diseño Web Adaptable",
        institucion: "freeCodeCamp",
        fecha: "2026",
        descripcion: "Fundamentos de HTML y CSS, incluyendo diseño moderno, diseño adaptable, accesibilidad y desarrollo web adaptable.",
    },
];

const idContenedorFormacion = document.getElementById("contenedor-formacion");
for (let i = 0; i < formacion.length; i++) {
    idContenedorFormacion.innerHTML += `
        <div class="card mb-3">
            <div class="card-body">
                <h3 class="card-title">${formacion[i].nombre}</h3>
                    <div class="d-flex">
                        <p  id="ins" class="card-text">${formacion[i].institucion}</p>
                        <p class="card-text mx-3">
                            <i class="bi bi-calendar2-fill"></i>
                            ${formacion[i].fecha}
                        </p>
                    </div>
                <p class="card-text">${formacion[i].descripcion}</p>
            </div>
        </div>            
    `
}