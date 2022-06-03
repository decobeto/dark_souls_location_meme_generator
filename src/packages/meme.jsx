import { useState, useEffect, useRef } from 'react'
import { decode } from 'base-64'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
`

const Download = styled.label`
  display: flex;
  position: relative;
  width: 200px;
  height: 50px;
  background: #ff7675;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid #000;
  -webkit-box-shadow: 11px 11px 8px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 11px 11px 8px 3px rgba(0,0,0,0.75);
  box-shadow: 11px 11px 8px 3px rgba(0,0,0,0.75);
`


export function Meme(encodedImage){
  const [text, setText] = useState('')

  const myCanvas = useRef()

  const handleText = (textValue) => {
    setText(textValue)
  }

  const download = () => {
    const canvas = myCanvas.current
    const image = canvas.toDataURL('image/png')
    var link = document.createElement('a')
    link.download = 'meme.png'
    link.href = image
    link.click()
  }

  useEffect(() => {
    if(encodedImage){
      console.log(encodedImage.encodedImage)
      const context = myCanvas.current.getContext("2d")
      const image = new Image()
      image.src = decode(encodedImage.encodedImage)
      image.onload = () => {
        context.drawImage(image, 0, 0, 1280, 720)
        if(text){
          context.beginPath()
          context.textBaseline = 'top'
          context.fillStyle = '#FFF'
          context.strokeStyle = '#FFF'
          context.font = "90px EB Garamond"
          context.textBaseline = 'middle'
          context.textAlign = "center"
          context.fillText(text, 1280/2, 400/2)
          context.moveTo(1100, 230)
          context.lineTo(200, 230)
          context.lineWidth = 5
          context.stroke()
        }
        
      }
    }
    
  }, [encodedImage, text])

  return (
    <Wrapper>
      <canvas ref={myCanvas} width={1280} height={720} />
      <Input type="text" value={text} onChange={e => {handleText(e.target.value)}} placeholder={'Type here place name'} />
      {encodedImage && text && <Download onClick={download}> Download </Download>}
    </Wrapper>
    
  )
}