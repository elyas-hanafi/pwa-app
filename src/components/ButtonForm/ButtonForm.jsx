import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonForm({ text, mt, route, handelFunction }) {
  const handelOnclick = () => {
    console.log('Hello');
  };
  return (
    <>
      {/* <Link to={`/${route}`}> */}
      <button
        className={` flex ${mt} text-white items-center justify-center w-full h-[38px] rounded bg-gradient-to-t to-[#E30613] from-[#E05D64]`}
        onClick={handelFunction}
      >
        {text}
      </button>
      {/* </Link> */}
    </>
  );
}
