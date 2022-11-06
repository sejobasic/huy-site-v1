import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home-container'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/4nyld2SqleU'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <div className="line"></div>
      <iframe
        src='https://open.spotify.com/embed/track/5iGVtn4ZJVCmwXn3Xj8TpF?utm_source=generator&theme=0'
        title='Spotify'
        width='70%'
        height='300'
        frameBorder='0'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      ></iframe>
    </div>
  )
}

export default Home
