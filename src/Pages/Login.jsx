import React, { useEffect } from 'react';
import Button from '../components/Button/Button';
import ButtonForm from '../components/ButtonForm/ButtonForm';
import Form from '../components/Form/Form';
import { FormInputeItem } from '../components/FormInputeItem/FormInputeItem';
import Header from '../components/Header/Header';
import LoginAndRegisterLayout from '../components/Layout/LoginAndRegisterLayout';
import { useNavigate } from 'react-router-dom';
import user from '../img/User.svg';
import userP from '../img/UserP.svg';
import { wait } from '@testing-library/user-event/dist/utils';
import { getUserData } from '../api/iranSafar';
import axios from 'axios';
import { QrReader } from 'react-qr-reader';

export default function Login() {
  const localPerson = {
    userName: '09389318493',
    passWord: 12345678,
    active: false,
  };
  const [value, setValue] = React.useState();
  const [data, setData] = React.useState();
  const [passWord, setPassWord] = React.useState();
  const navigate = useNavigate();
  const handelValiditions = () => {
    if (passWord == localPerson.passWord) {
      navigate('/services');
    } else {
      alert('PASS NOT CORRECt');
    }
  };
  const handelScan = (data) => {
    setData(data);
  };
  const setPass = (e) => {
    setPassWord(e.target.value);
  };
  const setUser = (e) => {
    setValue(e.target.value);
  };
  // useEffect(() => {
  //   axios
  //     .post(
  //       'http://iran-safar.com/user/api/login',
  //       {
  //         username: '09389318493',
  //         password: 12345678,
  //       },
  //       {
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )
  //     .then((ress) => console.log(ress))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <LoginAndRegisterLayout>
      <Header />
      <Button mt={`mt-[22px]`} img={user} active={true} active2={false} />
      <Form
        des={` برای ورود به حساب کاربری خود کد ملی و رمز عبور را وارد نمایید`}
        titel={`ورود`}
        formImg={userP}
      >
        <FormInputeItem
          label1={`شماره موبایل`}
          handelFunction={setUser}
          typeOpt={'text'}
        />
        <FormInputeItem
          label1={` رمز عبور`}
          handelFunction={setPass}
          typeOpt={'password'}
        />
        <ButtonForm
          text={'ورود'}
          mt={`mt-8`}
          route=""
          handelFunction={handelValiditions}
        />
      </Form>
      {/* <QrReader
        scanDelay={300}
        style={{ width: '100%' }}
        facingMode={'environment'}
        legacyMode={false}
        onScan={handelScan}
      />
      <p>{data ? data : 'hello'}</p> */}
    </LoginAndRegisterLayout>
  );
}
