import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.O} alt='O letter' id='about'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__poppins'>Sobre nós</h1>
        <img src={images.spatula} alt="about_spatula" className='spatula__img'/>
        <p className='p__opensans'> Somos um restaurante de amigos e parceiros focados em fazer a diferença na culinária local</p>
        <button type='button' className='custom__button'>Saiba mais</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='aboutus knife' />
      </div>
      
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__poppins'>Nossa historia</h1>
        <img src={images.spatula} alt="about_spatula" className='spatula__img'/>
        <p className='p__opensans'> Somos um restaurante de amigos e parceiros focados em fazer a diferença na culinária local</p>
        <button type='button' className='custom__button'>Saiba mais</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
