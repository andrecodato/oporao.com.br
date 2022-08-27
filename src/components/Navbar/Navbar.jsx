import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.oporao} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Início</a></li>
        <li className='p__opensans'><a href='#about'>Sobre nós</a></li>
        <li className='p__opensans'><a href='#menu'>Cardápio</a></li>
        <li className='p__opensans'><a href='#awards'>Premiações</a></li>
        <li className='p__opensans'><a href='#contact'>Contato</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='https://shop.beetech.com.br/oporao' target='_blank' rel='noreferrer' className='p__opensans'>Faça seu pedido</a>
        <div />
        <a href='https://shop.beetech.com.br/oporao' target='_blank' rel='noreferrer' className='p__opensans'>Cardápio</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Início</a></li>
              <li className='p__opensans'><a href='#about'>Sobre nós</a></li>
              <li className='p__opensans'><a href='#menu'>Cardápio</a></li>
              <li className='p__opensans'><a href='#awards'>Premiações</a></li>
              <li className='p__opensans'><a href='#contact'>Contato</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
