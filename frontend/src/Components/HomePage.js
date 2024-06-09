import React from "react";
import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import ResBox from "../elements/ResBox";
import Cart from "../elements/Cart";
import MenuBox from "../elements/MenuBox";
import NavSearch from "../elements/NavSearch";

function HomePage() {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <NavSearch />}

      <Box
        d="flex"
        flexDirection="row"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <ResBox />}
        {user && <MenuBox />}
      </Box>
    </div>
  );
}

export default HomePage;
