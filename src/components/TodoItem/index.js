import React, { useState } from 'react';
import { Checkbox, Box, Flex, Button, Stack, Switch, Text, IconButton, keyframes } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'


const TodoItem = ({ todo, completeTodo, deleteTodo }) =>{

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
                    colorScheme='green'
                    size='sm'
                    onChange={() => completeTodo(todo.text)}
                    isChecked={todo.completed}
                />
                <Text>{todo.text}</Text>
            </Flex>
            <IconButton
                isRound
                colorScheme='gray'
                size={'xs'}
                aria-label='Delete Task'
                icon={<CloseIcon />}
                onClick={() => deleteTodo(todo.text)}
            />
        </Stack>
    )
}

export default TodoItem;