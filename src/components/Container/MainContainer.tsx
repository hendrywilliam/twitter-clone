import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";

type MainContainer = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainer) => {
  return (
    <Box className="relative w-1/3 h-full">
      <Box className="sticky top-0 w-full h-max border-b border-neutral-600 text-white bg-black z-10">
        <Text className="p-4 font-bold text-xl">Home</Text>
        <Flex className="w-full flex">
          <Button className="basis-1/2 p-4 w-full hover:bg-neutral-800 text-gray-500">
            For you
          </Button>
          <Button className="basis-1/2 p-4 w-full hover:bg-neutral-800 text-gray-500">
            Following
          </Button>
        </Flex>
      </Box>
      {children}
    </Box>
  );
};
