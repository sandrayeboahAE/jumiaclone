import { Carousel } from "@mantine/carousel";
import { Text, Title } from "@mantine/core";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center align-middle w-[80%] m-auto">
      <div>
        <Title className="m-5">BLOGS</Title>
        <Text>Tips For Beauty</Text>
      </div>
      <div className="flex flex-row w-[80%] mx-auto my-20 items-center border border-black h-[450px]">
        <div className="bg-blue-400 w-96 h-96 m-3">
          <div>
            <Image
              src="/saloon-image-1.jpeg"
              alt="saloon image"
              width="400"
              height="200"
            />
          </div>
          <div>
            <Title>BLOG TITLE</Title>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam.
            </Text>
          </div>
        </div>
        <div className="bg-blue-400 w-96 h-96 m-3">
          <div>
            <Image
              src="/saloon-image-2.jpeg"
              alt="saloon image"
              width="200"
              height="200"
            />
          </div>
          <div>
            <Title>BLOG TITLE</Title>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam.
            </Text>
          </div>
        </div>
        <div className="bg-blue-400 w-96 h-96 m-3">
          <div>
            <Image
              src="/saloon-image-3.jpeg"
              alt="saloon image"
              width="200"
              height="200"
            />
          </div>
          <div>
            <Title>BLOG TITLE</Title>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
