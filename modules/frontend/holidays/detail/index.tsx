"use client";
import React from "react";
import { ConfigProvider, Tabs, TabsProps } from "antd";

import { FiChevronDown, FiChevronUp, FiHeart } from "react-icons/fi";
import AboutHotel from "./@components/AboutHotel";

import Nearby from "./@components/Nearby";

import Reviews from "./@components/Reviews";
import InEx from "./@components/InEx";
import Duration from "./@components/Duration";

import BulkDiscount from "./@components/BulkDiscount";
import AskQuestion from "./@components/AskQuestion";
import Itinerary from "./@components/Itinerary";

const HolidaysDetails = () => {
  return (
    <section>
      <div className="container flex gap-[30px] mt-[60px]">
        <div className="container-1 w-[770px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-0 text-[32px] font-semibold leading-[44px]">
                  Cannes and Antibes Night Tour the Seine Extraordinaire
                </h1>
                <div className="flex gap-3">
                  <div className="flex gap-[5px] items-center">
                    <p className="mb-0 flex gap-[6px] items-center text-[15px] font-semibold leading-[22px] text-[#00000B]">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="material-symbols:star">
                          <path
                            id="Vector"
                            d="M5.36875 16.75L6.5875 11.4813L2.5 7.9375L7.9 7.46875L10 2.5L12.1 7.46875L17.5 7.9375L13.4125 11.4813L14.6312 16.75L10 13.9563L5.36875 16.75Z"
                            fill="#FFDC00"
                          />
                        </g>
                      </svg>
                      5
                    </p>

                    <p className="mb-0 text-[#A5A2AD] text-[13px] font-normal leading-5">
                      (4 Reviews)
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g id="bi:dot">
                        <path
                          id="Vector"
                          d="M8 9.5C8.39782 9.5 8.77936 9.34196 9.06066 9.06066C9.34196 8.77936 9.5 8.39782 9.5 8C9.5 7.60218 9.34196 7.22064 9.06066 6.93934C8.77936 6.65804 8.39782 6.5 8 6.5C7.60218 6.5 7.22064 6.65804 6.93934 6.93934C6.65804 7.22064 6.5 7.60218 6.5 8C6.5 8.39782 6.65804 8.77936 6.93934 9.06066C7.22064 9.34196 7.60218 9.5 8 9.5Z"
                          fill="#A5A2AD"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="flex gap-[5px] items-center">
                    <p className="mb-0">
                      <svg
                        className="h-[4] w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g id="map-pin">
                          <circle
                            id="Oval"
                            cx="8"
                            cy="7.33337"
                            r="2"
                            stroke="#A5A2AD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Path"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.7717 11.1046L8.94299 13.9333C8.4224 14.4533 7.57892 14.4533 7.05833 13.9333L4.22899 11.1046C2.14627 9.02177 2.14633 5.64494 4.22912 3.56219C6.31191 1.47943 9.68874 1.47943 11.7715 3.56219C13.8543 5.64494 13.8544 9.02177 11.7717 11.1046V11.1046Z"
                            stroke="#A5A2AD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                    </p>
                    <p className="mb-0  text-[#A5A2AD] text-[13px] font-normal leading-5">
                      Nevada, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <circle
                      cx="14"
                      cy="14"
                      r="10.5"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 8.16699V14.0003L17.5 17.5003"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Duration
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    4 days
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M9.33301 24.5003H13.9997"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.6663 24.5V3.5"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.667 4.66699L22.167 9.33366L11.667 14.0003"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Tour Type
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Daily tour
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <ellipse
                      cx="10.4997"
                      cy="8.16667"
                      rx="4.66667"
                      ry="4.66667"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 24.5V22.1667C3.5 19.5893 5.58934 17.5 8.16667 17.5H12.8333C15.4107 17.5 17.5 19.5893 17.5 22.1667V24.5"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.667 3.65137C20.7319 4.18007 22.1761 6.04069 22.1761 8.1722C22.1761 10.3037 20.7319 12.1643 18.667 12.693"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.5 24.4998V22.1665C24.4878 20.0485 23.0508 18.2043 21 17.6748"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Group Size
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    10 People
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M5.83301 5.83301H13.5167C13.9885 5.83311 14.4138 6.11736 14.5943 6.55324C14.7748 6.98913 14.6751 7.49085 14.3415 7.82451L12.833 9.33301"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.33333 9.33301C9.33333 11.083 9.91667 12.833 7 15.1663"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 23.333L18.6667 12.833L23.3333 23.333"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.2831 21.0003H15.0498"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Languages
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    English, Francis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]  ">
            <div></div>
            <div></div>
          </div>
          <div>
            <AboutHotel />
            <InEx />
            <Itinerary />
            <Duration />
            <AskQuestion />
            <Nearby />
            <BulkDiscount />
            <Reviews />
          </div>
        </div>
        <div className="container-2 w-[370px]">
          <div className="flex gap-4 justify-end">
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <svg
                className="h-[22px] w-[22px]"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g id="player-play">
                  <path
                    id="Path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.41699 3.66663V18.3333L18.3337 11L6.41699 3.66663Z"
                    stroke="#00006D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>

            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <svg
                className="h-[22px] w-[22px]"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g id="share">
                  <circle
                    id="Oval"
                    cx="5.5"
                    cy="11"
                    r="2.75"
                    stroke="#00006D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    id="Oval_2"
                    cx="16.5"
                    cy="5.5"
                    r="2.75"
                    stroke="#00006D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    id="Oval_3"
                    cx="16.5"
                    cy="16.5"
                    r="2.75"
                    stroke="#00006D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Path"
                    d="M7.97461 9.80832L14.0246 6.69165"
                    stroke="#00006D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Path_2"
                    d="M7.97461 12.1917L14.0246 15.3083"
                    stroke="#00006D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100] transition-all">
              <svg
                className="h-[22px] w-[22px]"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g id="heart">
                  <path
                    id="Shape"
                    d="M18.4031 12.9738C18.6974 12.6824 18.6997 12.2075 18.4082 11.9132C18.1168 11.6189 17.6419 11.6166 17.3476 11.9081L18.4031 12.9738ZM11.0004 19.25L10.4726 19.7828C10.7649 20.0723 11.2358 20.0723 11.5281 19.7828L11.0004 19.25ZM4.65313 11.9081C4.35883 11.6166 3.88396 11.6189 3.59248 11.9132C3.30101 12.2075 3.3033 12.6824 3.5976 12.9738L4.65313 11.9081ZM3.60227 12.9785C3.89913 13.2674 4.37396 13.2609 4.66284 12.9641C4.95171 12.6672 4.94523 12.1924 4.64837 11.9035L3.60227 12.9785ZM11.0003 6.42217L10.3984 6.86956C10.5394 7.05936 10.7618 7.17151 10.9982 7.17217C11.2347 7.17283 11.4577 7.06191 11.5998 6.8729L11.0003 6.42217ZM17.3498 11.9114C17.0543 12.2017 17.05 12.6765 17.3403 12.9721C17.6305 13.2676 18.1054 13.2718 18.4009 12.9816L17.3498 11.9114ZM17.3476 11.9081L10.4726 18.7171L11.5281 19.7828L18.4031 12.9738L17.3476 11.9081ZM11.5281 18.7171L4.65313 11.9081L3.5976 12.9738L10.4726 19.7828L11.5281 18.7171ZM4.64837 11.9035C3.61437 10.8973 3.2329 9.39576 3.66128 8.01805L2.22892 7.57268C1.63292 9.48949 2.16366 11.5786 3.60227 12.9785L4.64837 11.9035ZM3.66128 8.01805C4.08965 6.64035 5.25531 5.61985 6.67756 5.3774L6.42549 3.89873C4.4467 4.23606 2.82492 5.65587 2.22892 7.57268L3.66128 8.01805ZM6.67756 5.3774C8.09981 5.13494 9.53774 5.7116 10.3984 6.86956L11.6023 5.97478C10.4049 4.3637 8.40427 3.5614 6.42549 3.89873L6.67756 5.3774ZM11.5998 6.8729C12.464 5.72351 13.8989 5.15451 15.316 5.39923L15.5712 3.92111C13.5996 3.58063 11.6033 4.37228 10.4009 5.97144L11.5998 6.8729ZM15.316 5.39923C16.7331 5.64395 17.894 6.66122 18.3227 8.0339L19.7545 7.58674C19.158 5.67693 17.5428 4.26159 15.5712 3.92111L15.316 5.39923ZM18.3227 8.0339C18.7514 9.40659 18.3757 10.9037 17.3498 11.9114L18.4009 12.9816C19.8283 11.5796 20.3509 9.49656 19.7545 7.58674L18.3227 8.0339Z"
                    fill="#00006D"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div className="mt-[100px] border border-[#DBDADE] rounded px-6 py-[30px] flex flex-col gap-[30px]">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-[15px] line-through text-[#A5A2AD] leading-6">
                  TK 10,000
                </p>
                <div className="flex items-end">
                  <p className="mb-0 text-[13px] text-[#00000B] leading-5 ">
                    From:
                  </p>
                  <p className="mb-0 text-[18px] text-[#000057] leading-6 font-semibold">
                    TK 9,000
                  </p>
                </div>
              </div>
              <div>
                <div className="flex gap-[5px] items-center">
                  <p className="mb-0 flex gap-[6px] items-center text-[15px] font-semibold leading-[22px] text-[#00000B]">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g id="material-symbols:star">
                        <path
                          id="Vector"
                          d="M5.36875 16.75L6.5875 11.4813L2.5 7.9375L7.9 7.46875L10 2.5L12.1 7.46875L17.5 7.9375L13.4125 11.4813L14.6312 16.75L10 13.9563L5.36875 16.75Z"
                          fill="#FFDC00"
                        />
                      </g>
                    </svg>
                    5
                  </p>

                  <p className="mb-0 text-[#A5A2AD] text-[13px] font-normal leading-5">
                    (4 Reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-[#DBDADE] rounded">
              <div className="px-4 py-5">Hello World</div>
              <div className="px-4 py-5">Hello World</div>
              <div className="px-4 py-5">Hello World</div>
              <div className="px-4 py-5">Hello World</div>
            </div>
            <button className="w-full bg-[#00006D] text-[#FFFFFF] rounded text-[15px] font-semibold leadin-[22px] px-5 py-[10px]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidaysDetails;
