import { useState, useEffect } from 'react'
import { decode } from 'base-64'


export function Meme(encodedImage){
  const [image, setImage] = useState(null)

  useEffect(() => {
    if(base64){
    
    }
    
  }, [base64])

  return (
    <img src={decode(encodedImage.base64)} />
  )
}