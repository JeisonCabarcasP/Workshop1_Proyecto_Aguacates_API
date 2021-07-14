/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#container");


const formatPrice = (price) =>
    new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

window.fetch(`${baseUrl}/api/avo`) // Nos conectamos a la API
    .then((respuesta) => respuesta.json()) // se reciben los datos de la API Y SE CONVIERTEN EN JSON
    .then(respuestaJson => {  // convertivos los datos en un array
        const allitems = [];
        respuestaJson.data.forEach((item) => {
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

            const titulo = document.createElement("h2");
            titulo.className = "text-lg";
            titulo.style.fontSize="1.5rem"
            titulo.style.fontWeight="bold"
            titulo.textContent = item.name;

            const price = document.createElement("div");
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price);

            const container = document.createElement("div");
            container.className="container-card"
            container.append(imagen, titulo, price);
            allitems.push(container);

 
        });
        appNode.append(...allitems);
    })
