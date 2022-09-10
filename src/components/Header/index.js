import React from 'react';
import { VStack, Heading, Text} from '@chakra-ui/react'

const Header = ({completedTodos, totalTodos}) => {
    return(
        <VStack spacing={2} textAlign="center">
            <Heading
                bgGradient='linear(to-r, teal.500, green.500)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                >
                TODOs
            </Heading>
            <Text fontSize="lg" color={'gray.500'}>
            
            {
                totalTodos > 0 ? `Tienes ${completedTodos} tareas completadas de ${totalTodos}`: `No tienes tareas`
            }

            </Text>
        </VStack>
    )
}

export default Header;