import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Solidity Programing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solidity.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hardhat.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li> */}
          </ul>
        </article>

        {/* END OF SOLIDITY */}

        <article className="service">
          <div className="service__head">
            <h3>Smart Contract Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solidity.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hardhat.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Javascript.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li> */}
          </ul>
        </article>

        {/* END OF SMART CONTRACT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>NextJS.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSS.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Javascript.
              </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.
              </p>
            </li> */}
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

      </div>
    </section>
  )
}

export default Services