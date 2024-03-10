import React from "react";

import {data} from "../src/app/data";

export const Resultado=()=>{
    return(
        <div className="container">
            {data.map(volcan =>(
                <div className="item" key={volcan.id} >
                
                    <div className="informacion" >
                        <h2 className="nombre" >{volcan.nombre}</h2>
                       
                        <h4 className="descripcion">Descripcion</h4>
                        <p className="descripcion" >{volcan.descripcion}</p>
                       
                        
                        <p className="altura" >La altura del volcan es: <b> {volcan.altura} M.</b></p>
                        <p className="departamento" >Departamento Ubicado: <b>{volcan.departamento}</b></p>
                        
                        <h4>Caracteristicas</h4>
                        <p className="caracteristicas" >{volcan.caracteristicas}</p>
                        <hr></hr>
                        </div>
                        <div className="imagen">
                        <img src={volcan.imagen} key={volcan.nombre}/>
                        </div>
                       
                        </div>
                        
                                    ))}
        </div>
    );
            }