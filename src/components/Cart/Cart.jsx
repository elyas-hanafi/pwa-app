import React from 'react';

export const Cart = ({
  text,
  shapeCart,
  bgShape,
  textColor,
  onHandelClick,
}) => {
  return (
    <>
      <div
        dir="rtl"
        className="flex items-center flex-col "
        onClick={onHandelClick}
      >
        <div
          className="h-[68px] w-[68px] flex justify-center items-center"
          style={{
            backgroundImage: `url(${bgShape})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <img src={shapeCart} alt="" />
        </div>
        <p className={`text-[9px] w-fit  ${textColor}`}>{text}</p>
      </div>
    </>
  );
};
