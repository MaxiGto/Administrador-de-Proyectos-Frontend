import React, { useContext, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import AlertaContext from '../../context/alertas/alertaContext';


const ListadoProyectos = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, mensaje, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {

        // Si hay un error
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
    }, [mensaje])

    // Revisa si proyectos tiene contenido
    if(proyectos.length === 0) return <p>Crea tu primer proyecto</p>;


    return ( 

        <ul
            className="listado-proyectos"
        >

        { alerta && ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) }

        <TransitionGroup>
            {proyectos.map( proyecto => (
                <CSSTransition
                    key={proyecto._id}
                    timeout={200}
                    classNames="proyecto"
                >
                <Proyecto
                    proyecto={proyecto}
                />
                </CSSTransition>
            ) )}
        </TransitionGroup>
        </ul>

     );
}
 
export default ListadoProyectos;