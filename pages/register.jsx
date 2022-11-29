import React from 'react'
import Navbar from '../components/Navbar';
import RegisterForm from '../components/registration-form/RegisterForm';

function Registar() {
  return <div className="container-sm ">
   
    <main>
      <div className='text-center mt-10 '>
      <h1 className=' text-4xl font-semibold'>Register As:</h1>
      
      <div className='mt-10'>
     
      <button type="button" class="text-lg p-2 px-10 w-3/12  border border-appColor rounded-l-lg
         bg-appColor text-white">Individual</button>
         <button type="button" class="text-lg w-3/12 p-2  px-10 border border-slate-100 rounded-r-lg text-white">Organization / Company</button>
     
      </div>

      <div>
        <RegisterForm />
      </div>
   
    


      </div>
    </main>
  
  </div>;
}

export default Registar