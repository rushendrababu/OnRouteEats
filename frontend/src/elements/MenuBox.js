import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/layout";


function MenuBox() {
  const {selectedHotelId, menu, setMenu, setCart, total, setTotal, price, setPrice} = ChatState();
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
          <Box w="100%" h="100%" overflowY="hidden">
            {/* <Stack overflowY="scroll"> */}
              {menu.map((item) => (
                <Box
                  onClick={()=>{
                    setCart((cart) => [...cart, item.itemName])
                    setTotal(price+item.price) 
                  }}
                  cursor="pointer"
                >
                  <Text>item.itemName</Text>
                </Box>
              ))}
            {/* </Stack> */}
          </Box>
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
