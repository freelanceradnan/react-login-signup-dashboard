import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useForm } from 'react-hook-form';



function Login() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Navbar/>
            
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 lg:w-1/3 flex flex-col mx-auto mt-10 p-8 gap-4 border border-black rounded-2xl">
     
      <input {...register("gmail",{ required: true })} placeholder="Enter Login Gmail ...." className="border border-emerald-600 focus:border-emerald-800 h-8"/>
            {errors.gmail && <span className="font-bold text-red-600">Email field is required</span>}
      
      <input {...register("password", { required: true })} placeholder='Enter your Password' className="border border-emerald-600 focus:border-emerald-800 h-8"/>
            {errors.password && <span className="font-bold text-red-600">Password field is required</span>}
    


      <input type="submit" value={"Login"} className="rounded-sm w-full bg-emerald-600 py-2 text-white"/>
    </form>
        </div>
    );
}

export default Login;