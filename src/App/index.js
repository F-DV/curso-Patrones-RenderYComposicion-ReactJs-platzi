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
import {TodoSearchResults} from '../TodoSearchResults/index';
import {ChangeAlertWithStorageListener} from '../ChangeAlert/index';

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
    sincronizeTodos,
} = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          //loading={loading}    
        />
        
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        
        />
      </TodoHeader>

        <TodoList
          error={error}
          onError={()=> <TodosError/>}
          loading={loading}
          onLoading={()=> <Todosloading/>}
          searchTodos={searchTodos}
          totalTodos={totalTodos}
          onEmpty={()=> <Emptytodos/>} 
          onTodoSearchResults={()=> <TodoSearchResults
            searchText={searchValue}
          />}  
          
          render={todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete ={() => deleteTodo(todo.text)}     
              />
              )}  
        >
          {todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete ={() => deleteTodo(todo.text)}     
            />
            )}
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

      <ChangeAlertWithStorageListener 
        sincronize={sincronizeTodos}
      />     
  </React.Fragment>

  );
}
export {App};
