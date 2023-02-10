import { useRef, useState } from "react";
import Head from "next/head";
import { MainLayout } from "@/components";
import Image from "next/image";
import LoginBackground from "../../../public/login_background.png";
import { Flex, Box, Input, Text, Link, Button } from "@chakra-ui/react";
import { supabase } from "@/lib";
import { AuthError } from "@supabase/supabase-js";

export default function Register() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const fullName = useRef<HTMLInputElement>(null);

  const [errorStatus, setErrorStatus] = useState<AuthError | null>();
  const [successStatus, setSuccessStatus] = useState<boolean>(false);

  const registerUser = async (
    email: string,
    password: string,
    username: string,
    fullName: string
  ) => {
    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
            username: username,
          },
        },
      });

      if (data) {
        setSuccessStatus(true);
      }

      if (error) {
        setSuccessStatus(false);
        setErrorStatus(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Register / Twitter</title>
        <meta name="description" content="Twitter Clone by @hendrywilliam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Image
          src={LoginBackground}
          alt={"background"}
          className="w-2/3 h-screen object-cover z-0"
        />
        <Flex className="w-1/3 p-10 h-screen text-white justify-center items-center z-0">
          <Box className="h-max">
            <Text className="mb-10 font-bold text-3xl w-96">
              See what&apos;s happening in the world right now.
            </Text>
            <Flex className="flex-row w-full gap-3">
              <Text className="font-bold text-xl">Register to Twitter</Text>
            </Flex>
            <Input
              placeholder="example@gmail.com"
              ref={email}
              className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
            />
            <Input
              placeholder="b3stP4ssW0rd!"
              type="password"
              ref={password}
              className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
            />
            <Input
              placeholder="Full Name"
              type="text"
              ref={fullName}
              className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
            />
            <Input
              placeholder="@bestusername"
              type="text"
              ref={username}
              className="w-full h-10 py-2 px-6 bg-[#14171A] mt-2 rounded-full focus:outline focus:outline-twitterblue"
            />
            <Flex
              className={`w-full ${
                errorStatus || successStatus ? "justify-between" : "justify-end"
              }  mt-2`}
            >
              {errorStatus ? (
                <Text className="text-red-500">{errorStatus.message}</Text>
              ) : (
                <></>
              )}
              {successStatus ? (
                <Text className="text-green-400">Account created.</Text>
              ) : (
                <></>
              )}
              <Link href="/" className="text-twitterblue font-bold">
                Sign in
              </Link>
            </Flex>
            <Button
              className="rounded-full bg-twitterblue w-full h-12 font-bold text-white mt-5"
              onClick={() => {
                if (
                  email.current?.value &&
                  password.current?.value &&
                  username.current?.value &&
                  fullName.current?.value
                ) {
                  registerUser(
                    email.current?.value,
                    password.current?.value,
                    username.current?.value,
                    fullName.current?.value
                  );
                }
                setErrorStatus(null);
                setSuccessStatus(false);
              }}
            >
              Register
            </Button>
          </Box>
        </Flex>
      </MainLayout>
    </>
  );
}
