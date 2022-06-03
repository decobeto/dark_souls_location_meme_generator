import { useState } from 'react'
import { encode } from 'base-64'
import { Meme } from './packages/meme'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #a29bfe;
`

const Input = styled.input`
  display: flex;
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`

const Label = styled.label`
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

const Title = styled.h1`
  display: flex;
  color: #fff;
  text-align: center;
  font-size: 3rem;
`

function App() {
  const [imageBase64, setImageBase64] = useState(null)

  const handleImage = (e) => {
    const [file] = e.target.files
    const convertedImage = encode(URL.createObjectURL(file))
    setImageBase64(convertedImage)
  }

  return (
    <Wrapper>
      <Title>DARK SOULS LOCATION MEME GENERATOR</Title>
      {imageBase64 ? (<Meme encodedImage={imageBase64} />) : (
        <div>
          <Label for='file'>Choose a file</Label>
          <Input id='file' type='file' onChange={handleImage} />
        </div>
      )}
    </Wrapper>
  )
}

export default App
