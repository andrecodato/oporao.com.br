import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Descubra um novo sabor' />
      <h1 className='app__header-h1'>A resposta para sua fome</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}} >
        Sua melhor experiencia em sabor!
        Ingredientes selecionados com carinho para a melhor experiencia do consumidor. Aqui o bagulho é doido!
      </p>
      <button type='button' className='custom__button'>Explore o menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
