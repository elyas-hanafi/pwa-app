import React from 'react';
import topImg from '../../img/TopImg.svg';
export default function TopImg() {
  return (
    <div className="relative z-[3000] top-0 right-0 w-full h-[122px]">
      <img src={topImg} alt="" className="right-0 absolute" />
    </div>
  );
}
