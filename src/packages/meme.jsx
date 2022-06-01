import { useState, useEffect, useRef } from 'react'
import { decode } from 'base-64'


export function Meme(encodedImage){

  const myCanvas = useRef()

  useEffect(() => {
    if(encodedImage){
      console.log(encodedImage.encodedImage)
      const context = myCanvas.current.getContext("2d")
      const image = new Image()
      image.src = decode(encodedImage.encodedImage)
      image.onload = () => {
        context.drawImage(image, 0, 0, 1280, 720)
      }
    }
    
  }, [encodedImage])

  return (
    <canvas ref={myCanvas} width={1280} height={720} />
  )
}