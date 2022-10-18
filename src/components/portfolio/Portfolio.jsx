import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/AdobeStock_244528903.jpeg'
import IMG2 from '../../assets/AdobeStock_244528765.jpeg'
import IMG3 from '../../assets/AdobeStock_435061806.jpeg'
import IMG4 from '../../assets/portfolio web.png'
import IMG5 from '../../assets/tullyz logo portfolio wedbsite.png'
import IMG6 from '../../assets/logo portfolio wedbsite.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crowd Funding DApp',
    github: 'https://github.com/blaynejosh/Fund-Me-smartContract',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Raffle DApp',
    github: 'https://github.com/blaynejosh/Raffle-SmartContract-Hardhat',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'NFT Smart Contracts',
    github: 'https://github.com/blaynejosh/NFT-Smart-Contracts-hardhat',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Web Development',
    github: 'http://localhost:3000/',
    demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: 'NFT Project',
    github: 'https://tullyztokens.xyz/',
    demo: ''
  },
  {
    id: 6,
    image: IMG6,
    title: 'NFT Project',
    github: 'https://akanddoksnfts.xyz/',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio