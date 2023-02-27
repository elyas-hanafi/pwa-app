import React from 'react';
import Button from '../components/Button/Button';
import ButtonForm from '../components/ButtonForm/ButtonForm';
import Form from '../components/Form/Form';
import { FormInputeItem } from '../components/FormInputeItem/FormInputeItem';
import LoginAndRegisterLayout from '../components/Layout/LoginAndRegisterLayout';
import lockImg from '../img/Lock.svg';

export default function Register() {
  return (
    <>
      <LoginAndRegisterLayout activeTopImg={true}>
        <Button
          mt="mt-[-50px]"
          active={false}
          active2={true}
          route={`OneTimeCode`}
        />
        <Form
          titel={`ثبت نام`}
          des={`برای ورود به حساب کاربری خود کد ملی و رمز عبور را وارد نمایید`}
          formImg={lockImg}
        >
          <FormInputeItem label1={`کد ملی`} />
          <FormInputeItem label1={`شماره موبایل`} />
          <FormInputeItem label1={`نام `} />
          <FormInputeItem label1={`نام خانوادگی`} />
          <FormInputeItem label1={`نام کاربزی`} />
          <ButtonForm
            text={`ارسال کد یکبار مصرف`}
            mt={`mt-8`}
            route="OneTimeCode"
          />
        </Form>
      </LoginAndRegisterLayout>
    </>
  );
}
