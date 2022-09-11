import React, { useContext} from 'react';
import { Input, Box, Stack} from '@chakra-ui/react'
import { TodoContext } from '../Context';

const TodoSearch = () => {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    return(
        <Box
        rounded={'lg'}
        bg={'todo.1000'}
        backdropFilter={'blur(10px)'}
        boxShadow={'lg'}
        p={8}
        mt={10}>
            <Stack spacing={4}>
                <Input
                    size="md"
                    fontSize={{base: '18px', md: '30px'}}
                    variant='flushed'
                    focusBorderColor='todo.500'
                    color='todo.500'
                    placeholder='buscar tareas'
                    _placeholder={{ opacity: 0.4, color: 'inherit' }}
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
            </Stack>
        </Box>
    )
}

export default TodoSearch;