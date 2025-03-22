const estudiante_0 = {nombre:"Spike",edad:30,calificaciones:[9,10,8],esEstudianteActivo:true}
const estudiante_1 = {nombre:"Jet",edad:37,calificaciones:[9,10,8],esEstudianteActivo:false}
const estudiante_2 = {nombre:"Faye",edad:23,calificaciones:[9,10,8],esEstudianteActivo:true}
const estudiante_3 = {nombre:"Ed",edad:12,calificaciones:[9,10,8],esEstudianteActivo:false}

let estudiantes = [estudiante_0,estudiante_1,estudiante_2,estudiante_3]

function mostrarEstudiantesActivos(array_estudiantes)
{
    filtered_array = array_estudiantes.filter((estudiante) => (estudiante.esEstudianteActivo))
    
    if ( filtered_array.length > 0 )
    {
        console.log("Estudiantes activos:")
        filtered_array.forEach((element) => console.log(element.nombre))
    }
    else
    {
        console.log("No hay estudiantes activos.")
    }
    
}

mostrarEstudiantesActivos(estudiantes)