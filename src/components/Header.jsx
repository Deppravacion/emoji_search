import { useEffect, useState } from 'react';
import emojiData from '../backside/emojiList.json'

export const Header = () => {
  const [index1, setIndex1] = useState(null)
  const [index2, setIndex2] = useState(null)
  const randomIndex = () => Math.floor(Math.random() * emojiData.length - 1)  

  useEffect(() => {
    const newIndex1 = randomIndex()
    const newIndex2 = randomIndex()
    setIndex1(newIndex1)
    setIndex2(newIndex2)
  }, [])

  return (
    <>
      { index1 != null & index2 != null 
        ? ( <h1>{emojiData[index1].symbol} Emoji Search Bar {emojiData[index2].symbol}</h1>  )
        : ( `We'll be right back!` )
      }
    </>
  )
}