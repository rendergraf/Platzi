import React from 'react';
import { Box, Container } from '@chakra-ui/react'
import { Header, TodoSearch, TodoList } from '../components'

function AppUI({completedTodos, totalTodos, searchValue, setSearchValue, searchTodos,  setTodos, completeTodo, deleteTodo}) {

    return (
        <Box py={12} bg={'gray.200'}>
            <Header completedTodos={completedTodos} totalTodos={totalTodos}/>
            <Container maxW={'3xl'}>
                <TodoSearch searchValue={searchValue} onSearchValue={(event) => setSearchValue(event.target.value)}/>
                <TodoList
                todos={searchTodos}
                setTodos={setTodos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                />
            </Container>
        </Box>
    )
}

export default AppUI;