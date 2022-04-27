import React from "react";
import { TodoContext } from "../TodoContext/index";
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}){

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return(
        <input 
        className="TodoSearch" placeholder="Cebolla"
        value={searchValue}
        onChange={onSearchValueChange}
        />       
    );
}

export {TodoSearch}