import React from "react";
import { Box, Input, Button, Flex, Text } from "@chakra-ui/react";

export const RightSidebar = () => {
  const trendingDatas = [
    {
      id: 1,
      genre: "Olahraga",
      status: "Populer",
      title: "Christiano Ronaldo",
      tweetCount: "20rb Tweet",
    },
    {
      id: 2,
      genre: "Hanya di Twitter",
      status: "Populer",
      title: "iShowSpeed",
      tweetCount: "5.489 Tweet",
    },
    {
      id: 3,
      genre: "Aktor",
      status: "Populer",
      title: "Hendri William",
      tweetCount: "69rb Tweet",
    },
    {
      id: 4,
      genre: "Hiburan",
      status: "Populer",
      title: "Spiderman: No Way Home",
      tweetCount: "12rb Tweet",
    },
    {
      id: 5,
      genre: "Film & TV",
      status: "Populer",
      title: "Transformers",
      tweetCount: "92rb Tweet",
    },
    {
      id: 6,
      genre: "Pendidikan",
      status: "Populer",
      title: "Alterra Academy",
      tweetCount: "20rb Tweet",
    },
  ];

  return (
    <Box className="w-1/3 h-screen border-l border-neutral-600">
      <Box className="w-1/2 h-max mx-6">
        <Input
          placeholder="Cari di Twitter"
          className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
        />
      </Box>
      <Box className="w-1/2 h-max mx-6 bg-[#14171A] my-5 rounded-xl text-white">
        <p className="text-xl p-4 font-bold">Tren untuk anda</p>
        <Flex className="flex-col">
          {trendingDatas.map((data) => {
            return (
              <Button
                key={data.id}
                className="px-4 py-2 w-full hover:hover:bg-neutral-800"
              >
                <Box className="w-full text-start">
                  <p className="text-sm text-gray-400">
                    {data.genre} · {data.status}
                  </p>
                  <p className="text-base font-bold">{data.title}</p>
                  <p className="text-sm text-gray-400">{data.tweetCount}</p>
                </Box>
              </Button>
            );
          })}
        </Flex>
        <Box className="w-full p-4">
          <Text className="text-md text-twitterblue">
            Tampilkan lebih banyak
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
