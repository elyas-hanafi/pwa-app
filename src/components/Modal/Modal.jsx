import React, { useContext, useEffect } from 'react';
import { Cart } from '../Cart/Cart';
import shape from '../../img/Rectangle 37.png';
import hotel from '../../img/Hotel.png';
import Airplane from '../../img/Airplane.png';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Store } from '../../utils/Store';
// last bg-gra bg-gradient-to-tr from-[#A08DD4] to-[#6D47D3]
export default function Modal({ text, handelClick, setActive }) {
  const navigate = useNavigate();
  const { dispatch, state } = useContext(Store);

  const [id, setId] = React.useState();
  const [sendId, setSendId] = React.useState();
  const handelSetId = (e) => {
    setId(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setSendId(id);
  };
  const handelClose = (event) => {
    event.stopPropagation();
    setActive(false);
  };
  useEffect(() => {
    console.log(sendId);
    if (sendId) {
      axios
        .get(
          `https://emdad-yar.ir/webservice/webservice/national?national_code=${sendId}`
        )
        .then((ress) => {
          if (ress.data[0] == 'اطلاعاتی برای کدملی وارد شده یافت نشد') {
            // navigate('./services');
            setActive(false);
            alert('اطلاعاتی برای کدملی وارد شده یافت نشد');
          } else {
            dispatch({
              type: 'CHECK_VALIDITION',
              payload: sendId,
            });
            navigate('/profile');
            setActive(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [sendId]);

  return (
    <div
      dir="rtl"
      className="absolute flex items-center bottom-0 z-50 w-full h-full backdrop-blur-sm"
      // onClick={handelClose}
    >
      <div className="h-80  w-full rounded-2xl bg-gradient-to-t to-[#E30613] from-[#E05D64]">
        <div className="mt-11 mx-8">
          <p className="text-xs text-white ">{text}</p>
          <div className="mt-7 flex flex-col justify-center">
            {/* <div className="grid grid-cols-4">
              <Cart
                bgShape={shape}
                text={`رزرو هتل`}
                textColor="text-white"
                shapeCart={hotel}
              />
              <Cart
                bgShape={shape}
                text={`بلیط هواپیما`}
                textColor="text-white"
                shapeCart={Airplane}
              />
            </div> */}
            <form className="flex flex-col ">
              <input className="rounded-md py-2 px-5" onChange={handelSetId} />
              <button
                onClick={handelSubmit}
                className="mt-3 px-6 py-3 hover:bg-slate-200 hover:transition-all hover:text-black text-white border-2 rounded-md"
              >
                استعلام
              </button>
            </form>
            <p className="text-white cursor-pointer mt-5" onClick={handelClose}>
              خروج
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
