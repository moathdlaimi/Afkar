import Nav from './Nav'


const Header = () => {

  return (
    <div className="flex justify-between p-8 bg-blue-200" >
      <img src="../logo2.png" alt="logo" className="logo"/>
      <Nav />
    </div>
  )
}

export default Header

