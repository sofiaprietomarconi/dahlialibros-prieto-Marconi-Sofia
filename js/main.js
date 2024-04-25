
const productos = [
    {
        id: "libroIndex1",
        titulo: "Breve historia del comic - Gerardo Vilches",
        imagen: "imagenes/brevehistoriadelcomic.png",
        tipo: "Historieta",
        precio: 19900,
        categoria: 
        {
            nombre: "historieta",
            id: "historietas"
        }
    },
    {
        id: "libroIndex2",
        titulo: "En agosto nos vemos - Gabriel García Márquez",
        imagen: "imagenes/en-agosto-nos-vemos.jpg",
        tipo: "Literatura contemporánea",
        precio: 19900,
        categoria: 
        {
            nombre: "libro",
            id: "libros"
        }
    },
    {
        id: "libroIndex3",
        titulo: "Encuentra tu persona vitamina - Marian Rojas Estapé",
        imagen: "imagenes/encuentratupersona.jpg",
        tipo: "Piscologia",
        precio: 19900,
        categoria: 
        {
            nombre: "libro",
            id: "libros"
        }
    },
    {
        id: "libroIndex4",
        titulo: "Fabricante de lágrimas - Erin Doom",
        imagen: "imagenes/fabricante-de-lagrimas.jpg",
        tipo: "Juvenil",
        precio: 19900,
        categoria: 
        {
            nombre: "libro",
            id: "libros"
        }
    },
    {
        id: "libroIndex5",
        titulo: "El duelo - Gabriel Rolon",
        imagen: "imagenes/gabrielrolonduelo.jpg",
        tipo: "Psicologia",
        precio: 19900,
        categoria: 
        {
            nombre: "libros",
            id: "libros"
        }
    },
    {
        id: "libroIndex6",
        titulo: "Mayor y menor",
        imagen: "imagenes/mayorymenor.webp",
        tipo: "Historieta",
        precio: 19900,
        categoria: 
        {
            nombre: "historieta",
            id: "historietas"
        }
    },
    {
        id: "libroIndex7",
        titulo: "Habitos atomicos - James clear",
        imagen: "imagenes/portada_habitos-atomicos_james-clear_202002111200.jpg",
        tipo: "Psicologia",
        precio: 19900,
        categoria: 
        {
            nombre: "libro",
            id: "libros"
        }
    },
    {
        id: "libroIndex8",
        titulo: "La felicidad - Gabriel Rolon",
        imagen: "imagenes/portada_la-felicidad_gabriel-rolon_202311082001.jpg",
        tipo: "Psicologia",
        precio: 19900,
        categoria: 
        {
            nombre: "libro",
            id: "libros"
        }
    },
        {
            id: "libro1",
            titulo: "Los padecientes - Gabriel Rolon",
            imagen: "imagenes/gabrielrolonpadecientes.webp",
            tipo: "Policial",
            precio: 19900,
            categoria: 
            {
                nombre: "libro",
                id: "libros"
            }
        },
        {
            id: "libro2",
            titulo: "Alguien tiene un secreto - Karen Mcmanus",
            imagen: "imagenes/alguientienesecreto.webp",
            tipo: "Policial",
            precio: 19900,
            categoria: 
            {
                nombre: "libro",
                id: "libros"
            }
        },
        {
            id: "libro3",
            titulo: "Finale - Stephanie Garber",
            imagen: "imagenes/finale.webp",
            tipo: "Ficcion",
            precio: 19900,
            categoria: 
            {
                nombre: "libro",
                id: "libros"
            }
        },
        {
            id: "libro4",
            titulo: "Caraval - Stephanie Garber",
            imagen: "imagenes/caraval.webp",
            tipo: "Ficcion",
            precio: 19900,
            categoria: 
            {
                nombre: "libro",
                id: "libros"
            }
        },
        {
            id: "libro5",
            titulo: "Palabras Cruzadas - Gabriel Rolon",
            imagen: "imagenes/palabrascruzadas.webp",
            tipo: "Psicologia",
            precio: 19900,
            categoria: 
            {
                nombre: "libro",
                id: "libros"
            }
        },
        {id: "historieta1",
        titulo: "Heartstopper 1 - Alice Oseman",
        imagen: "imagenes/heartstopper1.webp",
        tipo: "Historieta",
        precio: 19900,
        categoria: 
        {
            nombre: "historieta",
            id: "historietas"
        }
    },
    {
        id: "historieta2",
        titulo: "Heartstopper 2 - Alice Oseman",
        imagen: "imagenes/heartstopper2.webp",
        tipo: "Historieta",
        precio: 19900,
        categoria: 
        {
            nombre: "historieta",
            id: "historietas"
        }
    },
    {
        id: "historieta3",
        titulo: "Los Peculiares - Cait May y Trevor Bream",
        imagen: "imagenes/lospeculiares.webp",
        tipo: "Historieta",
        precio: 19900,
        categoria: 
        {
            nombre: "historieta",
            id: "historietas"
        }
    },
]


const productosInicio = document.querySelector(".productos-inicio")
const botonItems = document.querySelectorAll(".boton-item")

function agregarProductos (productoSeleccionado){
    productosInicio.innerHTML = "";
    productos.forEach( producto =>
        {
            const div = document.createElement("div")
            div.classList.add("producto");
            div.innerHTML= ` 
            <img src= "${producto.imagen}" style="max-width: 60%;">
            <div class="info-producto">
                <p>${producto.titulo}</p>
                <p>${producto.precio}</p>
                <button class="agregar-carrito" id="${producto.id}">Agregar al carrito</button>
            </div>    
            `      
            productosInicio.append(div)
        })
}

agregarProductos(productos)


botonItems.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonItems.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos-los-productos"){
            const categoriaSeleccionada = e.currentTarget.id.toLowerCase();
            const productosSelector = productos.filter(producto => producto.categoria.id.toLowerCase() === categoriaSeleccionada);
            agregarProductos(productosSelector)
        }else{
            agregarProductos(productos)
        }

    });
});

