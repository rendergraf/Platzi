import React, { createContext, useState, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import useLocalStorage from './useLocalStorage';

const TodoContext = createContext();
TodoContext.displayName = 'TodoContext';

const TodoProvider = (props) => {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    console.log(searchValue)
    // Contamos los Todo completatos y la cantidad total
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    // Creamos la lista de Todos a filtrar si es true o false
    let searchTodos = [];
    // Escuchamos si hay cambios en el input y dependiendo de él hacemos la búsqueda
    if (!searchValue.length > 1) {
        searchTodos = todos;
    } else {
        searchTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText)
        })
    }
    // Busca el indice del Todo
    const searcIndex = (text) => {
        return todos.findIndex(todo => todo.text.includes(text));
    }
    // Cambia a true el Todo
    const completeTodo = (text) => {
        const todoIndex = searcIndex(text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos)
    }
    // Borramos un Todo
    const deleteTodo = (text) => {
        const todoIndex = searcIndex(text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    }
     // crearTodo
     const crearTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false
        })
        saveTodos(newTodos)
    }
    return (
        <TodoContext.Provider
            value={{
                error,
                loading,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchTodos,
                saveTodos,
                completeTodo,
                deleteTodo,
                isOpen,
                onOpen,
                onClose,
                initialRef,
                finalRef,
                crearTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
