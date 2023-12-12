import Image from "next/image";
const OfferCart = ({ SRC, HotelName }) => {
  return (
    <div className="grid grid-cols-[auto,_2fr]  w-[870px] border-[1px] borer-[#DBDADE] rounded-md mt-[40px] shadow-md">
      <div className="w-11 scale-[1.2] overflow-hidden inline-block absolute end-[372px] mt-[6px] rounded">
        {/* <div className=" h-[60px] w-[60px] bg-[#2689FF] -rotate-45 transform origin-top-left">
          <h1 className=" mb-0 h-[22px] w-[35px] text-[12px] text-white font-semibold rotate-90 text-center pt-3 pl-6 pb-2">
            -15%
          </h1>
        </div> */}
      </div>
      <div>
        <Image
          height={200}
          width={200}
          className="mb-0"
          alt="Profile "
          src={SRC}
        />
      </div>
      <div className="flex justify-between items-center ml-[30px] mr-[30px]">
        <div className="flex flex-col py-[20px]">
          <div>
            <h3 className=" text-[26px] font-semibold leading-9 text-[#00000B] mb-0">
              {HotelName}
            </h3>
            <div className="flex mt-[6px] m-0  gap-1">
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M4.85352 18.8333L6.20768 12.9792L1.66602 9.04167L7.66602 8.52083L9.99935 3L12.3327 8.52083L18.3327 9.04167L13.791 12.9792L15.1452 18.8333L9.99935 15.7292L4.85352 18.8333Z"
                  fill="#FFDC00"
                />
              </svg>
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M4.85352 18.8333L6.20768 12.9792L1.66602 9.04167L7.66602 8.52083L9.99935 3L12.3327 8.52083L18.3327 9.04167L13.791 12.9792L15.1452 18.8333L9.99935 15.7292L4.85352 18.8333Z"
                  fill="#FFDC00"
                />
              </svg>
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M4.85352 18.8333L6.20768 12.9792L1.66602 9.04167L7.66602 8.52083L9.99935 3L12.3327 8.52083L18.3327 9.04167L13.791 12.9792L15.1452 18.8333L9.99935 15.7292L4.85352 18.8333Z"
                  fill="#FFDC00"
                />
              </svg>
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M4.85352 18.8333L6.20768 12.9792L1.66602 9.04167L7.66602 8.52083L9.99935 3L12.3327 8.52083L18.3327 9.04167L13.791 12.9792L15.1452 18.8333L9.99935 15.7292L4.85352 18.8333Z"
                  fill="#FFDC00"
                />
              </svg>
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M4.85352 18.8333L6.20768 12.9792L1.66602 9.04167L7.66602 8.52083L9.99935 3L12.3327 8.52083L18.3327 9.04167L13.791 12.9792L15.1452 18.8333L9.99935 15.7292L4.85352 18.8333Z"
                  fill="#FFDC00"
                />
              </svg>{" "}
              <p className="ml-[6px] text-[#A5A2AD] text-[13px] leading-5 font-normal mb-0">
                (4 reviwes)
              </p>
            </div>
          </div>

          <div className=" text-[#5D586C] text-[13px] font-normal leading-5 mt-[6px] flex flex-col gap-[6px]">
            <p className=" flex gap-3 mb-[0px] items-center">
              <svg
                className="w-[15px] h-[15px]  map-pin opacity-60"
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              Dhaka
            </p>
            <div className="flex gap-5">
              <p className=" mb-0 flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="6.75"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5.25V9L11.25 11.25"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                4 Days
              </p>
              <p className=" mb-0 flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="6.75"
                    cy="5.25"
                    r="3"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.25 15.75V14.25C2.25 12.5931 3.59315 11.25 5.25 11.25H8.25C9.90685 11.25 11.25 12.5931 11.25 14.25V15.75"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.34766C13.3274 2.68753 14.2559 3.88365 14.2559 5.25391C14.2559 6.62416 13.3274 7.82028 12 8.16016"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.75 15.7498V14.2498C15.7422 12.8882 14.8184 11.7027 13.5 11.3623"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                From 1 to 100 People
              </p>
            </div>
            <p className=" mb-0 flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M1.43945 9.00063H2.15945"
                  stroke="#A5A2AD"
                  stroke-width="1.08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.32016 6.12012H2.88016C2.48251 6.12012 2.16016 6.44247 2.16016 6.84012V11.1601C2.16016 11.5578 2.48251 11.8801 2.88016 11.8801H4.32016"
                  stroke="#A5A2AD"
                  stroke-width="1.08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.32031 5.40066V12.6007C4.32031 12.9983 4.64267 13.3207 5.04031 13.3207H5.76031C6.15796 13.3207 6.48031 12.9983 6.48031 12.6007V5.40066C6.48031 5.00302 6.15796 4.68066 5.76031 4.68066H5.04031C4.64267 4.68066 4.32031 5.00302 4.32031 5.40066Z"
                  stroke="#A5A2AD"
                  stroke-width="1.08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.48047 9.00063H10.8005"
                  stroke="#A5A2AD"
                  stroke-width="1.08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8008 5.40066V12.6007C10.8008 12.9983 11.1231 13.3207 11.5208 13.3207H12.2408C12.6384 13.3207 12.9608 12.9983 12.9608 12.6007V5.40066C12.9608 5.00302 12.6384 4.68066 12.2408 4.68066H11.5208C11.1231 4.68066 10.8008 5.00302 10.8008 5.40066Z"
                  stroke="#A5A2AD"
                  stroke-width="1.08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9609 6.12012H14.4009C14.7986 6.12012 15.1209 6.44247 15.1209 6.84012V11.1601C15.1209 11.5578 14.7986 11.8801 14.4009 11.8801H12.9609"
                  stroke="#A5A2AD"
                  stroke-width="1.08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8391 9.00063H15.1191"
                  stroke="#A5A2AD"
                  stroke-width="1.08"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Full refund before five (5) days
            </p>
            <div className="flex gap-3">
              <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                Long Drive
              </p>
              <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                Day Tour
              </p>
            </div>
          </div>
        </div>
        <div className=" divide-x flex h-[139px] w-[1px] bg-[#DBDADE]  ">
          <div></div>
          <div></div>
        </div>

        <div className=" text-end">
          <p className="text-[#A5A2AD] text-[13px] font-normal leading-5 mb-0">
            Starts from
          </p>
          <h2 className="text-[15px] leading-[22px] font-normal text-[#EA5455] line-through mb-0">
            BDT 6000
          </h2>
          <h1 className="text-[22px] font-bold leading-[30px] text-[#00006D] mb-0">
            BDT 10,000
          </h1>
          <p className="text-[#5D586C] text-[13px] font-normal leading-5 mb-0">
            Per Person
          </p>
          <button className="text-[13px] text-[#FFFFFF] font-[500] leading-4 tracking-[0.43px] rounded bg-[#000057] px-[14px] py-[6px] text-center mt-[12px] hover:bg-[#EBEBF4] hover:text-[#000057] transition-all hover:border-solid-1px-[#000057]]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default OfferCart;
