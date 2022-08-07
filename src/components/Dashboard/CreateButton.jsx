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

<<<<<<< HEAD
// import { FaRegEdit } from "react-icons/fa";
=======
import { FaRegEdit } from "react-icons/fa";
>>>>>>> 20e0a5adb8e4dac187fdee83931bcaada42fd297

export default function CreateButton({ props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openBox, setOpenBox } = props;

  return (
    <>
      <Box textAlign="center">
        {/* <Button leftIcon={<FaRegEdit fill='black' />} colorScheme="whiteAlpha" margin="0 20px" width="12rem"  color="black" fontSize={"sm"} textAlign="center" variant={"outline"} onClick={onOpen}>Create 2</Button> */}
      </Box>

<<<<<<< HEAD
      <Modal isOpen={openBox || isOpen} onClose={onClose}>
=======
      <Modal isCentered isOpen={openBox || isOpen} onClose={onClose}>
>>>>>>> 20e0a5adb8e4dac187fdee83931bcaada42fd297
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
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> 20e0a5adb8e4dac187fdee83931bcaada42fd297
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
