import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios'


const Nav = () => {

const logout = () => {
  axios.delete('/api/session', { headers:
    { authorization: localStorage.getItem('authorization')}
  }).then((res) => {
        localStorage.removeItem('authorization')
        if(window.location.pathname === '/'){
          router.reload()
        } else {
          router.push('/')
        }
  }). catch((err) => {
        console.log(err);
  })

}

const router = useRouter()
  return (
    <nav className="flex">
      <ul className="flex justify-around gap-4">
        <li><Link href="/"><a>HOME</a></Link></li>
        <li><Link href="/register"><a>REGISTER</a></Link></li>
        <li><Link href="/login"><a>LOGIN</a></Link></li>
        <li><button onClick={logout}>LOG OUT</button></li>
      </ul>
    </nav>
  )
}

export default Nav
