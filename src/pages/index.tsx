import { useEffect, useRef } from "react";
import Head from "next/head";
import { MainLayout } from "@/components";
import Image from "next/image";
import LoginBackground from "../../public/login_background.png";
import { Flex, Box, Input, Text, Link, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/lib/redux/features/loginSlice";
import { useRouter } from "next/router";

export default function Home() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const log = useSelector((state) => state.login.userLog);
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    dispatch(loginUser({ email: email, password: password }));

    if (log.session !== null) {
      router.push("/home");
    }
  };

  return (
    <>
      <Head>
        <title>Welcome to Twitter</title>
        <meta name="description" content="Twitter Clone by @hendrywilliam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Image
          src={LoginBackground}
          alt={"background"}
          className="w-2/3 h-screen object-cover"
        />
        <Flex className="w-1/3 h-screen text-white justify-center items-center">
          <Box className="h-max">
            <Text className="mb-10 font-bold text-3xl w-96">
              See what&apos;s happening in the world right now
            </Text>
            <Text className="font-bold text-xl">Log in to Twitter</Text>
            <Input
              placeholder="Username"
              ref={email}
              className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
            />
            <Input
              placeholder="Password"
              ref={password}
              className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
            />
            <Flex className="w-full justify-end">
              <Link href="/register" className="text-twitterblue font-bold">
                Sign up
              </Link>
            </Flex>
            <Button
              className="rounded-full bg-twitterblue w-full h-12 font-bold text-white mt-5"
              onClick={() =>
                handleLogin(email?.current?.value, password?.current?.value)
              }
            >
              Login
            </Button>
          </Box>
        </Flex>
      </MainLayout>
    </>
  );
}
