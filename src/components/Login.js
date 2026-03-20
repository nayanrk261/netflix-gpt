import React from 'react'
import Header from './Header';
const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute w-56 px-8 py-8 bg-gradient-to-b from-black'>
            <img
              src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            />
        </div>
    </div>
  )
}

export default Login;