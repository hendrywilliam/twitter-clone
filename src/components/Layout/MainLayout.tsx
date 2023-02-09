import React from "react";
import { Box, Flex } from "@chakra-ui/react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="main min-w-screen min-h-screen h-max bg-black">
      <Box className="min-w-screen min-h-screen h-full w-full">
        <Flex className="w-full flex-row relative z-10">{children}</Flex>
      </Box>
    </main>
  );
};
