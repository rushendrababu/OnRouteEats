import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

function ResBox() {
  const { hotels, setSelectedHotelId } = ChatState();

  

  return (
    <Box
      d={{ base: "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        Restaurants
      </Box>
      <Box
        d="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        <Stack overflowY="scroll">
          {hotels.map((hotel) => (
            <Box
              onClick={() => setSelectedHotelId(hotel._id)}
              cursor="pointer"
              // bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
              // color={selectedChat === chat ? "white" : "black"}
              px={3}
              py={2}
              borderRadius="lg"
              // key={chat._id}
            >
              <Text>{hotel.hotelName}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default ResBox;
