import { Burger, Divider, Flex, Input, Menu, Text } from "@mantine/core";
import Image from "next/image";
import { LuApple, LuSmartphone, LuCircleEllipsis, LuBaby, LuGamepad2, LuMonitorSpeaker, LuTrophy, LuSearch, LuHelpCircle, LuShoppingBag, LuHeart } from "react-icons/lu";
import { RiHomeOfficeFill, RiRadioFill, RiTShirt2Line, RiComputerLine, RiArrowDownSLine, RiAccountCircleLine, RiShoppingCart2Line, RiMessage2Line } from "react-icons/ri";
import { GiLipstick } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {


    return ( <div>
        <Flex direction="row" align="center" justify="center" gap="sm">
        <div className="">
            <Flex direction="row" align="center" gap="sm">
                <Menu trigger="hover" openDelay={100} closeDelay={400} shadow="md">
                    <Menu.Target>
                      <Burger size="sm"/>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item><Flex align="center" gap="sm"><LuApple /><Text>Supermarket</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><LuSmartphone /><Text>Phones & Tablets</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><GiLipstick /><Text>Health & Beauty</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><RiHomeOfficeFill /><Text>Home & Office</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><LuMonitorSpeaker /><Text>Appliances</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><RiRadioFill /><Text>Electronics</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><RiComputerLine /><Text>Computing</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><RiTShirt2Line /><Text>Fashion</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><LuTrophy /><Text>Sporting Goods</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><LuBaby /><Text>Baby Products</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><LuGamepad2 /><Text>Gaming</Text></Flex></Menu.Item>
                        <Menu.Item><Flex align="center" gap="sm"><LuCircleEllipsis /><Text>Other Categories</Text></Flex></Menu.Item>
                    </Menu.Dropdown>
                </Menu>
                <Link href="/"><Image src="/Jumia-Logo-500x281.png" alt="page logo" width="150" height="150" /></Link>
            </Flex>
        </div>
        <Flex gap="sm" className=""> 
            <Input size="md" placeholder="Search products, brands and category" className="border border-black rounded-md" leftSection={<LuSearch />} />
            <button className="text-white font-bold bg-orange-500 border border-orange-500 rounded-md p-2 shadow-lg">SEARCH</button>
        </Flex>
        <Flex align="center" className="">
            <Menu width="200">
                <Menu.Target>
                    <button className="hover:bg-slate-100 border-0 rounded-md p-3 font-bold">
                      <Flex align="center"><RiAccountCircleLine size={25}/><Text fz="lg">Account</Text><RiArrowDownSLine size={15}/></Flex>
                    </button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item><button className="text-white bg-orange-500 border border-orange-500 rounded-md p-2 shadow-md font-bold">SIGN IN</button></Menu.Item>
                    <Divider />
                    <Menu.Item><Flex align="center" gap="sm"><RiAccountCircleLine /><Text>My Account</Text></Flex></Menu.Item>
                    <Menu.Item><Flex align="center" gap="sm"><LuShoppingBag /><Text>Orders</Text></Flex></Menu.Item>
                    <Menu.Item><Flex align="center" gap="sm"><LuHeart /><Text>Saved Items</Text></Flex></Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <Menu width={200}>
                <Menu.Target>
                    <button className="hover:bg-slate-100 border-0 rounded-md p-3 font-bold">
                      <Flex align="center"><LuHelpCircle size={25}/><Text fz="lg">Help</Text><RiArrowDownSLine size={15}/></Flex>
                    </button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item><Text>Help Center</Text></Menu.Item>
                    <Menu.Item><Text>Place an Order</Text></Menu.Item>
                    <Menu.Item><Text>Pay for your Order</Text></Menu.Item>
                    <Menu.Item><Text>Track Your Order</Text></Menu.Item>
                    <Menu.Item><Text>Cancel an Order</Text></Menu.Item>
                    <Menu.Item><Text>Create a Return</Text></Menu.Item>
                    <Divider />
                    <Menu.Item>
                        <button className="text-white bg-orange-500 border border-orange-500 rounded-md p-2 shadow-md font-bold">
                            <Flex align="center" gap="sm">
                                <RiMessage2Line />
                                <Text>LIVE CHAT</Text>
                            </Flex>
                        </button>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <Link href="/cart" className="hover:bg-slate-100 border-0 rounded-md p-3">
               <Flex align="center"><RiShoppingCart2Line size={25}/><Text fz="lg">Cart</Text></Flex>
            </Link>
        </Flex>
        </Flex>
    </div> );
}
 
export default Navbar;