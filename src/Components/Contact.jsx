import React, { useRef, useState } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef();
  const[isSent,SetisSent]=useState(false);
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_co24dic', 'template_71jks18', form.current, 'Jvw8XTLX3ETz8F60Z')
      .then((result) => {
        SetisSent(true);
          form.current.reset(); // Reset the form after successful submission
          console.log(result.text);
          toast.success('Message sent successfully!', {
            position:"top-center",
            autoClose: 3000,
            hideProgressBar:false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
          SetisSent(true);
      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar:false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
      });
  };
  return (
    <section id='contact' className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <ToastContainer />  
      <div className='text-center mb-16'>
        <h2 className='text-5xl font-bold text-white'>CONTACT</h2>
        <div className='w-32 h-1 bg-blue-950 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-xl font-semibold'>
          I'd love to hear from you <span className='text-sky-400'>-reach out!</span> for any opportuanities or questions!
        </p>
      </div>
       
     
      <div className='mt-8 w-full max-w-md bg-[#050414] p-6 rounded-lg shadow-lg border border-sky-400'>
        <h3 className='text-xl font-semibold text-white text-center'>Connect With  <span className='text-sky-400'>Me!</span></h3>
      <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'> 
        <input type="email" name="user_email" placeholder="Your Email" required className='w-full p-3 rounded-md bg-[#131025c1] text-white border-gray-600 focus:outline-none focus:border-sky-400' />
        <input type="text" name="user_name" placeholder="Your Name" required className='w-full p-3 rounded-md bg-[#131025c1] text-white border-gray-600 focus:outline-none focus:border-sky-400' />
        <input type="text" name="Subject " placeholder="Subject" required className='w-full p-3 rounded-md bg-[#131025c1] text-white border-gray-600 focus:outline-none focus:border-sky-400' />
        <textarea name="Message" id="Message" placeholder='Message' rows="4"
        className='w-full p-3 rounded-md bg-[#131025c1] text-white border-gray-600 focus:outline-none focus:border-sky-400'></textarea>
        <button type='submit' className='w-full bg-gradient-to-r from-sky-600 to-blue-950 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-lg'>Send</button>
       </form>  
       </div>
       
    </section>
  )
}

export default Contact