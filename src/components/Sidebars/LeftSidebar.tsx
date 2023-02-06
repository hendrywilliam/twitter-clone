import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { BsTwitter, BsEnvelope, BsCardList, BsBookmark } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import Image from "next/image";
import default_profile from "../../../public/default_profile.png";

export const LeftSidebar = () => {
  return (
    <Box className="sticky top-0 flex w-1/3 min-h-screen h-screen border-r border-neutral-600 justify-end">
      <Box className="w-1/2 flex flex-col">
        <Box className="w-full h-3/4 px-6 flex flex-col gap-3">
          <Button className="mb-2 p-2 text-xl w-max hover:rounded-full hover:bg-neutral-800 mx-2">
            <BsTwitter className="text-gray-200" size={30} />
          </Button>
          <Button className="text-white font-extrabold mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <RiHome7Fill className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">Home</span>
          </Button>
          <Button className="text-white mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <FaHashtag className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">Explore</span>
          </Button>
          <Button className="text-white mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <FiBell className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">Notifications</span>
          </Button>
          <Button className="text-white mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <BsEnvelope className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">Messages</span>
          </Button>
          <Button className="text-white mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <BsBookmark className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">Bookmarks</span>
          </Button>
          <Button className="text-white mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <BsCardList className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">Lists</span>
          </Button>
          <Button className="text-white mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <AiOutlineUser className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">Profile</span>
          </Button>
          <Button className="text-white mx-2 p-2 text-xl w-max h-max hover:rounded-full hover:bg-neutral-800">
            <TbDotsCircleHorizontal className="text-gray-200 mr-5" size={30} />
            <span className="mr-5">More</span>
          </Button>
          <Flex className="w-full mt-4 h-14 flex-coltext-center justify-center">
            <Button className="rounded-full bg-twitterblue w-full font-bold text-white">
              Tweet
            </Button>
          </Flex>
        </Box>
        <Flex className="h-1/4 w-full flex-col">
          <Flex className="text-white mt-auto px-6 mb-2 gap-3 w-max">
            <Button className="flex gap-2 p-2 rounded-full hover:bg-neutral-800">
              <Image
                src={default_profile}
                alt="Default Profile"
                width={50}
                className="rounded-full "
              />
              <Flex className="flex-col pr-2">
                <p className="font-bold">Hendri William</p>
                <p className="text-gray-400">@hendrywilliam</p>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
