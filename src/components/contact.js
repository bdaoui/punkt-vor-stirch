import React, {useState, useEffect, useContext} from 'react';

import axios from "axios";
import {AuthContext} from "../context/auth.context"

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const {isLoggedIn} = useContext(AuthContext)

  // states for Contact Form 

  const [contactName, setContactName] = useState("")
  const [contactLastName, setContactLastName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactSubject, setContactSubject] = useState("")
  const [contactMessage, setContactMessage] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    axios.post("http://localhost:5005/edit/info", {email, phone, address} )
        .then(response => {
            const {email, phone, address} = response;
            setAddress(address);
            setPhone(phone);
            setEmail(email)
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {

    axios.get("http://localhost:5005/edit/info")
        .then(response => {
            console.log(response)
            const {email, phone, address} = response.data;
            setAddress(address);
            setPhone(phone);
            setEmail(email)        
        })
        .catch(err => console.log(err))
  }, [])


  const handleContact = (e) =>{
    e.preventDefault();

    const fileContact = {
        contactName,
        contactLastName,
        contactEmail,
        contactPhone,
        contactSubject,
        contactMessage

    }

    axios.post("http://localhost:5005/contact", fileContact)
        .then(response => console.log(response))
        .catch(err => console.log(err))


  }

  return (
    <div className='mb-0 pb-10' id="contact">
        <h2 className='text-4xl md:text-5xl text-center my-10 underline decoration-pink'>Get in touch!</h2>
        
    <div className='flex flex-col md:flex-row justify-center text-center gap-20'>

            <div className='flex flex-col' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <h1 className='my-2 font-bold pt-2'>Email</h1>
            <p className='text-gray-400'>{email}</p>
            </div>

            <div className='flex flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h1 className='my-2 font-bold'>Phone</h1>
            <p className='text-gray-400'>{phone}</p>
            </div>

            <div className='flex flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h1 className='my-2 font-bold'>Address</h1>
            <p className='text-gray-400'>{address}</p>
            </div>
    </div>

    {isLoggedIn && 
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
  
    <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
        
          <label for="email" class="sr-only">email</label>
          <input id="email" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label for="phone" class="sr-only">phone</label>
          <input id="phone" name="phone" type="phone" autocomplete="current-phone" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div>
          <label for="address" class="sr-only">address</label>
          <input id="address" name="address" type="address" autocomplete="current-address" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
           placeholder-gray-500 focus:z-10 focus:border-pink focus:outline-none focus:ring-pink sm:text-sm" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>

    
      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-black group-hover:text-pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Edit
        </button>
      </div>
    </form>
  </div>
</div>
    }



    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 my-12 bg-white border-2 border-pink rounded">
              <p className="text-3xl font-bold leading-7 text-center text-black m-5">Kontakt</p>
            <form action="" onSubmit={handleContact}>
                <div className="md:flex items-center mt-12  ">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-black ">Name</label>
                        <input type="text" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink" onChange={(e) => setContactName(e.target.value)} />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-black">Last Name</label>
                        <input type="text" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink" onChange={(e) => setContactLastName(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex items-center mt-4  ">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-black ">Email</label>
                        <input type="email" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink" onChange={(e) => setContactEmail(e.target.value)}  />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-black">Phone</label>
                        <input type="text" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink" onChange={(e) => setContactPhone(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-black">Subject</label>
                        <input type="text" className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink" onChange={(e) => setContactSubject(e.target.value)} />
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-black">Message</label>
                        <textarea type="text" className="h-40 text-base leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink" onChange={(e) => setContactMessage(e.target.value)}  ></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button type='submit' className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-pink rounded hover:bg-pink focus:ring-2 focus:ring-offset-2 focus:ring-pink focus:outline-none m-5">
                        Send message
                    </button>
                </div>
            </form>
        </div>
</div>
  )
}

export default Contact