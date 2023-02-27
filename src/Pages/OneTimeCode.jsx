import React, { useEffect, useRef, useState } from 'react';
import ButtonForm from '../components/ButtonForm/ButtonForm';
import LoginAndRegisterLayout from '../components/Layout/LoginAndRegisterLayout';
import userP from '../img/UserP.svg';

let currentOTPIndex = 0;
export default function OneTimeCode() {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [state, setstate] = useState([1, 2, 3, 4]);
  const inputRef = useRef(null);

  const handelOnChange = (e) => {
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handelOnKeyDown = ({ key }, index) => {
    currentOTPIndex = index;
    if (key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);
  return (
    <LoginAndRegisterLayout activeTopImg={true}>
      <div dir="rtl" className="w-[300px] mx-auto">
        <div className=" flex">
          <img src={userP} alt="" />
          <p className="mr-[10px] font-bold text-sm text-[#6D47D3]">
            ارسال کد یکبار مصرف
          </p>
        </div>
        <div className="mt-14">
          <p className="text-xs text-[#808285]">
            کد ارسال شده به شماره موبایل 091212345698 را وارد نمایید
          </p>
        </div>
        <form dir="ltr" className="flex justify-between mt-4">
          {otp.map((_, index) => {
            return (
              <input
                ref={index === activeOTPIndex ? inputRef : null}
                key={index}
                onChange={handelOnChange}
                onKeyDown={(e) => handelOnKeyDown(e, index)}
                type="text"
                value={otp[index]}
                className="w-16 h-12 focus:border-gray-700 focus:text-gray-700 outline-none border-2  border-[#8f8f8f80] rounded-md"
              />
            );
          })}
        </form>
        <div className="text-sm mt-3 flex justify-between text-[#6D47D3]">
          <p>اعتبار باقیمانده کد ارسال شده</p>
          <p>01:59</p>
        </div>
        <ButtonForm text={`ثبت نام`} mt={`mt-[140px]`} />
      </div>
    </LoginAndRegisterLayout>
  );
}
