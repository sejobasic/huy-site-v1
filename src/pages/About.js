import React from 'react'
import '../styles/About.css'
import placeholder from '../media/placeholder.jpg'

function About() {
  return (
    <div className='flex-column'>
      <img src={placeholder} alt='artist portrait' />
      <div className="line"></div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione eius modi, labore molestias, consequatur perspiciatis nobis dignissimos similique cumque quo sint velit neque repellat cum ad perferendis fugiat! Eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus cum nesciunt quod asperiores sequi debitis numquam, voluptates inventore in ad, voluptatibus unde totam sapiente praesentium illo quidem beatae eaque.</p>
    </div>
  )
}

export default About