const PaginationTab = () => {
  const Left = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M10 4.00098L6 8.00098L10 12.001"
          stroke="#6F6B7D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  const Right = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M6 4.00098L10 8.00098L6 12.001"
          stroke="#6F6B7D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  return (
    <div className="w-[100%] border-y-[1px] border-[#DBDADE] mt-[30px] py-[20px] flex gap-1">
      <button className="px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded ">
        <Left />
      </button>
      <button className="px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded ">
        1
      </button>
      <button className="px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded ">
        2
      </button>
      <button className="px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded ">
        3
      </button>
      <button className="px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded ">
        4
      </button>
      <button className="px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded ">
        5
      </button>
      <button className="px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded ">
        <Right />
      </button>
    </div>
  );
};
export default PaginationTab;
