import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './FindUs.css'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='findus'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contato' />
      <h1 className='headtext__poppins'>Encontre-nos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Rua Ratolandia do sul, 1234 - Praça Anchieta</p>
        <p className='p__poppins'>Funcionamento:</p>
        <p className='p__opensans'>Terça - Domingo | 18:00 às 23:30</p>
        <p className='p__opensans'>Terça - Domingo | 18:00 às 23:30</p>
      </div>
      <button className='custom__button'>Conheça</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='find us' />
    </div>
  </div>
);

export default FindUs;
