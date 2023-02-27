import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ mt, img, active, active2 }) {
  // const [Active, setActive] = useState(false);
  return (
    <div
      dir="rtl"
      className={`w-[203px] text-sm flex justify-around items-center h-[38px] mx-auto ${mt} rounded-md border border-[#8F8F8F]`}
    >
      <div
        className={`  ${
          active
            ? 'w-[110px] h-[30px] rounded-md bg-[#6D47D3] text-white'
            : 'text-slate-500'
        }`}
      >
        <div className="flex items-center justify-center">
          <div className="mt-[6px] ml-[5px] ">
            <img src={img} alt="" />
          </div>
          <div className="">ورود</div>
        </div>
      </div>
      <div
        className={`text-center  ${
          active2
            ? 'w-[110px] h-[30px] rounded-md bg-[#6D47D3] text-white'
            : 'text-slate-500'
        }`}
      >
        <Link to={'/register'}>
          <button className="pt-[-1px]">ثبت نام</button>
        </Link>
      </div>
    </div>
  );
}
