"use client";
import { Collapse, CollapseProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import { Radio, Select } from "antd";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import Link from "next/link";
import React from "react";
import { Slider, Switch } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { IoIosStar } from "react-icons/io";

import { Input, Space } from "antd";
import { SearchProps } from "antd/es/input";

import OfferCart from "./@components/Offercart";
import SB from "./@components/SearchBox";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const { Panel } = Collapse;
const HolidaysSearch = () => {
  // const onChangeRadio = (key: string | string[]) => {
  //   console.log(key);
  // };
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [value, setValue] = useState(1);

  const [seemore, setSeemore] = useState(false);

  const [sb, setsb] = useState(false);

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChangeChecked = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) {
    }
  };
  const Seemore = () => {
    return (
      <button
        onClick={() => setSeemore(true)}
        className={
          seemore
            ? "hidden"
            : "h-auto w-[60px] text-[13px] leading-5 font-normal text-[#2689FF]"
        }
      >
        see more
      </button>
    );
  };

  return (
    <>
      <section className="bg-[#F6F6F7] pb-2 mb-[60px] ">
        <div className="max-w-[1170px] w-full mx-auto py-3 flex justify-between items-center">
          <div>
            <p className="mb-0 text-[#A5A2AD]">Tour Location</p>
            <h1 className="h3 mb-1">COX’S BAZAR</h1>
          </div>
          <div
            className={
              sb === true
                ? "px-2 py-2 bg-[#EBEBF4] text-[#00006D] rounded hover:bg-[#bebeef] transition-all cursor-pointer"
                : "hidden"
            }
            onClick={() => setsb(false)}
          >
            <svg
              className="h-[22px] w-[22px] "
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 8L8 16M8.00001 8L16 16"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <Link
            onClick={() => setsb(true)}
            href="#"
            className={
              sb === true
                ? "hidden"
                : "rounded-md bg-[#FF9100] text-[#FFFFFF] text-[15px] font-semibold leading-[22px] px-5 py-[10px] transition-all hover:bg-[#00006D] hover:text-white"
            }
          >
            Modify Search
          </Link>
        </div>
        {sb === true ? <SB /> : ""}
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-[270px_1fr] gap-[30px]">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center ">
                <p className="mb-0 text-[15px]">Filter</p>
                <button className="btn btn-primary rounded-md px-[14px] py-[6px] text-[13px] tracking-[0.43px] transition-all ">
                  Reset Now
                </button>
              </div>
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                className="test "
              >
                <Panel header="Filter Price" key="1">
                  <div className="flex flex-col gap-4 ">
                    <div>
                      <Slider range defaultValue={[20, 50]} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1 w-[109px] items-start justify-start border rounded px-3 pt-1 pb-2">
                        <p className="text-[#A5A2AD]  mb-0 text-[13px] font-normal leading-[18px] ">
                          Min price
                        </p>
                        <h5 className="w-auto h-auto mb-0 font-semibolt leading-[14px]">
                          TK 2000
                        </h5>
                      </div>

                      <div className="flex flex-col gap-1 w-[109px] items-start justify-start border rounded px-3 pt-1 pb-2">
                        <p className="text-[#A5A2AD]  mb-0 text-[13px] font-normal leading-[18px] ">
                          Min price
                        </p>
                        <h5 className="w-auto h-auto mb-0 font-semibolt leading-[14px]">
                          TK 2000
                        </h5>
                      </div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <Collapse
                defaultActiveKey={["1"]}
                // onChange={onChangeRadio}
                expandIconPosition="end"
              >
                <Panel header="Tour Type" key="4">
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    className=" flex flex-col gap-[8px]"
                  >
                    <Radio value={1}>One Way</Radio>
                    <Radio value={2}>Round Way</Radio>
                    <Radio value={3}>Multi City</Radio>
                  </Radio.Group>
                </Panel>
              </Collapse>
              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Duration" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Less than 6 hours</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">6-12 hours</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">12-24 hours</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">24+ hours</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">2 Days</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">3 Days</p>
                        </Checkbox>
                        <button
                          onClick={() => setSeemore(false)}
                          className="h-auto w-[60px] text-[13px] leading-5 font-normal text-[#2689FF] "
                        >
                          see less
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Panel>
              </Collapse>
              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Time" key="4">
                  <div className="grid grid-cols-4 border divide-x-2 rounded">
                    <div className="flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="#000062"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75V11.25ZM4 12.75C4.41421 12.75 4.75 12.4142 4.75 12C4.75 11.5858 4.41421 11.25 4 11.25V12.75ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM11.25 4C11.25 4.41421 11.5858 4.75 12 4.75C12.4142 4.75 12.75 4.41421 12.75 4H11.25ZM20 11.25C19.5858 11.25 19.25 11.5858 19.25 12C19.25 12.4142 19.5858 12.75 20 12.75V11.25ZM21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM12.75 20C12.75 19.5858 12.4142 19.25 12 19.25C11.5858 19.25 11.25 19.5858 11.25 20H12.75ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM6.13028 5.06962C5.83739 4.77673 5.36251 4.77673 5.06962 5.06962C4.77673 5.36251 4.77673 5.83739 5.06962 6.13028L6.13028 5.06962ZM5.76962 6.83028C6.06251 7.12317 6.53739 7.12317 6.83028 6.83028C7.12317 6.53739 7.12317 6.06251 6.83028 5.76962L5.76962 6.83028ZM18.9304 6.13028C19.2233 5.83739 19.2233 5.36251 18.9304 5.06962C18.6375 4.77673 18.1626 4.77673 17.8697 5.06962L18.9304 6.13028ZM17.1697 5.76962C16.8768 6.06251 16.8768 6.53739 17.1697 6.83028C17.4626 7.12317 17.9375 7.12317 18.2304 6.83028L17.1697 5.76962ZM18.2304 17.1697C17.9375 16.8768 17.4626 16.8768 17.1697 17.1697C16.8768 17.4626 16.8768 17.9375 17.1697 18.2304L18.2304 17.1697ZM17.8697 18.9304C18.1626 19.2233 18.6375 19.2233 18.9304 18.9304C19.2233 18.6375 19.2233 18.1626 18.9304 17.8697L17.8697 18.9304ZM6.83028 18.2304C7.12317 17.9375 7.12317 17.4626 6.83028 17.1697C6.53739 16.8768 6.06251 16.8768 5.76962 17.1697L6.83028 18.2304ZM5.06962 17.8697C4.77673 18.1626 4.77673 18.6375 5.06962 18.9304C5.36251 19.2233 5.83739 19.2233 6.13028 18.9304L5.06962 17.8697ZM3 12.75H4V11.25H3V12.75ZM11.25 3V4H12.75V3H11.25ZM20 12.75H21V11.25H20V12.75ZM11.25 20V21H12.75V20H11.25ZM5.06962 6.13028L5.76962 6.83028L6.83028 5.76962L6.13028 5.06962L5.06962 6.13028ZM17.8697 5.06962L17.1697 5.76962L18.2304 6.83028L18.9304 6.13028L17.8697 5.06962ZM17.1697 18.2304L17.8697 18.9304L18.9304 17.8697L18.2304 17.1697L17.1697 18.2304ZM5.76962 17.1697L5.06962 17.8697L6.13028 18.9304L6.83028 18.2304L5.76962 17.1697Z"
                          fill="#000062"
                        />
                      </svg>
                      <p className="mb-0">00-06</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="#000062"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75V11.25ZM4 12.75C4.41421 12.75 4.75 12.4142 4.75 12C4.75 11.5858 4.41421 11.25 4 11.25V12.75ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM11.25 4C11.25 4.41421 11.5858 4.75 12 4.75C12.4142 4.75 12.75 4.41421 12.75 4H11.25ZM20 11.25C19.5858 11.25 19.25 11.5858 19.25 12C19.25 12.4142 19.5858 12.75 20 12.75V11.25ZM21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM12.75 20C12.75 19.5858 12.4142 19.25 12 19.25C11.5858 19.25 11.25 19.5858 11.25 20H12.75ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM6.13028 5.06962C5.83739 4.77673 5.36251 4.77673 5.06962 5.06962C4.77673 5.36251 4.77673 5.83739 5.06962 6.13028L6.13028 5.06962ZM5.76962 6.83028C6.06251 7.12317 6.53739 7.12317 6.83028 6.83028C7.12317 6.53739 7.12317 6.06251 6.83028 5.76962L5.76962 6.83028ZM18.9304 6.13028C19.2233 5.83739 19.2233 5.36251 18.9304 5.06962C18.6375 4.77673 18.1626 4.77673 17.8697 5.06962L18.9304 6.13028ZM17.1697 5.76962C16.8768 6.06251 16.8768 6.53739 17.1697 6.83028C17.4626 7.12317 17.9375 7.12317 18.2304 6.83028L17.1697 5.76962ZM18.2304 17.1697C17.9375 16.8768 17.4626 16.8768 17.1697 17.1697C16.8768 17.4626 16.8768 17.9375 17.1697 18.2304L18.2304 17.1697ZM17.8697 18.9304C18.1626 19.2233 18.6375 19.2233 18.9304 18.9304C19.2233 18.6375 19.2233 18.1626 18.9304 17.8697L17.8697 18.9304ZM6.83028 18.2304C7.12317 17.9375 7.12317 17.4626 6.83028 17.1697C6.53739 16.8768 6.06251 16.8768 5.76962 17.1697L6.83028 18.2304ZM5.06962 17.8697C4.77673 18.1626 4.77673 18.6375 5.06962 18.9304C5.36251 19.2233 5.83739 19.2233 6.13028 18.9304L5.06962 17.8697ZM3 12.75H4V11.25H3V12.75ZM11.25 3V4H12.75V3H11.25ZM20 12.75H21V11.25H20V12.75ZM11.25 20V21H12.75V20H11.25ZM5.06962 6.13028L5.76962 6.83028L6.83028 5.76962L6.13028 5.06962L5.06962 6.13028ZM17.8697 5.06962L17.1697 5.76962L18.2304 6.83028L18.9304 6.13028L17.8697 5.06962ZM17.1697 18.2304L17.8697 18.9304L18.9304 17.8697L18.2304 17.1697L17.1697 18.2304ZM5.76962 17.1697L5.06962 17.8697L6.13028 18.9304L6.83028 18.2304L5.76962 17.1697Z"
                          fill="#000062"
                        />
                      </svg>
                      <p className="mb-0">00-06</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M3.33398 16.2504C2.91977 16.2504 2.58398 16.5862 2.58398 17.0004C2.58398 17.4146 2.91977 17.7504 3.33398 17.7504V16.2504ZM4.33398 17.7504C4.7482 17.7504 5.08398 17.4146 5.08398 17.0004C5.08398 16.5862 4.7482 16.2504 4.33398 16.2504V17.7504ZM20.334 16.2504C19.9198 16.2504 19.584 16.5862 19.584 17.0004C19.584 17.4146 19.9198 17.7504 20.334 17.7504V16.2504ZM21.334 17.7504C21.7482 17.7504 22.084 17.4146 22.084 17.0004C22.084 16.5862 21.7482 16.2504 21.334 16.2504V17.7504ZM6.46427 10.0703C6.17137 9.77736 5.6965 9.77736 5.40361 10.0703C5.11071 10.3631 5.11071 10.838 5.40361 11.1309L6.46427 10.0703ZM6.10361 11.8309C6.3965 12.1238 6.87137 12.1238 7.16427 11.8309C7.45716 11.538 7.45716 11.0631 7.16427 10.7703L6.10361 11.8309ZM19.2644 11.1309C19.5573 10.838 19.5573 10.3631 19.2644 10.0703C18.9715 9.77736 18.4966 9.77736 18.2037 10.0703L19.2644 11.1309ZM17.5037 10.7703C17.2108 11.0631 17.2108 11.538 17.5037 11.8309C17.7966 12.1238 18.2715 12.1238 18.5644 11.8309L17.5037 10.7703ZM7.58398 17.0004C7.58398 17.4146 7.91977 17.7504 8.33398 17.7504C8.7482 17.7504 9.08398 17.4146 9.08398 17.0004H7.58398ZM15.584 17.0004C15.584 17.4146 15.9198 17.7504 16.334 17.7504C16.7482 17.7504 17.084 17.4146 17.084 17.0004H15.584ZM3.33398 17.7504H4.33398V16.2504H3.33398V17.7504ZM20.334 17.7504H21.334V16.2504H20.334V17.7504ZM5.40361 11.1309L6.10361 11.8309L7.16427 10.7703L6.46427 10.0703L5.40361 11.1309ZM18.2037 10.0703L17.5037 10.7703L18.5644 11.8309L19.2644 11.1309L18.2037 10.0703ZM9.08398 17.0004C9.08398 15.2055 10.5391 13.7504 12.334 13.7504V12.2504C9.71063 12.2504 7.58398 14.377 7.58398 17.0004H9.08398ZM12.334 13.7504C14.1289 13.7504 15.584 15.2055 15.584 17.0004H17.084C17.084 14.377 14.9573 12.2504 12.334 12.2504V13.7504Z"
                          fill="#9999C5"
                        />
                        <path
                          d="M3.33398 21H21.334"
                          stroke="#9999C5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.084 3C13.084 2.58579 12.7482 2.25 12.334 2.25C11.9198 2.25 11.584 2.58579 11.584 3H13.084ZM12.334 9H11.584C11.584 9.30335 11.7667 9.57682 12.047 9.69291C12.3272 9.809 12.6498 9.74483 12.8643 9.53033L12.334 9ZM15.8643 6.53033C16.1572 6.23744 16.1572 5.76256 15.8643 5.46967C15.5714 5.17678 15.0965 5.17678 14.8037 5.46967L15.8643 6.53033ZM9.86431 5.46967C9.57142 5.17678 9.09655 5.17678 8.80365 5.46967C8.51076 5.76256 8.51076 6.23744 8.80365 6.53033L9.86431 5.46967ZM11.8037 9.53033C12.0965 9.82322 12.5714 9.82322 12.8643 9.53033C13.1572 9.23744 13.1572 8.76256 12.8643 8.46967L11.8037 9.53033ZM11.584 3V9H13.084V3H11.584ZM12.8643 9.53033L15.8643 6.53033L14.8037 5.46967L11.8037 8.46967L12.8643 9.53033ZM8.80365 6.53033L11.8037 9.53033L12.8643 8.46967L9.86431 5.46967L8.80365 6.53033Z"
                          fill="#9999C5"
                        />
                      </svg>
                      <p className="mb-0">12-18</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.0005 3.00019C12.1325 3.00019 12.2635 3.00019 12.3935 3.00019C9.74263 5.46335 9.22851 9.46804 11.1712 12.5209C13.1139 15.5738 16.9594 16.8043 20.3135 15.4462C18.5808 19.6153 14.0273 21.8555 9.66711 20.6839C5.30692 19.5122 2.48956 15.2915 3.07992 10.8154C3.67027 6.33927 7.48562 2.99328 12.0005 2.99219V3.00019Z"
                          stroke="#9999C5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="mb-0">18-00</p>
                    </div>
                  </div>
                </Panel>
              </Collapse>

              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Location Range" key="4">
                  <p>
                    Distance from the city centre <span>25 KM</span>
                  </p>
                  <Slider defaultValue={30} />
                </Panel>
              </Collapse>

              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Tags" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Exclusive</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Bike Rentels</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Beach Activities</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">Adventure</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">tenting</p>
                        </Checkbox>
                        <button
                          onClick={() => setSeemore(false)}
                          className="h-auto w-[60px] text-[13px] leading-5 font-normal text-[#2689FF] "
                        >
                          see less
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Panel>
              </Collapse>
            </div>

            <div>
              <div className="w-[870px] flex justify-between items-center">
                <div>
                  <h1 className="text-[18px] text-[#00000B] leading-6 font-semibold mb-[2px]">
                    10 Available Tour
                  </h1>
                  <p className=" text-[13px] font-normal leading-5 text-[#A5A2AD] mb-0">
                    Price includes VAT & Tex
                  </p>
                </div>
                <div>
                  <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Best Match</Radio.Button>
                    <Radio.Button value="b">Low Price</Radio.Button>
                  </Radio.Group>
                </div>
              </div>

              <OfferCart
                SRC={"/images/holidaySearch/cox3.png"}
                HotelName={"Dhaka to Cox Bazar"}
              />
              <OfferCart
                SRC={"/images/holidaySearch/cox2.png"}
                HotelName={"Dhaka to Cox Bazar"}
              />
              <OfferCart
                SRC={"/images/holidaySearch/cox1.png"}
                HotelName={"Dhaka to Cox Bazar"}
              />
              <div className=" flex justify-between bg-[#F6F6F7] rounded mt-8 px-[30px] py-[20px]">
                <h1 className=" mb-0 text-black text-[22px] leading-7 font-bold text-center mt-1">
                  Need a Customized Tour?
                </h1>
                <button className="btn bg-secondary text-white hover:bg-primary rounded transition-all duration-300">
                  Request Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HolidaysSearch;
