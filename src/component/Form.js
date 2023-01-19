import React, { useState } from 'react'
import { useForm} from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Form = () => {

    const [value,setValue]=useState('')
  return (

           <form className='form'>
              <input type={'text'} name="firstname" placeholder='first name '/>
              <input type={'text'} name="lastname"  placeholder='last name '/>
              <input type={'text'} name="email" placeholder='email'/>
              <input type={'text'} name="password" placeholder='password'/>
              <input type={'text'} name="comfirmPassword" placeholder='comfirmPassword'/>
              <button>submit</button>
      
  
          
           </form>
  )
}

export default Form
