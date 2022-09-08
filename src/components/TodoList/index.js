import React from 'react';
import { Checkbox, Box, Stack, Button } from '@chakra-ui/react'

import TodoItem from '../TodoItem';

const TodoList = ({ todos }) => {
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
                            <TodoItem todo={todo} key={index}/>
                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default TodoList;