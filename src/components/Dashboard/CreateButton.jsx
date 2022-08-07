import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

// import { FaRegEdit } from "react-icons/fa";

export default function CreateButton({ props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openBox, setOpenBox } = props;

  return (
    <>
      <Box textAlign="center">
        {/* <Button leftIcon={<FaRegEdit fill='black' />} colorScheme="whiteAlpha" margin="0 20px" width="12rem"  color="black" fontSize={"sm"} textAlign="center" variant={"outline"} onClick={onOpen}>Create 2</Button> */}
      </Box>

      <Modal isOpen={openBox || isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setOpenBox(!openBox);
            }}
          />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setOpenBox(!openBox);
              }}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
