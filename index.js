const express = require("express")
const app = express()

const puerto = 4000;

app.get("/", (req, res) => {
    res.send("Hola mundo");
})

app.get("/usuarios", (request, response)=>{
    // Listar, solicitar informacion
    const usuarios = [
        {
            id: 1,
            nombre: "Jesus Cardenas"
        },
        {
            id: 2,
            nombre: "Angel Rodriguez"
        },
        {
            id: 3,
            nombre: "Leopoldo Ramirez"
        }
    ];
    response.json(usuarios);
})

app.post("/usuarios", (request, response)=>{
    // Agregar NUEVOS usuarios
    response.send("Entro al endpoint de usuarios POST");
})

app.put("/usuarios", (request, response)=>{
    // Editar usuarios
    response.send("Entro al endpoint de usuarios PUT");
})

app.delete("/usuarios", (request, response)=>{
    // Eliminar usuarios
    response.send("Entro al endpoint de usuarios DELETE");
})



app.get("/mascotas_famosas", (require, response) => {
    // listar, solicitar información del endpoint
    const mascotas = [
        {
            id: 1,
            nombre: "Keiko"
        },
        {
            id: 2,
            nombre: "Proteo"
        },
        {
            id: 3,
            nombre: "Frida"
        }
    ]
    response.json(mascotas)
})

app.listen(puerto, () => {
    console.log(`El servidor esta corriendo en : http://localhost:${puerto}`);
})

