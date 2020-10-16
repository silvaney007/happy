import React from "react";
import '../styles/pages/Landing.css'
import imgLogo from '../img/logo.svg';
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'




function landing () {

        return <div id='page-landing'>
        <div className='content-wrapper'>
           <img src={imgLogo} alt='happy'></img>

           <main>
             <h1>Leve Felicidade para o Mundo</h1>
             <p>Visite orfanatos e mude o dia de muitas crianças.</p>
           </main>

          <div className='location'>
          <strong>Aveiro</strong>
          <span>Portugal</span>  
          </div>

          <Link to = '/app' className='enter-app'>
            <FiArrowRight  size='26' color='rgba(0,0,0,0.6)' />
            </Link>

        </div>
      </div>
};

export default landing;