import React from 'react';
import { ReactComponent as Edit } from '../../img/Edit Square.svg';
import { ReactComponent as Arrow } from '../../img/Arrow - Left 2.svg';

export default function MoreInfoCard() {
  return (
    <div className="w-[300px] m-auto mt-6 text-xs">
      <div className="cart h-14 w-full bg-white rounded-md shadow-md ">
        <div className="contetnt text-white h-full mx-4 flex items-center justify-between">
          <div>
            <Arrow />
          </div>
          <div className="flex items-center">
            <div className="text-[#434343] px-2">تکمیل و ویرایش پروفایل</div>
            <div>
              <Edit
                stroke="#179E66"
                fill="#179E66"
                width={'12'}
                height={'12'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-44 bg-white rounded-md mt-3 shadow-md">
        <div className="contetnt text-white mx-4 flex h-14 items-center justify-between">
          <div>
            <Arrow />
          </div>
          <div className="flex items-center">
            <div className="text-[#434343] px-2">تکمیل و ویرایش پروفایل</div>
            <div>
              <Edit
                stroke="#179E66"
                fill="#179E66"
                width={'12'}
                height={'12'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
