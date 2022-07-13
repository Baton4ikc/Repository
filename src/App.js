import logo from './logo.svg';
import './App.css';
import Moni from './moni.jpg';
import Par1 from './par1.jpg';
import P2 from './p2.jpg';
import P3 from './p3.jpg';
import P4 from './p4.jpg';
 

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
            <div class="position"></div>
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
        </main>
      </div>
    </body>    
  );
}

export default App;
