import { useState } from 'react'
import { encode } from 'base-64'
import { Meme } from './packages/meme'

function App() {
  const [imageBase64, setImageBase64] = useState(null)

  const handleImage = (e) => {
    const [file] = e.target.files
    const convertedImage = encode(URL.createObjectURL(file))
    setImageBase64(convertedImage)
    console.log('encoded', convertedImage)
  }

  return (
    <div>
      {imageBase64 ? (<Meme encodedImage={imageBase64} />) : (<input type="file" onChange={handleImage} />)}
    </div>
  )
}

export default App
