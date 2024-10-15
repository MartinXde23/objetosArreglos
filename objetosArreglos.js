// Pagina Elegida -LinkedIn

const perfilM = [
    {
        nombre: "Martín",
        apellido: "Ayala",
        edad: 22,
        correo:"martin.ayala@epn.edu.ec",
        educacion: "Escuela Politecnica Nacional",
        empleos: {
            empleos: 1,
            seguidores: 0,
        },
        analisis: {
            visulizacionPerfil: 0,
            impresionesPublicacion: 0
        },
        direccion: {
            principal: "de los anturios",
            secundaria: "de las anonas"
        }
    }
];

const perfilMostrar = perfilM.map((pm) => {
    return {
      name: pm.nombre,
      lastname: pm.apellido,
      age: pm.edad,
      email: pm.correo,
      location: pm.direccion,
      education: pm.educacion,
    };
  });

console.log(perfilMostrar)

//Arreglos

const pgInicio = ['Inicio','Mi red','Empleos','Mensajes','Notificaciones','Yo']

const empleos = [
    {
        preferencias: "Software",
        evaluacionAptitudes: 10,
        preferenciasPersonales: "Desarrollador de Software",
        orientacionBuscarEmpleo: "Cursos"
    },
    {
        preferencias: "Vendedor",
        evaluacionAptitudes: 10,
        preferenciasPersonales: "Asesor de ventas",
        orientacionBuscarEmpleo: "Trabajo"
    }
]

const pgInicioMostrar= pgInicio.map((pim, index)=>{
    pimMayus=pim.toLocaleUpperCase()
    console.log(`${pimMayus} ${index+1}`)
})

empleos.forEach( pr => console.log(`Preferencia en ${pr.preferencias} por experiencia en ${pr.orientacionBuscarEmpleo}`))