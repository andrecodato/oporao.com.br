import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contato</h1>
        <p className='p__opensans'>Rua Ratolandia do sul, 1234 - Praça Anchieta</p>
        <p className='p__opensans'>+55 (44) 91234-1234</p>
        <p className='p__opensans'>+55 (44) 91234-1234</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.oporao} alt='footer_logo' />
        <p className='p__opensans'>"O melhor jeito de se encontrar é se perdendo na arte de outros."</p>
        <img src={images.spatula} alt='spatula' className='spatula__img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horário de funcionamento</h1>
        <p className='p__opensans'>Terça - Domingo</p>
        <p className='p__opensans'>18:00 às 23:30</p>
        <p className='p__opensans'>Terça - Domingo</p>
        <p className='p__opensans'>18:00 às 23:30</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 OPORÃO. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;
