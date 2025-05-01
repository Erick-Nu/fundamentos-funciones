// Laboratorio #3

// Validacion de un usuario [Page Supercines]

let usuario = {
    nombre: " Erick Nuñez    ",
    correo: "samuelrafa20009@gmail.com",
    contrasena: "Damian23*"
};

const validarUsuario = (usuario) =>{
    if (usuario.correo.toLocaleLowerCase().trim() !== "samuelrafa20009@gmail.com" || usuario.correo.trim() === "") {
        console.log("CORREO O CONTRASEÑA INCORRECTA");
        return; // Sale del condicional y no continua ejecutando el codido
    }
    if (usuario.contrasena.trim() !== "Damian23*" || usuario.contrasena.trim() === "") {
        console.log("CORREO O CONTRASEÑA INCORRECTA");
        return;
    }
    else{
        console.log(`Bienvenido ${usuario.nombre}`);
        return;
    }
};

validarUsuario(usuario);
