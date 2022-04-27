import React from "react";

function TodoSearchResults(props){
    return(
        <p>No encontramos resultados para:  {props.searchText}</p>
    );
}
export {TodoSearchResults};
