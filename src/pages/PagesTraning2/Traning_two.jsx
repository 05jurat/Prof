import './Traning_two.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import vido from '../../Images/vido.svg'
import {Calendar}  from  'react-bootstrap-icons';
import {Eye}  from  'react-bootstrap-icons';
import o from '../../Images/o.svg'
import o1 from '../../Images/o1.svg'
import o2 from '../../Images/o2.svg'
import Data from '../../components/Datas/Data'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Traning() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
     <Data/>
 <aside className='asidesd'>
<img  src={vido} alt="" />
<a href="#">IT mutaxassisi bolish haqida</a>
<Calendar className='calendar'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
 </aside>
 <main>
  <p className='loremjrx'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>

<button className='buttonop'>
  <Link  to="/Test">Test savollari</Link>
</button>
<div className='Cometuls'>
<p className='com'>Kommentariya</p>
<div className='fex'>
  <div className='alex'>
    <img src={o} alt="" />
  <p className='alx'>Alex Sardor</p>
  <p className='time'>18:34, 20-noyabr, 2023</p>
  <p className='very'>Juda ajoyib dars ekan rahmat! Have you ever finally just gave in  to the temptation and read your bla bla</p>
  </div>

  <div className='alex'>
  <img src={o1} alt="" />
  <p className='alx'>Alex Jur'at</p>
  <p className='time'>18:34, 20-noyabr, 2023</p>
  <p className='very'>Juda ajoyib dars ekan rahmat! Have you ever finally just gave in  to the temptation and read your bla bla</p>
  </div>

  <div className='alex'>
  <img src={o2} alt="" />
  <p className='alx'>Vasya Pushkinov</p>
  <p className='time'>18:34, 20-noyabr, 2023</p>
  <p className='very'>Juda ajoyib dars ekan rahmat! Have temptation and read your bla bla</p>
  </div>

</div>
<p className='worldhf'>Izoh yozish</p>
<textarea placeholder='Fikr yozish'></textarea>
<button className='senw'>
<Link className='aa' to="/ProMain">Yuborish</Link>
</button>
</div>
 </main>
 <Footer />

    </div>
  );
}

export default Traning;