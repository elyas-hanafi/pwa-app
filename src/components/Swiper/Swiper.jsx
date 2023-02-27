import { Swiper } from 'swiper/react';
// import { Navigation } from 'swiper';
import SwiperCore, { Pagination, Navigation, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const SwiperSlider = ({ children, preview, spaceBetween, paginations }) => {
  return (
    <Swiper
      modules={[Pagination]}
      // grabCursor={true}
      spaceBetween={spaceBetween}
      slidesPerView={preview}
      // pagination={{ clickable: true }}
      pagination={paginations}
      // navigation
      // pagination={{ clickable: true }}
      // autoplay={{delay: 3000}}
    >
      {children}
    </Swiper>
  );
};

export default SwiperSlider;
