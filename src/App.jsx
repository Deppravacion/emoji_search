import { useState } from 'react'
import { Header } from './components/Header'
import { SearchInput } from './components/SearchInput'
import { EmojiDisplay } from './components/EmojiDisplay'
import './App.css'

function App() {
  const [inputFieldData, setInputFieldData] = useState('')
  const [ sharedSubmit, setSharedSubmit] = useState('')
  const handleDataChange = (data) =>  setInputFieldData(data)
  const handleDataSubmit = (data) => setSharedSubmit(data)
  
  return (
    <>
      <Header  />
      <SearchInput 
        handleDataChange={handleDataChange}
        onSubmittedDataChange={handleDataSubmit}
        /> 
      <EmojiDisplay 
        inputFieldData={inputFieldData}   
      />      
    </>
  )
}

export default App
