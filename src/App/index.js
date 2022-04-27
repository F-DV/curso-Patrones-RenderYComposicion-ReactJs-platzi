import React from "react";
import {TodoCounter} from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {Modal} from '../Modal/index';
import {TodoForm} from '../TodoForm'
import {Emptytodos} from '../EmptyTodos/index';
import {Todosloading} from '../TodosLoading/index';
import {TodosError} from '../TodosError/index';
import {TodoHeader} from '../TodoHeader/index';
import {useTodos} from './useTodos'

function App() {
  const {
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
} = useTodos();

  return (
    <React.Fragment>
    <TodoHeader>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}    
      />
      
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
    </TodoHeader>
      <TodoList>
          {error && <TodosError/>}
          {loading && 
          new Array(4).fill().map((item, index)=>(
            <Todosloading key={index} />))}
          {(!loading && !searchTodos.length) && <Emptytodos/>}

          {searchTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete ={() => deleteTodo(todo.text)}     
          />
          ))}
      </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm 
              setOpenModal={setOpenModal}
              addTodo={addTodo}
            />
          </Modal>
        )}
    <CreateTodoButton
      setOpenModal={setOpenModal}
      openModal={openModal}
    />      
  </React.Fragment>

  );
}
export {App};
