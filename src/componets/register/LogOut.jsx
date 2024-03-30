import React, { useState } from 'react'
import Input from '../../ui/Input'
import { postRegister } from '../../auth/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function LogOut() {
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    key: "",
    secret: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const [alert, setAlert] = useState(null);
  const history = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRegister(formData);
      console.log(response);
      history('/login');
    } catch (error) {
      console.log(error);
      // setAlert(<CustomAlert severity="error" message={error.message} />);
    }
  };
  return (
    <div className='bg-black h-[100vh] flex justify-center items-center'>

      <form onSubmit={handleSubmit} className='w-[28%] h-[62%] rounded-2xl  bg-[#FEFEFE]'>
        <div>
          <p className='text-[36px] text-center mt-4 font-medium '>Sign Up</p>
        </div>
        <div className=''>
          <p className='mx-10 mt-1'>Username</p>
          <Input name={'name'} type={'text'} onChange={handleChange} placeholder={'Enter your username'} />
        </div>
        <div className=''>
          <p className='mx-10 mt-1'>Email</p>
          <Input name={'email'} type={'text'} onChange={handleChange} placeholder={'Enter your email'} />
        </div>
        <div className=''>
          <p className='mx-10 mt-1'>Password</p>
          <Input name={'key'} type={'text'} onChange={handleChange} placeholder={'Enter your password'} />
        </div>
        <div className=''>
          <p className='mx-10 mt-1'>Confirm password</p>
          <Input name={'secret'} type={'text'} onChange={handleChange} placeholder={'Enter your confirm password'} />
        </div>
        <div className=''>
          <button type='submit' className='w-10/12 bg-[#6200EE] rounded-md mx-9 mt-6 py-2 text-white text-md' onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className='text-sm'>
          <p className='text-center mt-2'>Already signed up? <Link to={'/login'}><span className='text-[#6200EE] '>Go to sign in.</span></Link> </p>
        </div>

      </form>
    </div>
  )
}
