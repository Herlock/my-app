import React from 'react';
import owl from './img/main-icon.svg'

function App() {

  return (
    <div className='wrapper'>
      <div className='header'>
      <img src={owl} alt='owl'/>
      <h1>Head</h1> 
      </div>
      <nav className='navbar'> Nav </nav>
      <div className='content'>
        <div className='box-1'> <img src='https://i.imgur.com/ZSzKRBo.jpg' alt='profile' /> </div>
        <div className='box-2'>asdasdfsadfsdagfdgsagsdfsadfsadfdsagdfgsdafsdagafsdfegsdafsdgdaf</div>
        <div className='box-3'>sadasddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        <div className='box-4'>4</div>
        <div className='box-5'>5</div>
      </div>
      <div className='footer'><img src={owl} alt='owl'/></div>
    </div>
  );
}

export default App;
