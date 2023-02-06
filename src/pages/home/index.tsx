import React from "react";
import {
  MainLayout,
  LeftSidebar,
  RightSidebar,
  MainContainer,
  Post,
} from "@/components";

type Props = {};

const Home = (props: Props) => {
  return (
    <MainLayout>
      <LeftSidebar />
      <MainContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </MainContainer>
      <RightSidebar />
    </MainLayout>
  );
};

export default Home;
