import {useState} from 'react'

const UseForm = () => {
  const [state, setState] = useState({})

  const handleChange = (event) => {
    event.persist()
    console.log(state);
    setState((state) => (
      {...state,[event.target.name]: event.target.value}))
  }

  return [state, setState, handleChange]
}

export default UseForm
