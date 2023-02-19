import './Result.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import Data from '../../components/Datas/Data'
import Name from '../../components/Names_link/Name';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Result() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
      <Data/>
   <aside>
   <Name/>
  <div className='Leftse'>
  <p className='orders'>Tartib</p>
  <p className='time'>Test vaqti</p>
  <div className='ddd'>
    <div><p className='numbers'>#7</p></div>
    <hr />
    <div><p className='numbers'>#6</p></div>
    <hr />
    <div><p className='numbers'>#5</p></div>
    <hr />
    <div><p className='numbers'>#4</p></div>
    <hr />
    <div><p className='numbers'>#3</p></div>
    <hr />
    <div><p className='numbers'>#2</p></div>
    <hr />
    <div><p className='numbers'>#3</p></div>
    <hr />
    <div><p className='numbers'>#2</p></div>
    <hr />
  </div>
  <div className='timesr'>
    <div><p>12:10, 01-noyabr, 2023</p></div>
    <div><p>19:20, 13-noyabr, 2023</p></div>
    <div><p>15:30, 21-noyabr, 2023</p></div>
    <div><p>10:10, 11-noyabr, 2023</p></div>
    <div><p>20:29, 17-noyabr, 2023</p></div>
    <div><p>03:12, 01-noyabr, 2023</p></div>
    <div><p>12:20, 07-noyabr, 2023</p></div>
    <div><p>20:22, 08-noyabr, 2023</p></div>
  </div>
  <p className='View'>Ko'rish</p>
  <div className='Result'>
    <div><button><Link to="/Test2">Natija</Link></button></div>
    <div><button><Link to="/Test2">Natija</Link></button></div>
    <div><button><Link to="/Test2">Natija</Link></button></div>
    <div><button><Link to="/Test2">Natija</Link></button></div>
    <div><button><Link to="/Test2">Natija</Link></button></div>
    <div><button><Link to="/Test2">Natija</Link></button></div>
    <div><button><Link to="/Test2">Natija</Link></button></div>
    <div><button><Link to="/Test2">Natija</Link></button></div>
  </div>
  <div className='tart3'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  </div>
  
 </aside>
{/* Bizning joyi */}
 <Footer />

    </div>
  );
}

export default Result;