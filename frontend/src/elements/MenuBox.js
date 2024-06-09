import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";


function MenuBox() {
  const {selectedHotelId, menu, setMenu} = ChatState();
  const toast = useToast();

  const getMenu = async(selectedHotelId) => {
    try{
      const {data} = await axios("api/hotel/", selectedHotelId);

      setMenu(data);
    }
    catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line
  }, [selectedHotelId]);

  return (
    <>
      {menu ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            d="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            {menu.price}
          </Text>
          
        </>
      ) : (
        
        <Box d="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on the restaurant to get Menu
          </Text>
        </Box>
      )}
    </>
  );
}

export default MenuBox;
