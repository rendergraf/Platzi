import React from 'react';
import { Checkbox, Box, Stack, Button } from '@chakra-ui/react'
import TodoItem from '../TodoItem';

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
    return (
        <Box
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}
            mt={10}>
            <Stack spacing={4}>
                {
                    todos.map((todo, index) => {
                        return (
                            <TodoItem
                                key={index} 
                                todo={todo} 
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                            />
                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default TodoList;