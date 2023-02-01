import React from "react";
import { Box, Input, Button, Flex, Text, Link } from "@chakra-ui/react";

export const RightSidebar = () => {
  const trendingDatas = [
    {
      id: 1,
      topic: "Sports",
      status: "Trending",
      title: "Cristiano Ronaldo",
      tweetCount: "20K Tweets",
    },
    {
      id: 2,
      topic: "Only in Twitter",
      status: "Trending",
      title: "iShowSpeed",
      tweetCount: "5.489 Tweets",
    },
    {
      id: 3,
      topic: "Actor",
      status: "Trending",
      title: "Hendri William",
      tweetCount: "69K Tweets",
    },
    {
      id: 4,
      topic: "Movies & TV",
      status: "Trending",
      title: "Spiderman: No Way Home",
      tweetCount: "12K Tweet",
    },
    {
      id: 5,
      topic: "Movies & TV",
      status: "Trending",
      title: "Transformers",
      tweetCount: "92K Tweet",
    },
    {
      id: 6,
      topic: "Education",
      status: "Trending",
      title: "Alterra Academy",
      tweetCount: "20K Tweet",
    },
  ];

  return (
    <Box className="sticky w-1/3 h-screen top-0 border-l border-neutral-600">
      <Box className="w-1/2 h-max mx-6">
        <Input
          placeholder="Cari di Twitter"
          className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
        />
      </Box>
      <Box className="w-1/2 h-max mx-6 bg-[#14171A] my-5 rounded-xl text-white">
        <Text className="text-xl p-4 font-bold">Trends for you</Text>
        <Flex className="flex-col">
          {trendingDatas.map((data) => {
            return (
              <Button
                key={data.id}
                className="px-4 py-2 w-full hover:bg-neutral-800"
              >
                <Box className="w-full text-start">
                  <Text className="text-sm text-gray-400">
                    {data.topic} · {data.status}
                  </Text>
                  <Text className="text-base font-bold">{data.title}</Text>
                  <Text className="text-sm text-gray-400">
                    {data.tweetCount}
                  </Text>
                </Box>
              </Button>
            );
          })}
        </Flex>
        <Box className="w-full p-4">
          <Text className="text-md text-twitterblue">Show more</Text>
        </Box>
      </Box>
      <Flex className="w-1/2 flex-col h-max mx-6 px-4 pt-2 border-t border-neutral-800 my-5 text-white">
        <Flex className="gap-2 mt-2">
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Privacy Policy
          </Link>
        </Flex>
        <Flex className="gap-2">
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Cookie Policy
          </Link>
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Accessibility
          </Link>
        </Flex>
        <Flex className="gap-2">
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            Ads Info
          </Link>
          <Link className="text-sm text-gray-500 hover:underline" href="#">
            More
          </Link>
          <Link className="text-sm text-gray-500">© 2023 hi mom❤️</Link>
        </Flex>
      </Flex>
    </Box>
  );
};
