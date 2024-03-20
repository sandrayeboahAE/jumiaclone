import React from "react";
import FooterTop from "./Footertop";
import FooterBottom from "./Footerbottom";
import { Stack } from "@mantine/core";

const Footer = () => {
    return ( <div className="m-auto">
        <Stack gap="0">
            <FooterTop />
            <FooterBottom />
        </Stack>
    </div> );
}
 
export default Footer;