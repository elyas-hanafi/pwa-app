import axios from 'axios';
import React, { useContext } from 'react';
import { ReactComponent as Edit } from '../../img/Edit.svg';
import userBoldP from '../../img/UserBoldP.png';
import { Store } from '../../utils/Store';
export default function ProfleCard() {
  const [user, setUser] = React.useState([{ id: 50522 }]);
  const { dispatch, state } = useContext(Store);

  React.useEffect(() => {
    axios
      .get(
        `https://emdad-yar.ir/webservice/webservice/national?national_code=${state.userId}`
      )
      .then((ress) => {
        setUser(ress.data);
        console.log(ress);
      })
      .catch((err) => console.log(err));
  }, [state.userId]);
  return (
    <div dir="rtl" className="w-full">
      <div className="w-[300px] h-28 m-auto rounded-xl bg-white shadow-md mt-[-10px]">
        <div className="content flex justify-evenly pt-7">
          {!state.userId ? (
            <div className="text-sm">
              اول از قسمت اسعلام کد ملی خود را وارد کرده
            </div>
          ) : !user ? (
            <div className="relative w-14 h-14 bg-[#cf0000] rounded-full flex justify-center items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-t from-[#FFFFFF] to-[#e2caca] rounded-full">
                <img
                  src={user ? user[1] : userBoldP}
                  alt=""
                  className="rounded-full px-3"
                />
              </div>
              <div className=" absolute right-[-10%] top-[55%] w-5 h-5 bg-[#cf0000] rounded-full flex justify-center items-center">
                <div className="w-4 h-4 flex justify-center items-center bg-gradient-to-t from-[#FFFFFF] to-[#e2caca] rounded-full">
                  <Edit width={'12'} height={'12'} />
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-full w-16 h-16">
              <img
                src={user ? user[1] : userBoldP}
                alt=""
                className="rounded-full px-3"
              />
            </div>
          )}
          <div className="text-xs text-[#727272]">
            <div className="flex">
              <p className="">{user ? user[0].name : 'لطفا صبر نمایید'}</p>
              <p className="px-2">
                {user ? user[0].family : 'لطفا صبر نمایید'}
              </p>
            </div>
            <p className="text-bold mt-1">
              {user !== 50522 ? state.userId : 'null'}
            </p>
          </div>
        </div>
      </div>
      <ProfileRatingCard user={user} />
    </div>
  );
}

const ProfileRatingCard = ({ user }) => {
  return (
    <>
      {user[0].id == 50522 ? (
        <div className="h-9 w-36 flex justify-center items-center text-white bg-[#ee0c0c] mx-auto rounded-md mt-[-3%]">
          <p className="text-xs">صبر کنید یا دوباره امتحان کنید</p>
        </div>
      ) : (
        <div className="h-9 w-36 flex justify-center items-center text-white bg-[#ee0c0c] mx-auto rounded-md mt-[-3%]">
          <p className="text-xs">مجموع امتیازات :1500</p>
        </div>
      )}
    </>
  );
};
