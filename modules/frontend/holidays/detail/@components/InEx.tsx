const InEx = () => {
  const dataIn = [
    { data: "Specialized bilingual guide" },
    {
      data: "Private Transport",
    },
    { data: "Entrance fees (Cable and car and Moon Valley)" },
    { data: "Box lunch water, banana apple and chocolate" },
  ];
  const dataEx = [
    { data: "Additional Services" },
    {
      data: "Insurance",
    },
    { data: "Drink" },
    { data: "Tickets" },
  ];
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        Included/Excluded
      </h1>

      <div className=" flex gap-[100px]">
        <div>
          {dataIn.map((data, i) => {
            return (
              <p
                key={i}
                className="flex gap-3 mb-0 text-[15px] text-[#5D586C] leading-8 font-normal items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" rx="8" fill="#D4F4E2" />
                  <path
                    d="M6.66699 5.33301L9.33366 7.99967L6.66699 10.6663"
                    stroke="#28C76F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {data.data}
              </p>
            );
          })}
        </div>
        <div>
          {" "}
          {dataEx.map((data, i) => {
            return (
              <p
                key={i}
                className="flex gap-3 mb-0 text-[15px] text-[#5D586C] leading-8 font-normal items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <rect width="16" height="16" rx="8" fill="#FBDDDD" />
                  <path
                    d="M10.75 5.25L5.25 10.75"
                    stroke="#EA5455"
                    stroke-width="0.916667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.25 5.25L10.75 10.75"
                    stroke="#EA5455"
                    stroke-width="0.916667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {data.data}
              </p>
            );
          })}
        </div>
      </div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default InEx;
