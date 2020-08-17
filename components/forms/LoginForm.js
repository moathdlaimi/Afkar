import useForm from '../../utils/useForm'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const LoginForm = () => {

  const [values, setValues, handleChange] = useForm()
  const router = useRouter()

  const login = (e) => {
    e.preventDefault()
    axios.post('/api/login', values)
    .then((res)=> {
      localStorage.setItem('authorization', res.data.authorization)
      location.assign('/')
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
      <div>
      <form onSubmit={login} className="grid gap-4 p-16">

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

        <input type="submit" value="Login"/>
      </form>
      </div>
  )

}
export default LoginForm
