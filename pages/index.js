import Link from 'next/link'
import verifySession from '../utils/verifySession'
import { useEffect } from 'react'

const Index = () => {
  const [ verified, checkForSession ] = verifySession()

  useEffect(() => {
    checkForSession()
  }, [])

  if(verified.data){
    return verified.data
  }

  return (
    <div>
  <h1>Logged In</h1>
  </div>
)

}
export default Index
