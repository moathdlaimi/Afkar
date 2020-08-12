import useForm from '../../utils/useForm'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const RegisterForm = () => {

  const [values, setValues, handleChange] = useForm()
  const router = useRouter()

  const register = (e) => {
    e.preventDefault()
    axios.post('/api/register', values)
    .then((res)=> {
      localStorage.setItem('authorization', res.data.authorization)
      router.push('/')
    })
  }


  return (
      <div>
      <form onSubmit={register} className="grid gap-4 p-16">
        <input
          className="border-2 border-black"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values ? values.firstName : "" }
          placeholder="First Name"
        />
        <input
          className="border-2 border-black"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values ? values.lastName : "" }
          placeholder="Last Name"
        />
        <input
          className="border-2 border-black"
          type="email"
          name="email"
          onChange={handleChange}
          value={values ? values.email : "" }
          placeholder="e-mail"
        />
        <input
          className="border-2 border-black"
          type="password"
          name="password"
          onChange={handleChange}
          value={values ? values.password : "" }
          placeholder="Password"
        />
        <input
          className="border-2 border-black"
          type="URL"
          name="profileImage"
          onChange={handleChange}
          value={values ? values.profileImage : "" }
          placeholder="Image URL"
        />

        <input type="submit" value="Register"/>
      </form>
      </div>
  )

}
export default RegisterForm
