const contenido = document.getElementById("contenido");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "productos";
    content.innerHTML = `
        <img src="${product.img}" class="img">
        <h3 class="nombre">${product.nombre}</h3>
        <p class="precio">${product.precio} $</p>    
    `;

    contenido.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        let timerInterval
Swal.fire({
  title: 'Agregado correctamente al carrito!',
  html: '',
  timer: 1000,
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
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    });
});

