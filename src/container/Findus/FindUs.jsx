import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contato' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Encontre-nos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Rua Ratolandia do sul, 1234 - Praça Anchieta</p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Funcionamento:</p>
        <p className='p__opensans'>Terça - Domingo | 18:00 às 23:30</p>
        <p className='p__opensans'>Terça - Domingo | 18:00 às 23:30</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Conheça</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us' />
    </div>
  </div>
);

export default FindUs;
