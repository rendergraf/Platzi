import React, { useContext} from 'react';
import { Box, Stack, Text, Skeleton } from '@chakra-ui/react'
import { TodoContext } from '../Context';
import { TodoItem, ModalTodo } from '../../components'

const TodoList = () => {
    const { searchTodos: todos, error, loading } = useContext(TodoContext);
    return (
            <Box
                rounded={'lg'}
                bg={'todo.1000'}
                backdropFilter={'blur(10px)'}
                boxShadow={'lg'}
                p={8}
                mt={10}
				mb={20}>
                <Stack spacing={4}>
                    {error && <Text>Error: {error}</Text>}
                    {loading && <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        </Stack>
                    }
                    {(!todos.length && !loading ) &&  <Text align={'center'}>No hay criterios de búsqueda</Text>}
                    <ModalTodo />
                    {
                        todos.map((todo, index) => {
                            return (
                                <TodoItem
                                    key={index} 
                                    todo={todo}
                                />
                            )
                        })
                    }
                </Stack>
            </Box>          
    )
}

export default TodoList;