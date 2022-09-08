import React, { useState } from 'react';
import { Box, VStack, Heading, Text, Container } from '@chakra-ui/react'
import Header from './components/Header';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const completeTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const onSearchValue = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  let searchTodos = [];

  if(!searchValue.length > 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  return (
    <Box py={12} bg={'gray.200'}>
      <Header completeTodos={completeTodos} totalTodos={totalTodos}/>
      <Container maxW={'3xl'}>
        <TodoSearch onSearchValue={onSearchValue} searchValue={searchValue}/>
        <TodoList todos={searchTodos} setTodos={setTodos}/>
      </Container>
    </Box>
  )
}
export default App;
