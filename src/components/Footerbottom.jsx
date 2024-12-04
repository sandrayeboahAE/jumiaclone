import { Divider, Flex, Grid, Text } from "@mantine/core";
import Link from "next/link";
import { list } from "postcss";
import React from "react";
import { PiHandCoinsThin } from "react-icons/pi";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiMastercardFill,
  RiTwitterFill,
  RiVisaLine,
} from "react-icons/ri";

const FooterBottom = () => {
  const needs = [
    { title: "Chat with us", link: "/mail" },
    { title: "Help Center", link: "/help" },
    { title: "Contact us", link: "/contact" },
  ];

  const usefuls = [
    { title: "How to buy on jumia", link: "/help" },
    { title: "Delivery timelines and fees", link: "/help" },
    { title: "How to return a product on juima", link: "/contact" },
    { title: "Corperate and bulk purchase", link: "/help" },
    { title: "Report a product", link: "/help" },
    { title: "Dispute resolution policy", link: "/contact" },
    { title: "Returns and refunds terms and conditiond", link: "/help" },
  ];

  const aboutLists = [
    { title: "About Us", link: "/about" },
    { title: "Testimonials", link: "/about" },
    { title: "Jumia Career", link: "/about" },
    { title: "Terms and Conditions", link: "/about" },
    { title: "Terms and Conditions", link: "/about" },
    { title: "Terms and Conditions", link: "/about" },
    { title: "Terms and Conditions", link: "/about" },
  ];

  const sells = [
    { title: "sell on Jumia", link: "/market" },
    { title: "sell on Jumia", link: "/market" },
    { title: "sell on Jumia", link: "/market" },
    { title: "sell on Jumia", link: "/market" },
    { title: "sell on Jumia", link: "/market" },
    { title: "sell on Jumia", link: "/market" },
    { title: "sell on Jumia", link: "/market" },
  ];

  const countries = [
    { title: "Algeria", link: "/country" },
    { title: "Cote D'Ivoire", link: "/country" },
    { title: "Egypt", link: "/country" },
    { title: "Kenya", link: "/country" },
    { title: "Maroc", link: "/country" },
    { title: "Nigeria", link: "/country" },
    { title: "Senegal", link: "/country" },
    { title: "Tunisia", link: "/country" },
    { title: "Uganda", link: "/country" },
  ];

  const brands = [
    { title: "Apple", link: "/brand" },
    { title: "banana", link: "/brand" },
    { title: "Binatone", link: "/brand" },
    { title: "Bruhm", link: "/brand" },
    { title: "DELL", link: "/brand" },
    { title: "Delron", link: "/brand" },
    { title: "Fragrance World", link: "/brand" },
    { title: "Hikers", link: "/brand" },
    { title: "Hp", link: "/brand" },
    { title: "Huawei", link: "/brand" },
    { title: "Infinix", link: "/brand" },
    { title: "Ignco", link: "/brand" },
    { title: "Itel", link: "/brand" },
    { title: "JBL", link: "/brand" },
    { title: "Lenovo", link: "/brand" },
    { title: "LG", link: "/brand" },
    { title: "Lindy", link: "/brand" },
    { title: "Mitsui", link: "/brand" },
    { title: "MTN", link: "/brand" },
    { title: "Nasco", link: "/brand" },
    { title: "NIVEA", link: "/brand" },
    { title: "Nokia", link: "/brand" },
    { title: "Oraimo", link: "/brand" },
    { title: "Roch", link: "/brand" },
    { title: "Samsung", link: "/brand" },
    { title: "Silver Crest", link: "/brand" },
    { title: "Sony", link: "/brand" },
    { title: "TECNO", link: "/brand" },
    { title: "Toshiba", link: "/brand" },
    { title: "Vizio", link: "/brand" },
    { title: "Westpoint", link: "/brand" },
    { title: "Westpool", link: "/brand" },
    { title: "White Label", link: "/brand" },
  ];

  return (
    <div>
      <Flex
        className="bg-yellow-700 text-white p-24"
        direction={"column"}
        align="center"
        justify="center"
        gap="sm"
      >
        <Flex direction="row" gap="sm">
          <div className="w-16 h-16 border-0 rounded-full flex items-center justify-center bg-white text-yellow-700 hover:bg-black">
            <a href="https://www.facebook.com/jumiaghana/">
              <RiFacebookFill size={35} />
            </a>
          </div>
          <div className="w-16 h-16 border-0 rounded-full flex items-center justify-center bg-white text-yellow-700 hover:bg-black">
            <a href="https://twitter.com/JumiaGhana/">
              <RiInstagramLine size={35} />
            </a>
          </div>
          <div className="w-16 h-16 border-0 rounded-full flex items-center justify-center bg-white text-yellow-700 hover:bg-black">
            <a href="https://www.instagram.com/jumiaghana/">
              <RiTwitterFill size={35} />
            </a>
          </div>
        </Flex>
        <Flex direction="column" gap="md" className="">
          <div className="my-2">
            <Text>Copyright 2022 Haarino - All rights reserved by Vecuro.</Text>
          </div>
        </Flex>
        <Flex direction="row" gap={"md"}>
          <div>
            <Link href={"/map"}>SITE MAPS</Link>
          </div>
          <Divider orientation="vertical" />
          <div>
            <Link href={"/map"}>SECURITY AND PRIVACY</Link>
          </div>
          <Divider orientation="vertical" />
          <div>
            <Link href={"/map"}>TERMS AND CONDITIONS</Link>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default FooterBottom;
