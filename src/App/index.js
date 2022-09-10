import { useState, useEffect } from 'react';
import AppUI from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
  { text: 'Botar Basura', completed: true },
]; */
/* var retrievedObject = localStorage.getItem('todos');
var defaultTodos = JSON.parse(retrievedObject); */

function useLocalstorages(itenName, initialValue) {
  const localStorageItem = localStorage.getItem(itenName);
  let parseItem;

  if(!localStorageItem) {
    localStorage.setItem(itenName, JSON.stringify(initialValue));
    parseItem = initialValue;
  } else {
    parseItem = JSON.parse(localStorageItem);
  }
  // Creamos los estados
  const [item, setItem] = useState(parseItem)

  useEffect(() => {
    localStorage.setItem(itenName, JSON.stringify(item));
  },[item]);

  return [
    item,
    setItem,
  ]
}

function App() {
  const [todos, saveTodos] = useLocalstorages('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')
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

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      setTodos={saveTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}
export default App;
