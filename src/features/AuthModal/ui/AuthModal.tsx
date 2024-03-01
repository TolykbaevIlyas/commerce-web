'use client'
import React, { useState } from 'react';
import { ILoginModal } from '../types';
import s from '../assets/css/style.module.css';
import { Button } from '@/shared/ui/Button';
import Image from 'next/image';
import cancel from '../assets/img/Cancel.svg'
import { Input } from '@/shared/ui/Input';
import Login from './Login';
import Register from './Register';

const LoginModal = ({click,setClick}:ILoginModal) => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className={`${s.ModalWrapper} bg-black/40 z-20 duration-75`}>
        <div className={`${s.ModalInner} px-10 py-5`}>
            <div className='flex justify-between'>
            <h4 className={`text-xl font-bold mb-5 ${s.ModalTitle}`}>Auth</h4>
            <Button variant='2' onClick={() => setClick(!click)}>
                <Image alt="Cancel" src={cancel}/>
            </Button>
            </div>
            {isLogin ? <Login change={setIsLogin} changeStatus={isLogin}/> : <Register change={setIsLogin} changeStatus={isLogin}/>}
            <div className='flex justify-center mt-5 pt-5 border-t-2 border-grey'>
            <Button variant='3' className='hover:bg-black hover:text-white duration-75'>
                Login
            </Button>
            </div>
      </div>
    </div>
  )
}

export default LoginModal