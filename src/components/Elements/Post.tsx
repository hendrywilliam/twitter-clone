import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import default_profile from "../../../public/default_profile.png";
import horseImage from "../../../public/horse.png";
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { RiBarChartGroupedFill } from "react-icons/ri";

type PostProps = {
  children: React.ReactNode;
};

export const Post = () => {
  return (
    <Box className="h-max border-y border-neutral-600 flex flex-row text-white py-4 px-2">
      <Box className=" w-[60px] h-full flex flex-col">
        <Box className="flex justify-end">
          <Image
            src={default_profile}
            alt="Default Profile"
            width={50}
            className="rounded-full just"
          />
        </Box>
      </Box>
      <Box className="px-5 w-full h-full">
        <Flex className="flex-row gap-1 ">
          <Text className="font-bold">Hendri William</Text>
          <Text className="text-neutral-500">@hendrywilliam</Text>
          <Text className="text-neutral-500">· 1j</Text>
        </Flex>
        <Text>What kind of animal is this? Yes this is a horse.</Text>
        <Box className="mt-2">
          <Image
            src={horseImage}
            className="w-full rounded-3xl border-2 border-neutral-600"
            alt="horse"
          />
        </Box>
        <Box className="w-2/3 mt-4 flex flex-row justify-between">
          <Button className="flex gap-2">
            <FaRegCommentAlt size={15} className="text-neutral-500" />
            <Text className="text-sm text-neutral-500">69</Text>
          </Button>
          <Button className="flex gap-2">
            <AiOutlineRetweet size={20} className="text-neutral-500" />
            <Text className="text-sm text-neutral-500">22</Text>
          </Button>
          <Button className="flex gap-2">
            <FaRegHeart size={17} className="text-neutral-500" />
            <Text className="text-sm text-neutral-500">1</Text>
          </Button>
          <Button className="flex gap-2">
            <RiBarChartGroupedFill size={17} className="text-neutral-500" />
            <Text className="text-sm text-neutral-500">6.488</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
