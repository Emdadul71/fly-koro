"use client";
import { Tabs, TabsProps } from "antd";
import MegaSearch from "../mega-search";

const MegaTab = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Flight",
      children: <MegaSearch />,
    },
    {
      key: "2",
      label: "Hotels",
      children: <MegaSearch />,
    },
    {
      key: "3",
      label: "Holiday",
      children: <MegaSearch />,
    },
    {
      key: "4",
      label: "Foreigner’s Holiday",
      children: <MegaSearch />,
    },
    {
      key: "5",
      label: "Events",
      children: <MegaSearch />,
    },
    {
      key: "6",
      label: "Visa",
      children: <MegaSearch />,
    },
  ];
  return (
    <div className="z-10 -mb-[230px]  ">
      <div className="mb-10">
        <Tabs
          tabBarGutter={60}
          defaultActiveKey="1"
          items={items}
          className="mega_tab"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MegaTab;
