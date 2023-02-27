import React, { useContext } from 'react';
import { Store } from '../../utils/Store';
export const FormInputeItem = ({ label1, label2, handelFunction, typeOpt }) => {
  return (
    <div className="mt-5">
      <div className="pb-2 flex">
        <label htmlFor="" className="text-[#434343] text-xs">
          {label1}
        </label>
      </div>
      <input
        className="w-full h-[46px] outline-none border-2 border-[#8f8f8f80] rounded-md"
        autoFocus
        onChange={handelFunction}
        type={typeOpt}
      />
    </div>
  );
};
