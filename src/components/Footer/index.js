import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaTwitter } from 'react-icons/fa';

  
  const SocialButton = ({
	children,
	label,
	href,
  }) => {
	return (
	  <chakra.button
		bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
		rounded={'full'}
		w={8}
		h={8}
		cursor={'pointer'}
		as={'a'}
		href={href}
		display={'inline-flex'}
		alignItems={'center'}
		justifyContent={'center'}
		transition={'background 0.3s ease'}
		isExternal
		_hover={{
		  bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
		}}>
		<VisuallyHidden>{label}</VisuallyHidden>
		{children}
	  </chakra.button>
	);
  };
  
 const Footer = () => {
	return (
	  <Box
		bg={useColorModeValue('gray.50', 'gray.900')}
		color={useColorModeValue('gray.700', 'gray.200')}
		position="fixed"
		width={'100vw'}
		bottom={'0'}
		>
		<Container
		  as={Stack}
		  maxW={'6xl'}
		  py={4}
		  direction={{ base: 'column', md: 'row' }}
		  spacing={4}
		  justify={{ base: 'center', md: 'space-between' }}
		  align={{ base: 'center', md: 'center' }}>
		  <Text>© 2022 Xavier Araque. All rights reserved</Text>
		  <Stack direction={'row'} spacing={6}>
			<SocialButton label={'Twitter'} href={'https://twitter.com/xavieraraque'}>
			  <FaTwitter />
			</SocialButton>
		  </Stack>
		</Container>
	  </Box>
	);
  }

  export default Footer;