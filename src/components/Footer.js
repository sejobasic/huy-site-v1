import React from 'react'
import '../styles/Footer.css'
import Line from './Line'

function Footer() {
  return (
    <div className='footer'>
      <Line />
      <div className='footer-container'>
        <a
          href='https://www.facebook.com/huyouthere'
          target='_blank'
          rel='noreferrer'
        >
          Facebook
        </a>
        <a
          href='https://www.instagram.com/huyouthere/'
          target='_blank'
          rel='noreferrer'
        >
          Instagram
        </a>
        <a
          href='https://twitter.com/huyouthere'
          target='_blank'
          rel='noreferrer'
        >
          Twitter
        </a>
        <a
          href='https://www.tiktok.com/@huyouthere'
          target='_blank'
          rel='noreferrer'
        >
          Tik Tok
        </a>
        <a
          href='https://open.spotify.com/artist/1NTMbL31XUN7LvSUq8VjMc?si=gq8D96WPSkSYVSfT9BK7iw'
          target='_blank'
          rel='noreferrer'
        >
          Spotify
        </a>
        <a
          href='https://music.apple.com/us/artist/huy/450736253'
          target='_blank'
          rel='noreferrer'
        >
          Apple Music
        </a>
      </div>
      <Line />
    </div>
  )
}

export default Footer
