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
        className={` flex ${mt} text-white items-center justify-center w-full h-[38px] rounded bg-gradient-to-r to-[#6D47D3] from-[#A08DD4]`}
        onClick={handelFunction}
      >
        {text}
      </button>
      {/* </Link> */}
    </>
  );
}
