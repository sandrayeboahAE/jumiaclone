import { Flex, Input } from "@mantine/core";
import Image from "next/image";

const Navbar = () => {
    return ( <div>
        <Flex direction="row">
        <div><Image src="/Jumia-Logo-500x281.png" alt="page logo" width="50" height="50" /></div>
        <div><Input size="md" placeholder="Input component" />
          <button>SEARCH</button>
        </div>
        <div>
            <div>Account</div>
            <div>Help</div>
            <div>Cart</div>
        </div>
        </Flex>
    </div> );
}
 
export default Navbar;