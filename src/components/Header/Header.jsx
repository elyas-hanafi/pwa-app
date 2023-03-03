import React from 'react';
import './custom.css';
import headerImg from '../../img/OrangeHeader/Rectangle 24.svg';
// import headerImgTwo from '../../img/BlueHeader/Rectangle 24.svg';
import headerRed from '../../img/redRec.png';
import headerItem from '../../img/familyHelal.png';
import headerItemTwo from '../../img/BlueHeader/Group.png';
import headerItemThree from '../../img/BlueHeader/Group-1.png';
import SwiperSlider from '../Swiper/Swiper';
import { SwiperSlide } from 'swiper/react';

const headerItemsArrey = [
  {
    id: 1,
    HeaderImg: headerRed,
    HeaderItem: [headerItem],
  },
  {
    id: 2,
    HeaderImg: headerRed,
    HeaderItem: [headerItem],
  },
];

export default function Header() {
  return (
    <>
      <SwiperSlider paginations={true}>
        {headerItemsArrey.map((item) => (
          <>
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-[255px]">
                <img src={item.HeaderImg} alt="Header" className="absolute" />
                <div
                  className={`${
                    item.HeaderItem.length > 1 ? 'lastChild' : ''
                  } absolute fristChild flex w-full top-[20%] justify-center`}
                >
                  {item.HeaderItem.map((items) => (
                    <div>
                      <img src={items} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </SwiperSlider>
    </>
  );
}
