import React from 'react';
import ListadoProyectos from '../proyectos/ListadoProyectos';
import NuevoProyecto from '../proyectos/NuevoProyecto';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Task<span>Manager</span></h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>

                <ListadoProyectos />
            </div>
        </aside>
     );
}
 
export default Sidebar;

