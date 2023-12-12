import PaginationTab from "./PaginationTab";
import ReviewComment from "./ReviewComment";
import WriteReview from "./WriteAReview";
const Reviews = () => {
  const SvgStar = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M9.66375 30.151L11.8575 20.6672L4.5 14.2885L14.22 13.4447L18 4.50098L21.78 13.4447L31.5 14.2885L24.1425 20.6672L26.3363 30.151L18 25.1222L9.66375 30.151Z"
          fill="#FFDC00"
        />
      </svg>
    );
  };
  return (
    <section className="pb-0">
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[40px] ">
        <div></div>
        <div></div>
      </div>
      <h1 className="mb-0 text-[22px] text-black font-bold leading-[30px]">
        Reviews
      </h1>
      <div className="w-[770px] px-[50px] py-[30px] border border-[#DBDADE] rounded-md mt-[30px] flex justify-between items-center">
        <div className="flex flex-col items-center gap-1 ml-[40px]">
          <h1 className="flex text-[32px] text-[#00006D] font-[600] leading-[44px] mb-0 items-center">
            <SvgStar /> 5/5
          </h1>

          <h2 className="text-black text-[18px] font-[600] leading-6 mb-0">
            Excellent
          </h2>
          <p className="text-[13px] text-[#A5A2AD] leading-[20px] font-normal mb-0">
            {" "}
            (4) reviews
          </p>
        </div>
        <div className=" divide-y flex h-[1px] w-[130px] bg-[#DBDADE] my-[40px] rotate-90 ">
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5 w-[75px]">
              Excellent
            </p>

            <div className=" divide-y flex h-[2px] w-[250px] bg-[#28C76F] my-[10px] mx-[12px]">
              <div></div>
              <div></div>
            </div>

            <p className="mb-0 text-[13px] text-[#5D586C] leading-5">4</p>
          </div>
          <div className="flex">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5  w-[75px]">
              Very Good
            </p>

            <div className=" divide-y flex h-[2px] w-[250px] bg-[#C9C7CE] my-[10px] mx-[12px]">
              <div></div>
              <div></div>
            </div>

            <p className="mb-0 text-[13px] text-[#5D586C] leading-5">0</p>
          </div>
          <div className="flex">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5  w-[75px]">
              Average
            </p>

            <div className=" divide-y flex h-[2px] w-[250px] bg-[#C9C7CE] my-[10px] mx-[12px]">
              <div></div>
              <div></div>
            </div>

            <p className="mb-0 text-[13px] text-[#5D586C] leading-5">0</p>
          </div>
          <div className="flex">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5  w-[75px]">
              Poor
            </p>

            <div className=" divide-y flex h-[2px] w-[250px] bg-[#C9C7CE] my-[10px] mx-[12px]">
              <div></div>
              <div></div>
            </div>

            <p className="mb-0 text-[13px] text-[#5D586C] leading-5">0</p>
          </div>
          <div className="flex">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5  w-[75px]">
              Tarrible
            </p>

            <div className=" divide-y flex h-[2px] w-[250px] bg-[#C9C7CE] my-[10px] mx-[12px]">
              <div></div>
              <div></div>
            </div>

            <p className="mb-0 text-[13px] text-[#5D586C] leading-5">0</p>
          </div>
        </div>
      </div>
      <p className="mb-0 text-[#5D586C] text-[13px] leading-5 mt-3 text-center">
        4 Reviews on this Tour - Showing 1 to 3
      </p>
      <ReviewComment />
      <ReviewComment />
      <ReviewComment />
      <PaginationTab />
      <WriteReview />
    </section>
  );
};
export default Reviews;
