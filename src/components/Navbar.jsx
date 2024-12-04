import {
  Burger,
  Divider,
  Drawer,
  Flex,
  Input,
  Menu,
  Text,
} from "@mantine/core";
import Image from "next/image";
import {
  LuApple,
  LuSmartphone,
  LuCircleEllipsis,
  LuBaby,
  LuGamepad2,
  LuMonitorSpeaker,
  LuTrophy,
  LuSearch,
  LuHelpCircle,
  LuShoppingBag,
  LuHeart,
} from "react-icons/lu";
import {
  RiHomeOfficeFill,
  RiRadioFill,
  RiTShirt2Line,
  RiComputerLine,
  RiArrowDownSLine,
  RiAccountCircleLine,
  RiShoppingCart2Line,
  RiMessage2Line,
} from "react-icons/ri";
import { GiLipstick } from "react-icons/gi";
import Link from "next/link";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="">
      <Flex direction="row" align="center" justify="space-between" gap="sm">
        <div className="mx-5 my-1">
          <Flex direction="row" align="center" gap="sm">
            <Drawer opened={opened} onClose={close} title="Sales">
              <Flex align="center" gap="sm">
                <LuApple />
                <Text>Sales</Text>
              </Flex>
              <Flex align="center" gap="sm">
                <LuSmartphone />
                <Text>Services</Text>
              </Flex>
            </Drawer>
            <button onClick={open}>
              <Burger size="sm" />
            </button>

            <Link href="/">
              <Image
                src="/Jumia-Logo-500x281.png"
                alt="page logo"
                width="150"
                height="150"
              />
            </Link>
          </Flex>
        </div>
        <Flex align="center" className="">
          <Link
            href={"/about"}
            className="hover:bg-slate-100 border-0 rounded-md p-3 font-bold"
          >
            <Flex align="center">
              <Text fz="lg">About</Text>
              {/* <RiArrowDownSLine size={15} /> */}
            </Flex>
          </Link>
          <Menu width="200" trigger="hover" openDelay={100} closeDelay={300}>
            <Menu.Target>
              <button className="hover:bg-slate-100 border-0 rounded-md p-3 font-bold">
                <Flex align="center">
                  {/* <RiAccountCircleLine size={25} /> */}
                  <Text fz="lg">Account</Text>
                  <RiArrowDownSLine size={15} />
                </Flex>
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <button className="text-white bg-orange-500 border border-orange-500 rounded-md p-2 shadow-md font-bold">
                  SIGN IN
                </button>
              </Menu.Item>
              <Divider />
              <Menu.Item>
                <Flex align="center" gap="sm">
                  <RiAccountCircleLine />
                  <Text>My Account</Text>
                </Flex>
              </Menu.Item>
              <Menu.Item>
                <Flex align="center" gap="sm">
                  <LuShoppingBag />
                  <Text>Orders</Text>
                </Flex>
              </Menu.Item>
              <Menu.Item>
                <Flex align="center" gap="sm">
                  <LuHeart />
                  <Text>Saved Items</Text>
                </Flex>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu width={200} trigger="hover" openDelay={100} closeDelay={300}>
            <Menu.Target>
              <button className="hover:bg-slate-100 border-0 rounded-md p-3 font-bold">
                <Flex align="center">
                  {/* <LuHelpCircle size={25} /> */}
                  <Text fz="lg">Help</Text>
                  <RiArrowDownSLine size={15} />
                </Flex>
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Text>Help Center</Text>
              </Menu.Item>

              <Menu.Item>
                <button className="border-0 p-2  font-bold">
                  <Flex align="center" gap="sm">
                    {/* <RiMessage2Line /> */}
                    <Text>LIVE CHAT</Text>
                  </Flex>
                </button>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Link
            href="/cart"
            className="hover:bg-slate-100 border-0 rounded-md p-3"
          >
            <Flex align="center">
              {/* <RiShoppingCart2Line size={25} /> */}
              <Text fz="lg">Shop</Text>
            </Flex>
          </Link>
          <Link
            href="/cart"
            className="hover:bg-slate-100 border-0 rounded-md p-3"
          >
            <Flex align="center">
              {/* <RiShoppingCart2Line size={25} /> */}
              <Text fz="lg">Services</Text>
            </Flex>
          </Link>
        </Flex>
        <div className="mx-9">
          <button
            key={"book-now"}
            className="text-white font-bold bg-orange-500 border border-orange-500 rounded-md p-2 shadow-lg"
          >
            BOOK NOW
          </button>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
