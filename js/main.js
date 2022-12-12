setTimeout(() => {
    let timerInterval
    Swal.fire({
        title: 'Estamos Cargando sus productos!',
        html: 'Cargado en <b></b>, Esperanos!!',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}, 50)
// PRODUCTOS
const productos = [
    // Accesorios
    {
        id: "accesorios-01",
        titulo: "Bandolera Houston",
        imagen: "../img/accesorios/01.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 2000
    },
    {
        id: "accesorios-02",
        titulo: "Canana Houston",
        imagen: "../img/accesorios/02.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 2000
    },
    {
        id: "accesorios-03",
        titulo: "Cinturon canana houston",
        imagen: "../img/accesorios/03.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 2000
    },
    {
        id: "accesorios-04",
        titulo: "Funda houston para armas",
        imagen: "../img/accesorios/04.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 2000
    },
    {
        id: "accesorios-05",
        titulo: "Muslera Houston",
        imagen: "../img/accesorios/05.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 3000
    },
    // Aires comprimidos
    {
        id: "aireComprimido-01",
        titulo: "Gamo P-27 Dual CO2 (Cal. 4.5mm)",
        imagen: "../img/aComprimidos/01.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 47400
    },
    {
        id: "aireComprimido-02",
        titulo: "Pistola ASG Bersa BP9cc Co2 (4.5mm)",
        imagen: "../img/aComprimidos/02.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 50600
    },
    {
        id: "aireComprimido-03",
        titulo: "Pistola Asg Cz 75 P-07 Duty Cal.4.5",
        imagen: "../img/aComprimidos/03.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 52950
    },
    {
        id: "aireComprimido-04",
        titulo: "Pistola ASG CZ P-09 4.5 Blowback Co2",
        imagen: "../img/aComprimidos/04.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 105550
    },
    {
        id: "aireComprimido-05",
        titulo: "Pistola ASG CZ SP-01 Shadow (4.5mm)",
        imagen: "../img/aComprimidos/05.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 31950
    },
    {
        id: "aireComprimido-06",
        titulo: "Pistola Co2 ASG Dan Wesson Valor 1991 Cal.4.5",
        imagen: "../img/aComprimidos/06.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 84350
    },
    {
        id: "aireComprimido-07",
        titulo: "Pistola Co2 RBN Tactical 1911 4.5mm",
        imagen: "../img/aComprimidos/07.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 19000
    },
    {
        id: "aireComprimido-08",
        titulo: "Pistola Fox M92 Co2 Full Auto Cal. 4.5",
        imagen: "../img/aComprimidos/08.jpg",
        categoria: {
            nombre: "Aires Comprimidos",
            id: "aComprimidos"
        },
        precio: 79700
    },
    // Cuchillos
    {
        id: "cuchillo-01",
        titulo: "Cuchillo Aitor Oso Negro De 18 Cm Negro",
        imagen: "../img/cuchillos/01.jpg",
        categoria: {
            nombre: "Cuchillos",
            id: "cuchillos"
        },
        precio: 10000
    },
    {
        id: "cuchillo-02",
        titulo: "Cuchillo Muela 3160 de 16 CM.",
        imagen: "../img/cuchillos/02.jpg",
        categoria: {
            nombre: "Cuchillos",
            id: "cuchillos"
        },
        precio: 15000
    },
    {
        id: "cuchillo-03",
        titulo: "Cuchillo Muela Bowie BW-16 de 16 CM. con Mango de Madera Laminada",
        imagen: "../img/cuchillos/03.jpg",
        categoria: {
            nombre: "Cuchillos",
            id: "cuchillos"
        },
        precio: 23900
    },
    {
        id: "cuchillo-04",
        titulo: "Cuchillo Muela Bowie BW10 de 10 CM. con Mango de Madera Laminada",
        imagen: "../img/cuchillos/04.jpg",
        categoria: {
            nombre: "Cuchillos",
            id: "cuchillos"
        },
        precio: 18000
    },
    {
        id: "cuchillo-05",
        titulo: "Cuchillo Muela Colibrí Col 7m Cachas De Madera",
        imagen: "../img/cuchillos/05.jpg",
        categoria: {
            nombre: "Cuchillos",
            id: "cuchillos"
        },
        precio: 21000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");





const pedirParaCargar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    })
}

let productos1 = [];

pedirParaCargar()
    .then((res) => {
        productos1 = res;
        cargarProductos(productos);
    })

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();

    let btnagregar = document.querySelectorAll(".producto-agregar");
    btnagregar.forEach(btnagregar => {
        btnagregar.addEventListener("click", confirmacion);
    });


    function confirmacion() {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Agregado al Carrito correctamente!!`,
            showConfirmButton: false,
            timer: 2000
        })
    }
}

// cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

const listaPokemon = document.querySelector("#lista-pokemon");

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        const pokemons = data.results;

        pokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.innerText = pokemon.name;
            listaPokemon.append(li);
        });
    })
