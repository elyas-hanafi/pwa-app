import React from 'react';
import qrCode from '../../img/Layer 2.png';
// import chat from '../../img/Chat.svg';
import { ReactComponent as Chat } from '../../img/Chat.svg';
import { ReactComponent as Profile } from '../../img/Profile.svg';
import { ReactComponent as Home } from '../../img/Home.svg';
import { ReactComponent as Category } from '../../img/Category.svg';
import Union from '../../img/Union.png';
import Modal from '../Modal/Modal';

export default function MainFooter() {
  const [ModalTitel, setModalTitel] = React.useState();
  const [Active, setActive] = React.useState(false);
  const handelConsole = (name) => {
    // setModalTitel(name);
    setActive(!Active);
  };
  return (
    <>
      <div
        className="grid w-full mx-auto grid-cols-3 text-black mt-16"
        style={{
          backgroundImage: `url(${Union})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex ml-8 pt-7">
          <div className="flex pr-6 flex-col justify-center items-center">
            <div>
              <Chat fill="white" stroke="#C6C6C6" />
            </div>
            <div className="text-[9px] text-slate-500">گفتگو</div>
          </div>

          <a href="/profile">
            <div className="flex flex-col justify-center items-center">
              <div>
                <Profile fill="white" stroke="#C6C6C6" />
              </div>
              <div className="text-[9px] text-slate-500">پروفایل</div>
            </div>
          </a>
        </div>

        <div className="w-[68px] ml-7 text-xs text-white h-[68px]  rounded-full bg-gradient-to-t from-[#FFFFFF] to-[#D0CAE2] flex items-center justify-center">
          <button onClick={handelConsole}>
            <div className="w-[56px] flex flex-col items-center justify-center h-[56px] rounded-full bg-[#ff0202]">
              <img src={qrCode} alt="" />
              <p> استعلام</p>
            </div>
          </button>
        </div>

        <div className="flex  pt-7">
          <div className="flex pr-5 flex-col justify-center items-center ">
            <div>
              <Category stroke="#C6C6C6" />
            </div>
            <div className="text-[9px] text-slate-500">سرویس ها</div>
          </div>

          <a href="/services">
            <div className="flex flex-col justify-center items-center">
              <div>
                <Home fill="white" stroke="#C6C6C6" />
              </div>
              <div className="text-[9px] text-slate-500">صفحه اصلی</div>
            </div>
          </a>
        </div>
      </div>
      {Active && <Modal setActive={setActive} handelClick={handelConsole} />}
    </>
  );
}
