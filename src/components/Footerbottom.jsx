import { Divider, Flex, Grid, Text } from "@mantine/core";
import Link from "next/link";
import { list } from "postcss";
import React from "react";
import { PiHandCoinsThin } from "react-icons/pi";
import { RiFacebookFill, RiInstagramLine, RiMastercardFill, RiTwitterFill, RiVisaLine } from "react-icons/ri";

const FooterBottom = () => {

    const needs = [
        {title: "Chat with us", link: "/mail"},
        {title: "Help Center", link: "/help"},
        {title: "Contact us", link: "/contact"}
    ]

    const usefuls = [
        {title: "How to buy on jumia", link: "/help"},
        {title: "Delivery timelines and fees", link: "/help"},
        {title: "How to return a product on juima", link: "/contact"},
        {title: "Corperate and bulk purchase", link: "/help"},
        {title: "Report a product", link: "/help"},
        {title: "Dispute resolution policy", link: "/contact"},
        {title: "Returns and refunds terms and conditiond", link: "/help"},
    ]

    const aboutLists = [
        {title: "About Us", link: "/about"},
        {title: "Testimonials", link: "/about"},
        {title: "Jumia Career", link: "/about"},
        {title: "Terms and Conditions", link: "/about"},
        {title: "Terms and Conditions", link: "/about"},
        {title: "Terms and Conditions", link: "/about"},
        {title: "Terms and Conditions", link: "/about"},
    ]

    const sells = [
        {title: "sell on Jumia", link: "/market"},
        {title: "sell on Jumia", link: "/market"},
        {title: "sell on Jumia", link: "/market"},
        {title: "sell on Jumia", link: "/market"},
        {title: "sell on Jumia", link: "/market"},
        {title: "sell on Jumia", link: "/market"},
        {title: "sell on Jumia", link: "/market"},
    ]

    const countries = [
        {title: "Algeria", link: "/country"},
        {title: "Cote D'Ivoire", link: "/country"},
        {title: "Egypt", link: "/country"},
        {title: "Kenya", link: "/country"},
        {title: "Maroc", link: "/country"},
        {title: "Nigeria", link: "/country"},
        {title: "Senegal", link: "/country"},
        {title: "Tunisia", link: "/country"},
        {title: "Uganda", link: "/country"},
    ]
    
    const brands = [
        {title: "Apple", link: "/brand"},
        {title: "banana", link: "/brand"},
        {title: "Binatone", link: "/brand"},
        {title: "Bruhm", link: "/brand"},
        {title: "DELL", link: "/brand"},
        {title: "Delron", link: "/brand"},
        {title: "Fragrance World", link: "/brand"},
        {title: "Hikers", link: "/brand"},
        {title: "Hp", link: "/brand"},
        {title: "Huawei", link: "/brand"},
        {title: "Infinix", link: "/brand"},
        {title: "Ignco", link: "/brand"},
        {title: "Itel", link: "/brand"},
        {title: "JBL", link: "/brand"},
        {title: "Lenovo", link: "/brand"},
        {title: "LG", link: "/brand"},
        {title: "Lindy", link: "/brand"},
        {title: "Mitsui", link: "/brand"},
        {title: "MTN", link: "/brand"},
        {title: "Nasco", link: "/brand"},
        {title: "NIVEA", link: "/brand"},
        {title: "Nokia", link: "/brand"},
        {title: "Oraimo", link: "/brand"},
        {title: "Roch", link: "/brand"},
        {title: "Samsung", link: "/brand"},
        {title: "Silver Crest", link: "/brand"},
        {title: "Sony", link: "/brand"},
        {title: "TECNO", link: "/brand"},
        {title: "Toshiba", link: "/brand"},
        {title: "Vizio", link: "/brand"},
        {title: "Westpoint", link: "/brand"},
        {title: "Westpool", link: "/brand"},
        {title: "White Label", link: "/brand"},
    ]

    return ( 
        <div>
            <Flex className="bg-zinc-500 text-white" align="flex-start" justify="center" gap="md">
                <Flex direction="column" gap="md" className="m-4">
                    <Flex direction="column">
                        <div className="my-2">
                          <Text fw="bold">NEED HELP?</Text>
                        </div>
                        <div>
                            {needs.map((need) => (
                                <div key={list}><Link href={need.link}>{need.title}</Link></div>
                            ))}
                        </div>
                    </Flex>
                    <Flex direction="column">
                        <div className="my-2">
                          <Text fw="bold">USEFUL LINKS</Text>
                        </div>
                        <div>
                            {usefuls.map((useful) => (
                                <div key={list}><Link href={useful.link}>{useful.title}</Link></div>
                            ))}
                        </div>
                    </Flex>
                </Flex>
                <Flex direction="column" className="m-4">
                    <div className="my-2">
                      <Text href="/about" fw="bold">ABOUT JUMIA GHANA</Text>
                    </div>
                    <div>
                        {aboutLists.map((aboutList) => (
                            <div key={list}><Link href={aboutList.link}>{aboutList.title}</Link></div>
                        ))}
                    </div>
                </Flex>
                <Flex direction="column" className="m-4">
                    <div className="my-2">
                       <Text fw="bold">MAKE MONEY WITH JUMIA</Text>
                    </div>
                    <div>
                        {sells.map((sell) => (
                            <div key={list}><Link href={sell.link}>{sell.title}</Link></div>
                        ))}
                    </div>
                </Flex>
                <Flex direction="column" className="m-4">
                    <div className="my-2">
                      <Text fw="bold">JUMIA INTERNATIONAL</Text>
                    </div>
                    <div>
                        {countries.map((country) => (
                            <div key={list}><Link href={country.link}>{country.title}</Link></div>
                        ))}
                    </div>
                </Flex>
            </Flex>
            <Flex className="px-96 py-5 bg-zinc-500 text-white" align="flex-start" justify="start" gap="lg">
                <Flex direction="column" className="px-16">
                    <div className="my-3">
                      <Text fw="bold">JOIN US ON</Text>
                    </div>
                    <Flex direction="row" gap="sm">
                        <div>
                           <a href="https://www.facebook.com/jumiaghana/"><RiFacebookFill size={35}/></a>
                        </div>
                        <div>
                           <a href="https://twitter.com/JumiaGhana/"><RiInstagramLine size={35}/></a>
                        </div>
                        <div>
                           <a href="https://www.instagram.com/jumiaghana/"><RiTwitterFill size={35}/></a>
                        </div>
                    </Flex>
                </Flex>
                <Flex direction="column">
                    <div className="my-3">
                      <Text fw="bold">PAYMENT METHODS</Text>
                    </div>
                    <Flex direction="row" gap="sm">
                        <div>
                            <a href="https://www.jumia.com.gh/sp-cash-on-delivery/"><PiHandCoinsThin size={35}/></a>
                        </div>
                        <div>
                            <a href="https://www.jumia.com.gh/sp-jumiapay/"><RiVisaLine size={35}/></a>
                        </div>
                        <div>
                            <a href="https://www.jumia.com.gh/sp-mastercard/"><RiMastercardFill size={35}/></a>
                        </div>
                    </Flex>
                </Flex>
            </Flex>
            {/* <div className="px-96 py-5 bg-zinc-500 text-white h-10 flex flex-col flex-wrap">
                {brands.map((brand) => (
                    <div key={list}><Link href={brand.link}>{brand.title}</Link></div>
                ))}
            </div> */}
            <Divider />
            <Flex className="bg-zinc-500 text-white p-5" align="flex-start" justify="center" gap="md">
                <Link href="/hello">Hello</Link>
                <Link href="/hello">Hello</Link>
            </Flex>
        </div>
     );
}
 
export default FooterBottom;