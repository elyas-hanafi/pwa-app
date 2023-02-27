import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperSlider from '../Swiper/Swiper';

export default function MainBanner() {
  return (
    <div className="flex justify-center h-32 items-center mb-8">
      <SwiperSlider preview={1} spaceBetween={-90}>
        <SwiperSlide>
          <div className=" w-[250px] h-[80px] mx-auto text-center flex justify-center">
            <div className="relative rounded-md bg-gradient-to-r from-[#F5AB35]/[.65] to-[#F5AB35]">
              <div className="mr-8 w-full pt-4">
                <p className="text-xs text-[#414042]">
                  بهترین و به صرفه ترین نرخ قیمت بلیط هواپیما
                </p>
                <p className="text-xs text-[#f5f5f5] font-bold mt-2">
                  ویژه فرهنگیان
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[250px] h-[80px] mx-auto text-center flex justify-center">
            <div className="relative rounded-md bg-gradient-to-r from-[#F5AB35]/[.65] to-[#F5AB35]">
              <div className="mr-8 w-full pt-4">
                <p className="text-xs text-[#414042]">
                  بهترین و به صرفه ترین نرخ قیمت بلیط هواپیما
                </p>
                <p className="text-xs text-[#f5f5f5] font-bold mt-2">
                  ویژه فرهنگیان
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[250px] h-[80px] mx-auto text-center flex justify-center">
            <div className="relative rounded-md bg-gradient-to-r from-[#F5AB35]/[.65] to-[#F5AB35]">
              <div className="mr-8 w-full pt-4">
                <p className="text-xs text-[#414042]">
                  بهترین و به صرفه ترین نرخ قیمت بلیط هواپیما
                </p>
                <p className="text-xs text-[#f5f5f5] font-bold mt-2">
                  ویژه فرهنگیان
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </SwiperSlider>
    </div>
  );
}
