import logo from './logo.svg';
import './App.css';
import Moni from './moni.jpg';
import Par1 from './par1.jpg';
import P2 from './p2.jpg';
import P3 from './p3.jpg';
import P4 from './p4.jpg';
import { ReactComponent as IconFacebook } from './icons/facebook.svg';
import { ReactComponent as IconInsta } from './icons/insta.svg'
import { ReactComponent as IconTwit } from './icons/twit.svg'
import { ReactComponent as IconPacman} from './icons/pacman.svg'
import {ReactComponent as IconSkul} from './icons/skul.svg'
import {ReactComponent as IconStars} from './icons/stars.svg'
import {ReactComponent as IconAlin} from './icons/alin.svg'
import {ReactComponent as IconCriminal} from './icons/skul.svg'


function App() {
  return (
  <body>    
      <div className="app">
         <header class="head">
            <div class="wh-border">
              <div class="content-br">
                мы сочетаем дизайн, мышление и цифровое ремесло
                <h2>Создание Цифрового Опыта</h2>
                <button>учить больше</button>
              </div>
            </div>
        </header>
        <main class="main">
          <div class="block_1">
            <div class="sp-content">|
              <div class="left">
                <h2>egrtgrtgregre</h2>
                Cуществует два основных способа предварительного форматирования: при помощи 
                непосредственного оформления текста в текстовом редакторе, которое должно будет/
                сохраниться при помещении в верстку предполагается использование текстовых форматов,
              </div>
              <div class="right">
                <h2>rtgrgregerg</h2>
                Cуществует два основных способа предварительного форматирования: при помощи 
                непосредственного оформления текста в текстовом редакторе, которое должно будет 
                сохраниться при помещении в верстку предполагается использование текстовых форматов,
              </div>
            </div>
          </div>
          <div class="block_2"> 
            <div className="bt-content">
              <img src={Moni} alt='moni' />
              <div class='pad'>
                Насчет Нас
                <h4>Добро пожаловать в дизайн студию</h4>
                Cуществует два основных способа предварительного форматирования: при помощи 
                непосредственного оформления текста в текстовом редакторе, которое должно будет 
                сохраниться при помещении в верстку предполагается использование текстовых форматов

                Cуществует два основных способа предварительного форматирования: при помощи 
                непосредственного оформления текста в текстовом редакторе, которое должно будет 
                сохраниться при помещении в верстку предполагается использование текстовых форматов
              </div>
            </div>
            <div class="position">
              <h2>Последнии проекты</h2>
              eiugheriuh goerigo ierhgoiergoiegoergi
              <div className='imgContent1'> 
                <div className='img1'></div> 
                <div className='img2'></div>
                <div className='img3'></div>
              </div>
              <div className='imgContent2'>
              <div className='img1'></div> 
                <div className='img2'></div>
                <div className='img3'></div>
              </div>
            </div>
          </div>
          <div class="red-line"></div>
          <div class="comand-content">
            <div class="center">
              <h3>Наша команда</h3>
              riehgiehgiuehgiuerh9uerhrthgiurhgiurehgiuehgueh/rtghriugheruighe
            </div>
            <div class="cont-img">
              <div class='cen'><img src={Par1} alt='p1' /> <p>Чикса беспантовая</p>Менеджр</div>
              <div class='cen'><img src={P2} alt='p2' /><p>Крутой Мужик</p>Руководитель</div>
              <div class='cen'><img src={P3} alt='p3' /><p>Тетя заблудилась</p>Стрельнул сигу на улице</div>
              <div class='cen'><img src={P4} alt='p4' /><p>Аква Мен</p>Просто да</div>
            </div>
          </div>
          <div class="block_3">
          <div className='absolut'>
            <img src={P2} alt='p2' /> 
            <img src={P3} alt='p3' /> 
            <img src={P4} alt='p4' />
          </div>
              <div class="grey">
                  <div class="content_t">
                     <h2>Работа и Наши Клиенты</h2>
                      rtogeogherohgoierghoirthrthtrhtrghghe8rghoiergherogoie
                  </div>
              </div>
              <div class="white-content">
                <div class="icon">
                <IconSkul></IconSkul>
                <IconAlin></IconAlin>
                <IconCriminal></IconCriminal>
                <IconStars></IconStars>
                </div>
              </div>
              <div className="bg-img">
                <div className='bgImg1'>
                       <h3>Инновационые технологии</h3>
                       укопршугкргукпгшук 
                </div>
                <div className='bgImg2'>
                        <h3>Креативный дизайн</h3>
                        укпшугкрпшгукпшгукрпшгк
                </div>
                <div className='bgImg3'>
                  <h3>Вообрази и твори</h3>
                    rtgoerigoerijgerpogkporekgp
                </div>
              </div>
             
          </div>
         
        </main>  
          <div className='footer'>    
            <div className='icons'>
             <IconFacebook style={{margin: '0 4px'}}></IconFacebook>
             <IconInsta style={{margin: '0 4px'}}></IconInsta>
             <IconTwit style={{margin: '0 4px'}}></IconTwit>
             <IconPacman style={{margin: '0 4px'}}></IconPacman>
            </div>  
            <div className='divider'>
             
            </div>
            ueirghiurgocijrejn
          </div>
      </div>
    </body>
  
  );
}

export default App;
