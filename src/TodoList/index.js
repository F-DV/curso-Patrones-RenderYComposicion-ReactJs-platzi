import React from "react";

function TodoList(props){

    const renderFunction = props.children || props.render
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmpty()}

            {(!!props.totalTodos && !props.searchTodos.length) && props.onTodoSearchResults()}

            <ul>
                {(!props.loading && !props.error) && props.searchTodos.map(renderFunction)}
            </ul>
        </section>
    );
}
export {TodoList};