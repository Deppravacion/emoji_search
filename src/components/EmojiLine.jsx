import EMOJI_DATA from '../backside/emojiList.json'

const handleClick = async (e) => {
  const selected = e.currentTarget.querySelector('#emoji')
  try {
    await navigator.clipboard.writeText(selected.textContent)
    console.log('Content Coppied:');
  } catch {
    console.error('Content Failed to Copy', error)
  } 
  return selected
}

export const EmojiLine = ({num}) => {
  return (
    <div className="emojiline" onClick={(e) => handleClick(e)} >
      <span id='emoji' className='symbol'>{ EMOJI_DATA[num].symbol }</span>
      <span>{ EMOJI_DATA[num].title }</span>
    </div>
  )
}