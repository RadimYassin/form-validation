import React, { useState } from 'react'
import { useForm} from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
   
const schema=yup.object().shape({
  firstname:yup.string().required(),
  lasttname:yup.string().required(),
  email:yup.string().email(),
  age:yup.number().integer().positive().required(),
  password:yup.string().min(6).max(15).required(),
  comfirmPassword:yup.string().oneOf([yup.ref('password'),null]),

})
const Form = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });
     

  const SubmitData =data=>{

  }
  return (

           <form className='form' onSubmit={handleSubmit(SubmitData)}>
              <input type={'text'} name="firstname" placeholder='first name ' ref={register}/>
              <input type={'text'} name="lastname"  placeholder='last name '  ref={register}/>
              <input type={'text'} name="email" placeholder='email'  ref={register}/>
              <input type={'text'} name="age" placeholder='age '  ref={register}/>
              <input type={'text'} name="password" placeholder='password'  ref={register}/>
              <input type={'text'} name="comfirmPassword" placeholder='comfirmPassword'  ref={register}/>
              <button>submit</button>
      
  
          
           </form>
  )
}

export default Form
