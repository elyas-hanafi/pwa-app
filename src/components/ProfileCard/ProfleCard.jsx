import React from 'react';
import { ReactComponent as Edit } from '../../img/Edit.svg';
import userBoldP from '../../img/UserBoldP.png';
export default function ProfleCard() {
  return (
    <div dir="rtl" className="w-full">
      <div className="w-[300px] h-28 m-auto rounded-xl bg-white shadow-md mt-[-10px]">
        <div className="content flex justify-evenly pt-7">
          <div className="relative w-14 h-14 bg-[#cf0000] rounded-full flex justify-center items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-t from-[#FFFFFF] to-[#e2caca] rounded-full">
              <img src={userBoldP} alt="" />
            </div>
            <div className=" absolute right-[-10%] top-[55%] w-5 h-5 bg-[#cf0000] rounded-full flex justify-center items-center">
              <div className="w-4 h-4 flex justify-center items-center bg-gradient-to-t from-[#FFFFFF] to-[#e2caca] rounded-full">
                <Edit width={'12'} height={'12'} />
              </div>
            </div>
          </div>
          <div className="text-xs text-[#727272]">
            <p className="">سیده نجمه علوی</p>
            <p className="text-bold mt-1">09123456789</p>
          </div>
        </div>
      </div>
      <ProfileRatingCard />
    </div>
  );
}

const ProfileRatingCard = () => {
  return (
    <>
      <div className="h-9 w-36 flex justify-center items-center text-white bg-[#ee0c0c] mx-auto rounded-md mt-[-3%]">
        <p className="text-xs">مجموع امتیازات :1500</p>
      </div>
    </>
  );
};
