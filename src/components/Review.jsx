import { RiDoubleQuotesL, RiStarSFill } from "react-icons/ri";

const Review = () => {
  const reviewDetails = [
    {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem, dignissimos blanditiis nihil ipsa exercitationem minus enim quos modi quisquam nam iusto a.",
      name: "Henry Davis",
    },
    {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem, dignissimos blanditiis nihil ipsa exercitationem minus enim quos modi quisquam nam iusto a.",
      name: "Henry Davis",
    },
  ];
  return (
    <div className="flex flex-col gap-2 justify-center items-center align-middle w-[80%] m-auto">
      <div className="flex flex-row justify-center w-[80%] mx-auto my-20  h-[350px]">
        {reviewDetails.map((reviewDetail) => (
          <div className="w-[40%] m-3 border-t-8 border-orange-700 flex flex-col items-center justify-center relative shadow-md">
            <div className="bg-orange-700 flex items-center justify-center text-white w-20 h-20 border-o rounded-full absolute bottom-72 left-50">
              <RiDoubleQuotesL size={35} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl align-middle m-2 text-slate-900 font-semibold italic">
                {reviewDetail.details}
              </p>
              <p className="text-2xl font-semibold m-2">{reviewDetail.name}</p>
              <div className="flex flex-row text-yellow-500">
                <RiStarSFill size={20} />
                <RiStarSFill size={20} />
                <RiStarSFill size={20} />
                <RiStarSFill size={20} />
                <RiStarSFill size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
