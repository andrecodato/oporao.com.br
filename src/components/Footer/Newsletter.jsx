import React from 'react';

import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Se instreva e nos acompanhe</h1>
      <p className='p__opensans'>Nunca perca nossas novidades</p>
    </div>
    
    <div className='app__newsletter-input flex__center'>
      <input type='emailç' placeholder='Digite seu e-mail'/>
      <button className='custom__button'>Inscrever-se</button>
    </div>
  </div>
);

export default Newsletter;
