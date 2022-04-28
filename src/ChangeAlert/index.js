import React from "react";
import {withStorageListener} from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({show, toggleShow}){
    
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};