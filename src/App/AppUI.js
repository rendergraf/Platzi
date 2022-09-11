import React from 'react';
import { Flex, Container } from '@chakra-ui/react'
import { Header, TodoSearch, TodoList, ModalTodo } from '../components'
import Footer from '../components/Footer';

function AppUI() {
    return (
        <Flex py={12} flexDirection="column">
				<Header/>
				<Container maxW={'3xl'}>
					<TodoSearch />
					<TodoList />
				</Container>
			<Footer/>
        </Flex>
    )
}

export default AppUI;