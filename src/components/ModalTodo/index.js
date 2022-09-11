import React, { useContext } from "react";
import {
	Flex,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { TodoContext } from "../Context";
import { AddIcon } from "@chakra-ui/icons";

const ModalTodo = () => {
	const { isOpen, onOpen, onClose, initialRef, finalRef, crearTodo } =
		useContext(TodoContext);
	const addTodo = (text) => {
		crearTodo(text);
		onClose();
	};

	return (
		<>
			<Flex justifyContent={"flex-end"}>
				<Button
					size="xs"
					rightIcon={<AddIcon />}
					colorScheme={"todo"}
					onClick={onOpen}
				>
					Todo
				</Button>
			</Flex>
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Crear nuevo Todo</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Nombre del Todo</FormLabel>
							<Input
								ref={initialRef}
								placeholder="Nombre del Todo"
                onKeyDown={event => { if (event.key === 'Enter' && initialRef.current.value) { addTodo(initialRef.current.value)} } }
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter gap={5}>
						<Button
							onClick={() => initialRef.current.value && addTodo(initialRef.current.value)}
							colorScheme={"todo"}
						>
							Crear
						</Button>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalTodo;