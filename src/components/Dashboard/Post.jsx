import { EditIcon } from "@chakra-ui/icons";
import { Avatar, Badge, Box, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import { BsHeart, BsHeartFill, BsPin } from "react-icons/bs";
import {
  FiDelete,
  FiEdit,
  FiEdit2,
  FiHeart,
  FiTrash,
  FiTrash2,
  FiUpload,
} from "react-icons/fi";
import { IoIosPin } from "react-icons/io";

function Post({ property }) {
  return (
    <>
      <Box mb={"5"} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.content_url} alt={property.imageAlt} />

        <Box padding="20px 10px">
          <Box display="flex" alignItems="baseline">
            <Box
              color="blackAlpha.700"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase">
              {property.date} &bull; {property.time}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h3"
            fontSize={"xl"}
            lineHeight="tight"
            noOfLines={1}>
            {property.title}
          </Box>
          <Flex justify={"space-between"}>
            <Box
              display="flex"
              fontSize={"large"}
              margin="10px"
              mt="2"
              gap={"40px"}
              alignItems="center">
              {property.isLiked ? <BsHeartFill fill="red" /> : <BsHeart />}
              <FiUpload />
              <FiTrash />
              <FiEdit2 />
              <BsPin />
            </Box>
            {property.likes }
            {" "}likes
          </Flex>
          <Box>
            <hr />
            <Box display={"flex"} alignItems="center" padding={"15px"}>
              <Avatar size={"sm"} mr={"15px"} />
              <Input
                placeholder="Join the conversation..."
                _placeholder={{ opacity: 1, color: "gray.500" }}
                borderColor="blackAlpha.400"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Post;
