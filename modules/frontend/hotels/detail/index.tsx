import React from "react";

import { ConfigProvider, Tabs, TabsProps } from "antd";

import { FiChevronDown, FiChevronUp, FiHeart } from "react-icons/fi";
import AboutHotel from "./@componant/AboutHotel";
import HotelRoomCart from "./@componant/Rooms";
import Nearby from "./@componant/Nearby";
import Facilities from "./@componant/Facilities";
import Policy from "./@componant/Policy";
import Reviews from "./@componant/Reviews";

const HotelDetails = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "About Hotels",
      children: (
        <>
          <AboutHotel />
          <HotelRoomCart />
          <Nearby />
          <Facilities />
          <Policy />
          <Reviews />
        </>
      ),
    },
    {
      key: "2",
      label: "Rooms",
      children: <HotelRoomCart />,
    },
    {
      key: "3",
      label: "What's Nearby",
      children: "hello world",
    },
    {
      key: "4",
      label: "Facilities",
      children: "hello world",
    },
    {
      key: "5",
      label: "Policy",
      children: "hello world",
    },
  ];
  return (
    <section>
      <div className="flex gap-1 items-center text-[#A5A2AD] w-[1210px] mx-auto px-[1.25rem] mt-[40px]">
        <p className="text-[15px] font-normal leading-8">Home</p>
        <p>
          <svg
            className="h-4 w-4 opacity-50 "
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="2" fill="#000000" />
          </svg>
        </p>
        <p className="text-[15px] font-normal leading-8">India</p>
      </div>
      <div className="container flex gap-[30px]">
        <div className="container-1 w-[770px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-0 text-[32px] font-semibold leading-[44px]">
                  Hotel Sea Moon
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
                      </svg>{" "}
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
                      Hotel Sea Moon, Dolphin Moar, Kolatoli, Coxs Bazar,
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex gap-5 items-center w-[170px]">
                <svg
                  className="h-[38px] w-[38px] border border-gray-200 px-[10px] py-[10px] rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g id="live-photo">
                    <circle
                      id="Oval"
                      cx="13.9997"
                      cy="14"
                      r="1.16667"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      id="Oval_2"
                      cx="14.0003"
                      cy="14"
                      r="5.83333"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path"
                      d="M18.5501 23.4617V23.4733"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_2"
                      d="M22.2132 20.545V20.5567"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_3"
                      d="M24.2318 16.3334V16.345"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_4"
                      d="M24.2318 11.6666V11.6783"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_5"
                      d="M22.2132 7.45506V7.46673"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_6"
                      d="M18.5501 4.53832V4.54998"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_7"
                      d="M14.0003 3.49999V3.51165"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_8"
                      d="M9.44954 4.53832V4.54998"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_9"
                      d="M5.78646 7.45506V7.46673"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_10"
                      d="M3.7679 11.6666V11.6783"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_11"
                      d="M3.7679 16.3334V16.345"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_12"
                      d="M5.78646 20.545V20.5567"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_13"
                      d="M9.44954 23.4617V23.4733"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_14"
                      d="M14.0003 24.5V24.5117"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    24 Hours
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Security
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <svg
                  className="h-[38px] w-[38px] border border-gray-200 px-[10px] py-[10px] rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g id="snowflake">
                    <path
                      id="Shape"
                      d="M12.0024 3.99589C11.6319 3.81064 11.1814 3.96081 10.9962 4.3313C10.8109 4.70178 10.9611 5.15229 11.3316 5.33753L12.0024 3.99589ZM14.0003 5.83337L13.6649 6.50419C13.8761 6.60977 14.1246 6.60977 14.3357 6.50419L14.0003 5.83337ZM16.6691 5.33753C17.0396 5.15229 17.1897 4.70178 17.0045 4.3313C16.8192 3.96081 16.3687 3.81064 15.9982 3.99589L16.6691 5.33753ZM14.7503 2.33337C14.7503 1.91916 14.4145 1.58337 14.0003 1.58337C13.5861 1.58337 13.2503 1.91916 13.2503 2.33337H14.7503ZM14.0003 9.91671H13.2503C13.2503 10.1855 13.3941 10.4337 13.6273 10.5674L14.0003 9.91671ZM17.1273 12.574C17.4866 12.78 17.9449 12.6558 18.151 12.2964C18.357 11.9371 18.2327 11.4788 17.8734 11.2727L17.1273 12.574ZM11.3316 5.33753L13.6649 6.50419L14.3357 5.16255L12.0024 3.99589L11.3316 5.33753ZM14.3357 6.50419L16.6691 5.33753L15.9982 3.99589L13.6649 5.16255L14.3357 6.50419ZM13.2503 2.33337V9.91671H14.7503V2.33337H13.2503ZM13.6273 10.5674L17.1273 12.574L17.8734 11.2727L14.3734 9.26606L13.6273 10.5674Z"
                      fill="#A5A2AD"
                    />
                    <path
                      id="Shape_2"
                      d="M21.6654 7.26776C21.6405 6.85429 21.2852 6.53923 20.8718 6.56405C20.4583 6.58886 20.1432 6.94417 20.1681 7.35764L21.6654 7.26776ZM21.073 9.91676L20.3244 9.9617C20.3385 10.1973 20.4628 10.4126 20.6598 10.5426L21.073 9.91676ZM22.8368 11.98C23.1825 12.2083 23.6477 12.1131 23.8759 11.7674C24.1042 11.4217 24.009 10.9565 23.6633 10.7283L22.8368 11.98ZM24.4791 8.81614C24.8378 8.60903 24.9607 8.15034 24.7536 7.79162C24.5465 7.4329 24.0878 7.31 23.7291 7.5171L24.4791 8.81614ZM17.5367 11.9583L17.1617 11.3088C16.929 11.4431 16.7859 11.6918 16.7868 11.9606L17.5367 11.9583ZM16.7989 15.995C16.8002 16.4092 17.137 16.744 17.5512 16.7427C17.9654 16.7415 18.3002 16.4047 18.2989 15.9904L16.7989 15.995ZM20.1681 7.35764L20.3244 9.9617L21.8217 9.87182L21.6654 7.26776L20.1681 7.35764ZM20.6598 10.5426L22.8368 11.98L23.6633 10.7283L21.4863 9.29088L20.6598 10.5426ZM23.7291 7.5171L17.1617 11.3088L17.9117 12.6078L24.4791 8.81614L23.7291 7.5171ZM16.7868 11.9606L16.7989 15.995L18.2989 15.9904L18.2867 11.956L16.7868 11.9606Z"
                      fill="#A5A2AD"
                    />
                    <path
                      id="Shape_3"
                      d="M23.6631 17.2719C24.0087 17.0436 24.1039 16.5784 23.8757 16.2327C23.6475 15.8871 23.1823 15.7919 22.8366 16.0201L23.6631 17.2719ZM21.0728 18.0834L20.6596 17.4575C20.4626 17.5876 20.3383 17.8028 20.3242 18.0384L21.0728 18.0834ZM20.1679 20.6425C20.143 21.056 20.4581 21.4113 20.8716 21.4361C21.285 21.4609 21.6403 21.1458 21.6652 20.7324L20.1679 20.6425ZM23.7289 20.4828C24.0876 20.6899 24.5463 20.567 24.7534 20.2082C24.9605 19.8495 24.8376 19.3908 24.4789 19.1837L23.7289 20.4828ZM17.5365 16.0416L17.9115 15.3921C17.6788 15.2577 17.3919 15.2581 17.1596 15.3932L17.5365 16.0416ZM13.6718 17.4209C13.3137 17.6291 13.1921 18.0882 13.4003 18.4463C13.6085 18.8044 14.0676 18.9259 14.4257 18.7177L13.6718 17.4209ZM22.8366 16.0201L20.6596 17.4575L21.4861 18.7093L23.6631 17.2719L22.8366 16.0201ZM20.3242 18.0384L20.1679 20.6425L21.6652 20.7324L21.8215 18.1283L20.3242 18.0384ZM24.4789 19.1837L17.9115 15.3921L17.1615 16.6911L23.7289 20.4828L24.4789 19.1837ZM17.1596 15.3932L13.6718 17.4209L14.4257 18.7177L17.9135 16.69L17.1596 15.3932Z"
                      fill="#A5A2AD"
                    />
                    <path
                      id="Shape_4"
                      d="M15.9976 24.0041C16.3681 24.1894 16.8186 24.0392 17.0038 23.6687C17.1891 23.2982 17.0389 22.8477 16.6684 22.6625L15.9976 24.0041ZM13.9997 22.1666L14.3351 21.4958C14.1239 21.3902 13.8754 21.3902 13.6643 21.4958L13.9997 22.1666ZM11.3309 22.6625C10.9604 22.8477 10.8103 23.2982 10.9955 23.6687C11.1808 24.0392 11.6313 24.1894 12.0018 24.0041L11.3309 22.6625ZM13.2497 25.6666C13.2497 26.0808 13.5855 26.4166 13.9997 26.4166C14.4139 26.4166 14.7497 26.0808 14.7497 25.6666H13.2497ZM13.9997 18.0833H14.7497C14.7497 17.8145 14.6059 17.5663 14.3727 17.4326L13.9997 18.0833ZM10.8727 15.426C10.5134 15.22 10.055 15.3442 9.84903 15.7036C9.643 16.0629 9.76729 16.5213 10.1266 16.7273L10.8727 15.426ZM16.6684 22.6625L14.3351 21.4958L13.6643 22.8374L15.9976 24.0041L16.6684 22.6625ZM13.6643 21.4958L11.3309 22.6625L12.0018 24.0041L14.3351 22.8374L13.6643 21.4958ZM14.7497 25.6666V18.0833H13.2497V25.6666H14.7497ZM14.3727 17.4326L10.8727 15.426L10.1266 16.7273L13.6266 18.7339L14.3727 17.4326Z"
                      fill="#A5A2AD"
                    />
                    <path
                      id="Shape_5"
                      d="M6.33464 20.7322C6.35946 21.1457 6.71476 21.4608 7.12823 21.436C7.5417 21.4111 7.85676 21.0558 7.83194 20.6424L6.33464 20.7322ZM6.92699 18.0832L7.67564 18.0383C7.66149 17.8027 7.53723 17.5874 7.34023 17.4574L6.92699 18.0832ZM5.1632 16.02C4.81753 15.7917 4.3523 15.8869 4.12407 16.2326C3.89585 16.5783 3.99105 17.0435 4.33671 17.2717L5.1632 16.02ZM3.52089 19.1839C3.16217 19.391 3.03927 19.8497 3.24637 20.2084C3.45348 20.5671 3.91217 20.69 4.27089 20.4829L3.52089 19.1839ZM10.4633 16.0417L10.8383 16.6912C11.071 16.5569 11.2141 16.3082 11.2132 16.0394L10.4633 16.0417ZM11.2011 12.005C11.1998 11.5908 10.863 11.256 10.4488 11.2573C10.0346 11.2585 9.69983 11.5953 9.70108 12.0096L11.2011 12.005ZM7.83194 20.6424L7.67564 18.0383L6.17833 18.1282L6.33464 20.7322L7.83194 20.6424ZM7.34023 17.4574L5.1632 16.02L4.33671 17.2717L6.51374 18.7091L7.34023 17.4574ZM4.27089 20.4829L10.8383 16.6912L10.0883 15.3922L3.52089 19.1839L4.27089 20.4829ZM11.2132 16.0394L11.2011 12.005L9.70108 12.0096L9.71325 16.044L11.2132 16.0394Z"
                      fill="#A5A2AD"
                    />
                    <path
                      id="Shape_6"
                      d="M4.33692 10.7281C3.99125 10.9564 3.89605 11.4216 4.12428 11.7673C4.35251 12.1129 4.81774 12.2081 5.16341 11.9799L4.33692 10.7281ZM6.92719 9.91662L7.34043 10.5425C7.53744 10.4124 7.6617 10.1972 7.67585 9.96156L6.92719 9.91662ZM7.83215 7.3575C7.85697 6.94403 7.5419 6.58873 7.12843 6.56391C6.71496 6.53909 6.35966 6.85416 6.33484 7.26762L7.83215 7.3575ZM4.2711 7.51724C3.91238 7.31013 3.45369 7.43304 3.24658 7.79176C3.03947 8.15048 3.16238 8.60917 3.5211 8.81628L4.2711 7.51724ZM10.4635 11.9584L10.0885 12.6079C10.3212 12.7423 10.6081 12.7419 10.8404 12.6068L10.4635 11.9584ZM14.3282 10.5791C14.6863 10.3709 14.8079 9.9118 14.5997 9.55371C14.3915 9.19562 13.9324 9.0741 13.5743 9.28228L14.3282 10.5791ZM5.16341 11.9799L7.34043 10.5425L6.51395 9.29074L4.33692 10.7281L5.16341 11.9799ZM7.67585 9.96156L7.83215 7.3575L6.33484 7.26762L6.17854 9.87168L7.67585 9.96156ZM3.5211 8.81628L10.0885 12.6079L10.8385 11.3089L4.2711 7.51724L3.5211 8.81628ZM10.8404 12.6068L14.3282 10.5791L13.5743 9.28228L10.0865 11.31L10.8404 12.6068Z"
                      fill="#A5A2AD"
                    />
                  </g>
                </svg>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    AC
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Facility
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <svg
                  className="h-[38px] w-[38px] border border-gray-200 px-[10px] py-[10px] rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g id="coffee">
                    <path
                      id="Path"
                      d="M3.5 16.3333C4.46833 17.0823 5.92317 17.5198 7.58333 17.5C9.2435 17.5198 10.6983 17.0823 11.6667 16.3333C12.635 15.5843 14.0898 15.1468 15.75 15.1667C17.4102 15.1468 18.865 15.5843 19.8333 16.3333"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_2"
                      d="M9.3333 3.5C8.58371 4.03804 8.14731 4.91084 8.16663 5.83333C8.14731 6.75583 8.58371 7.62863 9.3333 8.16667"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_3"
                      d="M14.0003 3.5C13.2507 4.03804 12.8143 4.91084 12.8336 5.83333C12.8143 6.75583 13.2507 7.62863 14.0003 8.16667"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 11.6666H19.8333V17.5C19.8333 21.366 16.6993 24.5 12.8333 24.5H10.5C6.63401 24.5 3.5 21.366 3.5 17.5V11.6666Z"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Path_5"
                      d="M19.5371 19.5137C20.9707 20.1718 22.6675 19.7896 23.6804 18.5803C24.6934 17.371 24.7722 15.6335 23.8729 14.3375C22.9736 13.0415 21.3184 12.5072 19.8311 13.0328"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Coffee/Tea
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    in Lobby
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <svg
                  className="h-[38px] w-[38px] border border-gray-200 px-[10px] py-[10px] rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <g id="car">
                    <ellipse
                      id="Oval"
                      cx="8.16634"
                      cy="19.8333"
                      rx="2.33333"
                      ry="2.33333"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      id="Oval_2"
                      cx="19.8333"
                      cy="19.8333"
                      r="2.33333"
                      stroke="#A5A2AD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Shape"
                      d="M5.83333 20.5833C6.24755 20.5833 6.58333 20.2475 6.58333 19.8333C6.58333 19.4191 6.24755 19.0833 5.83333 19.0833V20.5833ZM3.5 19.8333H2.75C2.75 20.2475 3.08579 20.5833 3.5 20.5833V19.8333ZM3.5 12.8333L2.80364 12.5548C2.76821 12.6434 2.75 12.7379 2.75 12.8333H3.5ZM5.83333 7V6.25C5.52665 6.25 5.25087 6.43671 5.13698 6.72146L5.83333 7ZM16.3333 7L16.919 6.53148C16.7767 6.35357 16.5612 6.25 16.3333 6.25V7ZM21 12.8333L20.4143 13.3019C20.5567 13.4798 20.7722 13.5833 21 13.5833V12.8333ZM24.5 19.8333V20.5833C24.9142 20.5833 25.25 20.2475 25.25 19.8333H24.5ZM22.1667 19.0833C21.7525 19.0833 21.4167 19.4191 21.4167 19.8333C21.4167 20.2475 21.7525 20.5833 22.1667 20.5833V19.0833ZM17.5 20.5833C17.9142 20.5833 18.25 20.2475 18.25 19.8333C18.25 19.4191 17.9142 19.0833 17.5 19.0833V20.5833ZM10.5 19.0833C10.0858 19.0833 9.75 19.4191 9.75 19.8333C9.75 20.2475 10.0858 20.5833 10.5 20.5833V19.0833ZM3.5 12.0833C3.08579 12.0833 2.75 12.4191 2.75 12.8333C2.75 13.2475 3.08579 13.5833 3.5 13.5833V12.0833ZM21 13.5833C21.4142 13.5833 21.75 13.2475 21.75 12.8333C21.75 12.4191 21.4142 12.0833 21 12.0833V13.5833ZM13.25 12.8333C13.25 13.2475 13.5858 13.5833 14 13.5833C14.4142 13.5833 14.75 13.2475 14.75 12.8333H13.25ZM14.75 7C14.75 6.58579 14.4142 6.25 14 6.25C13.5858 6.25 13.25 6.58579 13.25 7H14.75ZM5.83333 19.0833H3.5V20.5833H5.83333V19.0833ZM4.25 19.8333V12.8333H2.75V19.8333H4.25ZM4.19636 13.1119L6.52969 7.27854L5.13698 6.72146L2.80364 12.5548L4.19636 13.1119ZM5.83333 7.75H16.3333V6.25H5.83333V7.75ZM15.7477 7.46852L20.4143 13.3019L21.5857 12.3648L16.919 6.53148L15.7477 7.46852ZM21 13.5833H22.1667V12.0833H21V13.5833ZM22.1667 13.5833C23.0411 13.5833 23.75 14.2922 23.75 15.1667H25.25C25.25 13.4638 23.8695 12.0833 22.1667 12.0833V13.5833ZM23.75 15.1667V19.8333H25.25V15.1667H23.75ZM24.5 19.0833H22.1667V20.5833H24.5V19.0833ZM17.5 19.0833H10.5V20.5833H17.5V19.0833ZM3.5 13.5833H21V12.0833H3.5V13.5833ZM14.75 12.8333V7H13.25V12.8333H14.75Z"
                      fill="#A5A2AD"
                    />
                  </g>
                </svg>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Shuttle
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Transport
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
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00006D",
                  colorText: "#5D586C",
                  fontSize: "15px",
                  lineHeight: "22px",
                  fontWeightStrong: "400",
                },
              }}
            >
              <Tabs defaultActiveKey="1" items={items} />
            </ConfigProvider>
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
          <div className="mt-[65px]">
            <div className="bg-[#00006D] text-white text-[22px] font-bold leading-[30px] px-5 py-4 rounded-t">
              Pricing Summary
            </div>
            <div className="w-[370px] h-[450px] flex flex-col justify-between items-center px-[20px] py-[20px] pt-0 border border-[#DBDADE]">
              <div></div>
              <p className="mb-0 text-[15px] text-[#000057] leading-6 font-normal ">
                Add reservation to Continue
              </p>
              <button className="w-[330px] text-[17px] leading-[22px] font-[500] text-white bg-[#6666A7] flex justify-center items-center px-[26px] py-[13px] rounded">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
