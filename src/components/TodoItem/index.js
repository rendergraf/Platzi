import React from 'react';
import { Checkbox, Box, Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const TodoItem = ({todo}) =>{
    return (
        <Box flexDirection={'row'} justifyContent={'space-between'} alignContent={'center'}>
            <Checkbox colorScheme='green' color={'green.400'} >
                {todo.text}
            </Checkbox>
            <Button size={'xs'} leftIcon={<CloseIcon />} colorScheme='pink' variant='solid' />
        </Box>
    )
}

export default TodoItem;