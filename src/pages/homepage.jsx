import { Badge, Flex, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import React from "react";
import ContactStack from "@/components/ContactStack";
import Blogs from "@/components/Blogs";
import Review from "@/components/Review";

const HomePage = () => {
  return (
    <div className="mt-40">
      <Review />
      <Blogs />
      <ContactStack />
    </div>
  );
};

export default HomePage;
