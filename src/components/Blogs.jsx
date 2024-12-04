import { Carousel } from "@mantine/carousel";
import { Text, Title } from "@mantine/core";
import { MdDateRange } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const blogPosts = [
    {
      image: "/saloon-image-1.jpeg",
      date: "December 04, 2024",
      number: "34",
      title: "BLOG TITLE",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam.",
    },
    {
      image: "/saloon-image-2.jpeg",
      date: "December 04, 2024",
      number: "34",
      title: "BLOG TITLE",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam.",
    },
    {
      image: "/saloon-image-3.jpeg",
      date: "December 04, 2024",
      number: "34",
      title: "BLOG TITLE",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam.",
    },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center items-center align-middle w-[80%] m-auto">
      <div className="flex flex-col justify-center align-middle items-center">
        <p className="font-extrabold text-6xl m-5">BLOGS</p>
        <p className="font-medium text-lg text-orange-900">Tips For Beauty</p>
      </div>
      <div className="flex flex-row w-[80%] mx-auto my-20 border-0 shadow-md border-black h-[650px]">
        {blogPosts.map((blogPost) => (
          <div className="w-96 m-3">
            <div className="w-full h-[70%]  relative mb-3">
              <img
                src={blogPost.image}
                alt="saloon image"
                className="w-full h-[100%]"
              />
              <div className="bg-white  w-[80%] h-20 absolute bottom-0 left-0">
                <div className="static">
                  <Link href={"/blog"}>
                    <div className="bg-orange-700 w-[90%] h-11 absolute bottom-0 left-0 flex align-middle text-white gap-3 justify-center items-center">
                      <div className="flex align-middle gap-2 justify-center items-center">
                        <MdDateRange />
                        <Text>{blogPost.date}</Text>
                      </div>
                      <div className="flex align-middle gap-2 justify-center items-center">
                        <RiMessage2Fill />
                        <Text>{blogPost.number}</Text>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-40 flex flex-col gap-2">
              <Title>{blogPost.title}</Title>
              <Text>{blogPost.details}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
