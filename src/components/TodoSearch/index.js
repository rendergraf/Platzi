import React from 'react';
import { Input, Box, Stack} from '@chakra-ui/react'

const TodoSearch = ({onSearchValue, searchValue}) => {
    return(
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={8}
          mt={10}>
            <Stack spacing={4}>
                <Input
                    size="md"
                    fontSize={{base: '18px', md: '30px'}}
                    variant='flushed'
                    focusBorderColor='green.400'
                    color='green.400'
                    placeholder='buscar tareas'
                    _placeholder={{ opacity: 0.4, color: 'inherit' }}
                    value={searchValue}
                    onChange={onSearchValue}
                />
            </Stack>
        </Box>
    )
}

export default TodoSearch;