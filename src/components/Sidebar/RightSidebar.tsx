import React from "react";
import { Box } from "@chakra-ui/react";

type RightSidebar = {
  children: React.ReactNode;
};

export const RightSidebar = ({ children }: RightSidebar) => {
  return (
    <Box className="w-1/3 h-screen border-l border-neutral-600">{children}</Box>
  );
};
