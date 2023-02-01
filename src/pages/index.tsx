import Head from "next/head";
import {
  MainLayout,
  LeftSidebar,
  RightSidebar,
  MainContainer,
  Post,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda / Twitter</title>
        <meta name="description" content="Twitter Clone by @hendrywilliam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
}
