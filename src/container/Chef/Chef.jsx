import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    
    <div className='app__wrapper_info'>
      <SubHeading title='Palavras do Chef' />
      <h1 className='headtext__poppins'>No que acreditamos</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Meia noite eu te conto. Meia noite eu te conto. Meia noite eu te conto.</p>
        </div>
        <p className='p__opensans'>Meia noite eu te conto. Meia noite eu te conto. Meia noite eu te conto. Meia noite eu te conto. </p>
      </div>

      <div className='app__chef-sign'>
        <p>Pedro Gabriel</p>
        <p className='p__opensans'>Sócio e Chef</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
