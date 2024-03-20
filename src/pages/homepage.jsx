import { Badge, Flex, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import React from "react";

const HomePage = () => {
    return (
    <div>
        <Stack>
            <Flex>
                <div>
                  <Text>SOMETHING</Text>
                  <Text>BIG</Text>
                  <Text>IS COMING</Text>
                </div>
                <div>
                    <Badge color="blue" size="xl" radius="xs">4th - 20th NOV; 2023</Badge>;
                    <Text>ORAIMO <LuDot /> SAMSUNG <LuDot /> TECHNO </Text>
                </div>
                <div>
                    <Image src="/google-play-store.png" alt="google play store" width="200" height="200" />
                    <Image src="/App-Store-Symbol.png" alt="apple store" width="200" height="200" />
                </div>
            </Flex>
            <Flex></Flex>
            <Flex></Flex>
        </Stack>
    </div>
)
}
 
export default HomePage;