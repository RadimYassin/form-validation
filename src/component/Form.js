
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
  email:yup.string().email().required(),
  pass:yup.string().max(15).min(6).required(),
  comfirmPass:yup.string().required().oneOf([yup.ref('pass')]),
}).required();

export default function Form() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Firstname ' {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
    
      <input placeholder='age '  {...register("age")} />
      <p>{errors.age?.message}</p>
      <input placeholder='email ' {...register("email")} />
      <p>{errors.email?.message}</p>
  
      <input placeholder='passwoord' {...register("pass")} />
      <p>{errors.pass?.message}</p>
      <input placeholder='comfirm password' {...register("comfirmPass")} />
      <p>{errors.comfirmPass && "password not comfrimed"}</p>


      <input type="submit" />
    </form>
  );
}
