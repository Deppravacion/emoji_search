import { useState } from "react"

export const SearchInput = (props) => {
  const [localState, setLocalState] = useState('')

  const handleChange = ({target: {value}}) => {
    setLocalState(value)
    props.handleDataChange(value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalState('')
    props.handleDataChange(e.target.value)
  }

  return (
    <>
      <form >
        <input 
          type='text' 
          value={localState}
          onChange={handleChange}          
        />
        <button type='submit' 
          onClick={handleSubmit}
        >Clear
        </button>
      </form>       
    </>
  )
}
