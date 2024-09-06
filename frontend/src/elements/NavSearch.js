import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";

function NavSearch() {
  const [busNo, setBusNo] = useState("");
  const { setHotels, user } = ChatState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchHotels = async () => {
    //console.log(busNo);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      // console.log(user.token);
      // console.log(busNo);
      const response = await axios.get(
        `http://localhost:5000/api/bus/hotels?`,
        {busNo},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
        }
      );
      const data = response.data;
      setHotels(data);
    } catch (error) {
      console.log("error", error);
      toast({
        title: "Error Occured!",
        description: "Failed to Load the restaurants",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
        mt="20px" // Adding upper margin
      >
        <Input
          width={250}
          placeholder="Enter bus id"
          mr={2}
          value={busNo}
          onChange={(e) => setBusNo(e.target.value)}
        />
        <Button onClick={fetchHotels}>Go</Button>
      </Box>
    </>
  );
}

export default NavSearch;
