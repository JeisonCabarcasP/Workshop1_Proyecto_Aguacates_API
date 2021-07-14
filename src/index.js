/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl = "https://platzi-avo.vercel.app";

const appNode =document.querySelector("#container")

window.fetch(`${baseUrl}/api/avo`) // Nos conectamos a la API
    .then((respuesta) => respuesta.json()) // se reciben los datos de la API Y SE CONVIERTEN EN JSON
    .then(respuestaJson => {  // convertivos los datos en un array
        const allitems=[];
        respuestaJson.data.forEach((item) => {
            const imagen = document.createElement("img");
            imagen.src=`${baseUrl}${item.image}`;

            const titulo = document.createElement("h2");
            titulo.textContent=item.name;

            const price = document.createElement("div");
            price.textContent=item.price;

            const container = document.createElement("div");
            container.append(imagen,titulo,price); 
            allitems.push(container);
        });
        appNode.append(...allitems);
    })
