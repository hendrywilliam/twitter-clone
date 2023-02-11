import React, { useEffect } from "react";
import {
  MainLayout,
  LeftSidebar,
  RightSidebar,
  MainContainer,
  Post,
} from "@/components";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getSessionUser } from "@/lib/redux/features/getSession";

const Home = () => {
  const log = useSelector((state) => state.login.userLog);
  const session = useSelector((state) => state.session.userSession);
  const metadata = log?.user?.user_metadata;
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getSessionUser());
    })();
  }, []);

  return (
    <MainLayout>
      <LeftSidebar
        avatar={metadata?.avatar_url}
        fullname={metadata?.full_name}
        username={metadata?.username}
      />
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
