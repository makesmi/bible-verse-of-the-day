import React, { useState, useEffect } from 'react'
import './App.css'
import sydan from './img/sydan.png'
import kaaro from './img/kaaro3.png'
import soitin from './img/soitin.png'
import rengas from './img/rengas.png'
import raamattu from './img/raamattu.png'
import raamattu2 from './img/raamattu2.png'
import toora from './img/toora.png'
import risti from './img/risti.png'
import verseOfTheDay from './BibleText'
 
const VERSE_REGEX = /sanasinulle">([^<]+)<div/

const pictures = [ risti, toora, raamattu2, raamattu, rengas, soitin, kaaro, sydan ]

function App() {
  const [verse, setVerse] = useState('')
  const [picture, setPicture] = useState('')
  const [fontSize, setFontSize] = useState('10px')

  useEffect(() => {
    const text = verseOfTheDay()
    setVerse(text)
    setFontSize(`${Math.floor(19 - 2.65*Math.log(text.length))}vh`)
    setPicture(pictures[text.length % pictures.length])
  }, [])

  return (
    <>
      <div className="App" style={{ fontSize }}>
        <div className="title">{verse && 'Päivän Sana'}</div>
        <div className="pictureRow">
          <img className="picture" src={picture}/>
        </div>
        <div className="verse">{verse}</div>
      </div>
      <div className="curtain curtainLeft"></div>
      <div className="curtain curtainRight"></div>
    </>
  )
}

export default App
