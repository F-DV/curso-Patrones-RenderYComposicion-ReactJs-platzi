import React from "react";
import {useStorageListener} from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({sincronize}){
    
    const {show, toggleShow} = useStorageListener(sincronize);

    if(show){
        return(
            <div className="ChangeAlert-bg">
                <div className="changeAlert-container">
                    <p>Parece que cambiaste tus TODOS en otra pestaña o ventana</p>
                    <p>¿Quieres Sincronizar tusTODOs?</p>
                    <button
                        className="TodoForm-Button" 
                        onClick={ () => toggleShow(false)}>
                        si!
                    </button>
                </div>
            </div>
        );
    }else{
        return null;
    }
}

export {ChangeAlert};