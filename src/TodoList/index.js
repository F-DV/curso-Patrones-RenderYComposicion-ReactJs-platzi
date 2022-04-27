import React from "react";

function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchTodos.length) && props.onEmpty()}
            <ul>
                {props.searchTodos.map(props.render)}
            </ul>
        </section>
    );
}
export {TodoList};