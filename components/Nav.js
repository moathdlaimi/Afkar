import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Nav = () => {

const [ isLogged, setIslogged ] = useState(false)

useEffect(() => {
  if(localStorage.getItem('authorization') === null){
    return;
  } else {
    setIslogged(true)
  }
}, [])

const router = useRouter()

const logout = () => {
  axios.delete('/api/session', { headers:
    { authorization: localStorage.getItem('authorization')}
  }).then((res) => {
        localStorage.removeItem('authorization')
        if(window.location.pathname === '/'){
          router.reload()
        } else {
          location.assign('/')
        }
  }). catch((err) => {
        console.log(err);
  })

}



  return (
    <nav className="flex">
      <ul className="flex justify-around gap-4">
        <li><Link href="/"><a>HOME</a></Link></li>
        {
          isLogged ?
          <li><button onClick={logout}>LOG OUT</button></li>
          :
        <> <li><Link href="/login"><a>LOGIN</a></Link></li>
          <li><Link href="/register"><a>REGISTER</a></Link></li>
        </>
        }
      </ul>
    </nav>
  )
}

export default Nav
