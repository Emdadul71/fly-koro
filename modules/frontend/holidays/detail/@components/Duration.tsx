const Duration = () => {
  const Tag = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.54917 5H4.1875C3.25552 5 2.5 5.75552 2.5 6.6875V9.04917C2.5 9.49667 2.6775 9.92583 2.99417 10.2425L8.09083 15.3392C8.40731 15.6557 8.83657 15.8335 9.28417 15.8335C9.73176 15.8335 10.161 15.6557 10.4775 15.3392L12.8392 12.9775C13.1557 12.661 13.3335 12.2318 13.3335 11.7842C13.3335 11.3366 13.1557 10.9073 12.8392 10.5908L7.74167 5.49417C7.42537 5.17791 6.99645 5.00017 6.54917 5Z"
          stroke="#A5A2AD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6444 15.3395L17.006 12.9778C17.3226 12.6613 17.5004 12.2321 17.5004 11.7845C17.5004 11.3369 17.3226 10.9076 17.006 10.5911L11.0752 4.66113"
          stroke="#A5A2AD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.99993 7.49967H4.9916"
          stroke="#A5A2AD"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        Duration
      </h1>
      <div className=" flex gap-[80px] mt-[13px]">
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          3.5 Hours
        </p>
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          5-7 Hours
        </p>
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          Multiday
        </p>
      </div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[20px] ">
        Languages
      </h1>
      <div className=" flex gap-[80px] mt-[13px]">
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          English
        </p>
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          Francis
        </p>
      </div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Duration;
