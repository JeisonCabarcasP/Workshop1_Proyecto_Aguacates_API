/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const API = "https://platzi-avo.vercel.app/api/avo";

window.fetch(API) // Nos conectamos a la API
    .then((respuesta) => respuesta.json()) // se reciben los datos de la API Y SE CONVIERTEN EN JSON
    .then(respuestaJson =>{  // convertivos los datos en un array
        
    })
