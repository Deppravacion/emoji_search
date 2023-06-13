import { EmojiLine } from "./EmojiLine"
import { useState, useEffect} from "react"
import EMOJI_DATA from '../backside/emojiList.json'

const randomIndex = () => Math.floor(Math.random() * EMOJI_DATA.length - 1);
const getFilteredItems = (query, items) => items.filter(item => item.keywords.includes(query))

export const EmojiDisplay = (props) => {
  const [data, setData] = useState([])
  const filteredItems = getFilteredItems(props.inputFieldData, EMOJI_DATA).slice(0,20)

  useEffect(() => {
    const randomArray = []
    while (randomArray.length < 20) {
      const num = randomIndex()
      if (!randomArray.includes(num)) {
        randomArray.push(num)
      }
    }
    setData([...randomArray])
  },[])

  return ( 
    <div className="emojibox">
      <div>
        {
          props.inputFieldData.length > 0 
          ? filteredItems.map((item, index) => (
            <EmojiLine key={index} num={EMOJI_DATA.indexOf(item)} />
          ))
          : data.map((item, index) => (
              <EmojiLine key={index} num={item} />
          ))
        }      
      </div>
    </div>
  )
}