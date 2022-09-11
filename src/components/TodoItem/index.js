import React, { useContext } from 'react';
import { Flex, Stack, Switch, Text, IconButton } from '@chakra-ui/react'
import { TodoContext } from '../Context';
import { CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'


const TodoItem = ({todo}) =>{
    const { completeTodo, deleteTodo } = useContext(TodoContext);
    return (
            <Stack
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                direction='row'
                justifyContent={'space-between'}
            >
                <Flex alignItems={'baseline'} gap={'5px'} >
                    <Switch
                        colorScheme='todo'
                        size='sm'
                        onChange={() => completeTodo(todo.text)}
                        isChecked={todo.completed}
                    />
                    <Text>{todo.text}</Text>
                </Flex>
                <IconButton
                    isRound
                    colorScheme='todo'
                    size={'xs'}
                    aria-label='Delete Task'
                    icon={<CloseIcon />}
                    onClick={() => deleteTodo(todo.text)}
                />
            </Stack>
        )
}

export default TodoItem;