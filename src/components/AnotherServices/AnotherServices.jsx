import React from 'react';
import { Cart } from '../Cart/Cart';
import reserv from '../../img/XMLID_837_.png';
import banner from '../../img/banner.png';
import shape from '../../img/Rectangle 37.png';
import bank from '../../img/XMLID_730_.png';
import SwiperSlider from '../Swiper/Swiper';
import { SwiperSlide } from 'swiper/react';
import Modal from '../Modal/Modal';
const cartData = [
  { id: 1, text: ' رزرواسیون ', shapeCart: reserv },
  { id: 2, text: 'بانکداری باز', shapeCart: bank },
  { id: 3, text: ' رزرواسیون ', shapeCart: reserv },
  { id: 4, text: ' بانکداری باز ', shapeCart: bank },
  { id: 5, text: ' رزرواسیون ', shapeCart: reserv },
  { id: 6, text: ' بانکداری باز ', shapeCart: bank },
  { id: 7, text: ' رزرواسیون ', shapeCart: reserv },
];
export default function AnotherServices() {
  const [ModalTitel, setModalTitel] = React.useState();
  const [Active, setActive] = React.useState(false);
  const handelConsole = (name) => {
    setModalTitel(name);
    setActive(!Active);
  };
  return (
    <>
      <div
        dir="rtl"
        className="h-[225px]  flex items-center justify-center bg-gradient-to-tr to-[#E30613] from-[#E05D64]"
      >
        {/* <div>
          <p className="text-xs text-white pt-5 pr-9">دیگر سرویس ها</p>
          <div className="cart mt-5">
            <SwiperSlider preview={4} spaceBetween={-50}>
              {cartData.map((data) => (
                <SwiperSlide key={data.id}>
                  <Cart
                    text={data.text}
                    shapeCart={data.shapeCart}
                    bgShape={shape}
                    textColor="text-white"
                    onHandelClick={() => handelConsole(data.text)}
                  />
                </SwiperSlide>
              ))}
            </SwiperSlider>
          </div>
        </div> */}
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
      {/* {Active && <Modal text={ModalTitel} handelClick={handelConsole} />} */}
    </>
  );
}
