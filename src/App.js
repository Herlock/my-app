import React from 'react';
import mainLogo from './img/main-icon.svg';
import telegramIcon from './img/telegram.svg';
import whatsappIcon from './img/whatsapp-icon.svg'

function App() {

  return (
    <div className='wrapper'>
      <div className='header'>
      <img src={mainLogo} alt='owl'/>
      <h1>Резюме разработчика</h1> 
      </div>
      <nav className='navbar'>
        <img src='https://i.imgur.com/ZSzKRBo.jpg' alt='profile' />
        <h3>Усманов Фиданур Фаннурович</h3>
      </nav>
      <div className='content'>
        <div className='box-1'>
        <h3>Контакты</h3>
        <p>Телефон: 8-984-297-69-02 </p>
        <p>e-mail: fidanur23@gmail.com </p>
        <p><a href='https://t.me/HerlockS'><img src={telegramIcon} alt='telegramLink' className='contactImg' /></a>
        <a href='https://wa.me/89842976902'><img src={whatsappIcon} alt='whatsappLink' className='contactImg' /></a>
        </p>  </div>
        <div className='box-2'>
          <h3>Навыки</h3>
          
          </div>       
        <div className='box-3'>sadasdddd ddd da aa aaa aaa aa aaa aaaa aaa aaaaaa aaaaaaa aaaaaaa aaaaaaaa aaaaaa</div>
        <div className='box-4'>4</div>
        <div className='box-5'>5</div>
      </div>
      <div className='footer'><img src={mainLogo} alt='owl'/></div>
    </div>
  );
}

export default App;
