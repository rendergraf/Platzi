import React from 'react';
import { VStack, Heading, Text} from '@chakra-ui/react'
import { TodoContext } from '../Context';
import { useContext } from 'react';

const Header = () => {
    const {completedTodos, totalTodos} = useContext(TodoContext);
    return (
            <VStack spacing={2} textAlign="center">
                <Heading
                    bgGradient='linear(to-r, todo.100, todo.900)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    >
                    TODOs
                </Heading>
                <Text fontSize="lg" color={'gray.900'}>
                
                {
                    totalTodos > 0 ? `Tienes ${completedTodos} tareas completadas de ${totalTodos}`: `No tienes tareas`
                }

                </Text>
            </VStack>
        )

}

export default Header;