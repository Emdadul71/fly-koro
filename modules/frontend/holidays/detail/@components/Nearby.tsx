import Image from "next/image";
const Nearby = () => {
  const IPData = [
    { data: `3.1 km from Dolphin More police Box` },
    { data: " 0.4 Km from Premier Bank ATM" },
    { data: "0.5 Km from coxs Bazar Sea Beach Nearby Terminal" },
    { data: " 0.091 km from Srar Line Bus Counter" },
    { data: "4.6 km from Coxs Baxar Airport" },
    { data: "5.2 Km from Coxs Bazar Airport" },
  ];

  return (
    <section className="p-0">
      <h1 className="mb-0 text-[22px] text-black font-bold leading-[30px]">
        Tours Location
      </h1>
      <div className="mt-6 flex gap-[30px]">
        <div>
          <Image
            height={529}
            width={770}
            alt="map"
            src={"/images/HotelRoomCart/image 3.png"}
          />
        </div>
      </div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px] ">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
export default Nearby;
