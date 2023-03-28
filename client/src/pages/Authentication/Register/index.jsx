import React, { useState } from 'react';
// React Router
import { Link, useNavigate } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../redux/authSlice';
// Utils
import { request } from '../../../util/fetchApi';
// Hero Icons
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [state, setState] = useState({})
  const [photo, setPhoto] = useState("")
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let filename = null
      if (photo) {
        const formData = new FormData()
        filename = crypto.randomUUID() + photo.name
        formData.append('filename', filename)
        formData.append('image', photo)

        await request('/upload/image', "POST", {}, formData, true)
      } else {
        return
      }

      const headers = {
        "Content-Type": "application/json"
      }

      const data = await request('/auth/register', "POST", headers, {...state, profileImg: filename});
      console.log(data);
      // dispatch(register(data));
      navigate('/');

    } catch (error) {
      console.error(error)
    }
  }

  return (
  <section>
    <div className="flex w-full mt-8">
      <div className="w-full bg-white rounded-lg shadow border border-gray-300">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium">
                User Name
              </label>
              <input
                onChange={handleState}
                type="text"
                name="username"
                id='username'
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                onChange={handleState}
                type="email"
                name="email"
                id='email'
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="photo" className="mb-2 text-sm font-medium flex items-center">
                  Upload Photo
                  <ArrowUpOnSquareIcon className='w-4 h-4 ml-2'/>
              </label>
              <input 
                type="file" 
                id='photo' 
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                onChange={handleState}
                type="text"
                name="phoneNumber"
                id='phone'
                placeholder="Phone Number"
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                onChange={handleState}
                type="password"
                name="password"
                id='password'
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button className='bg-[#2E63F6] text-white rounded px-4 py-2' type='submit'>
              Register
            </button>
            <p className="text-sm font-light text-black">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:underline">
                Log In here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register