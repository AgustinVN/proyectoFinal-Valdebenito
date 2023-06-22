    const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>


        `;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");

        eliminar.innerText = "❌";
        eliminar.className = "eliminar-producto";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "total-comprado"
    totalComprado.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalComprado)
}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const foundid = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundid;
    });

    pintarCarrito()
}