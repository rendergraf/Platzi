import React from 'react';
import { VStack, Heading, Text} from '@chakra-ui/react'

const Header = ({completeTodos, totalTodos}) => {
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
            Tienes {totalTodos} tareas completadas de {completeTodos}
            </Text>
        </VStack>
    )
}

export default Header;