import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import sydan from './img/sydan.png'
import kaaro from './img/kaaro3.png'
import soitin from './img/soitin.png'
import rengas from './img/rengas.png'
import raamattu from './img/raamattu.png'
import raamattu2 from './img/raamattu2.png'
import toora from './img/toora.png'
import risti from './img/risti.png'
 
const VERSE_REGEX = /sanasinulle">([^<]+)<div/

const pictures = [ risti, toora, raamattu2, raamattu, rengas, soitin, kaaro, sydan ]

const defaultVerses = [
  'Parempi on luottaa Herraan, kuin turvata ihmisiin',
  'Sillä synnin palkka on kuolema, mutta Jumalan armolahja on iankaikkinen elämä Kristuksessa Jeesuksessa, meidän Herrassamme',
  'Autuaita ne, jotka uskovat, vaikka eivät näe',
  'Parannusta syntien anteeksiantamiseksi on saarnattava hänen nimessään kaikille kansoille, alkaen Jerusalemista',
  'Alussa Jumala loi taivaan ja maan'
]

const getDefaultVerse = (verse:string) => {
  const index = verse.length % defaultVerses.length
  return defaultVerses[index]
}

function App() {
  const [verse, setVerse] = useState('')
  const [picture, setPicture] = useState('')
  const [fontSize, setFontSize] = useState('10px')

  useEffect(() => {
    const fetch = () => {
      axios.get('https://sana.muurahainen.net/jae')
        .then(response => {
          if(response.data instanceof String || (typeof response.data) === 'string'){
            const match = response.data.match(VERSE_REGEX)
            if(match && match[1]){
              let text = match[1].replace(/&quot;/g, '')
              if(text.length > 319){ text = getDefaultVerse(text) }
              setVerse(text)
              setFontSize(`${Math.floor(19 - 2.65*Math.log(text.length))}vh`)
              setPicture(pictures[text.length % pictures.length])
            }
          }
      })
    }

    setInterval(fetch, 3600000)
    fetch()
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
