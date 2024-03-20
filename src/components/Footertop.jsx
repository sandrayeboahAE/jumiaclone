import { Checkbox, Flex, Input, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiMailFill } from "react-icons/ri";

const FooterTop = () => {
    return ( 
        <div>
            <Flex className="bg-zinc-700 px-96 py-4" align="flex-start" justify="space-between" gap="md">
                <div>
                    <Link href="/">
                      <Image src="/JMIA_black.png" alt="page logo" width="130" height="130" />
                    </Link>
                </div>
                <div>
                    <Text fw="bold" c="white">NEW TO JUMIA? </Text>
                    <Text c="white">Subscribe to our newsletter to get updates on our latest offers!</Text>
                    <Flex gap="sm" className="my-2">
                        <Input placeholder="Enter E-mail Address" leftSection={<RiMailFill />} className="flex-grow w-40"/>
                        <div className="flex gap-2">
                           <button className="border border-gray-50 rounded-sm text-white p-1 w-28">MALE</button>
                           <button className="border border-gray-50 rounded-sm text-white p-1 w-28">FEMALE</button>
                        </div>
                    </Flex>
                    <div className="text-gray-400 my-10">
                       <Checkbox variant="outline" label="I agree to Jumia's Privacy and Cookie Policy. You can unsubscribe from newsletters at any time."/>
                       <Link href="/terms" className="text-orange-400 my-4">I accept the legal terms</Link>
                    </div>
                </div>
                <div>
                    <Flex>
                        <div className="bg-orange-400 p-1 border-0 rounded-sm m-2">
                           <Image src="/JMIA-356fb835.png" alt="logo" width="30" height="30" />
                        </div>
                        <div>
                           <Text c="white" fw="bold">DOWNLOAD JUMIA FREE APP</Text>
                           <Text c="white">Get access to exclusive offers!</Text>
                        </div>
                    </Flex>
                    <Flex gap="sm" className="m-2">
                        <a href="https://play.google.com/store/apps/details?id=com.jumia.android&hl=en" className="">
                          <Image src="/apple-bw2.png" alt="" width="110" height="10" />
                        </a>
                        <a href="https://itunes.apple.com/us/app/jumia-online-shopping/id925015459?mt=8" className="">
                          <Image src="/google-play-bw.png" alt="" width="110" height="250" />
                        </a>
                    </Flex>
                </div>
            </Flex>
        </div>
     );
}
 
export default FooterTop;