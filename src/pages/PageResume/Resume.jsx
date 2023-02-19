import './Resume.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import info from '../../Images/infoss.svg'
import bro from '../../Images/aka.svg'
import stt from '../../Images/stt.svg'
import sestra from '../../Images/opa.svg'
import g1 from '../../Images/g12.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Resume() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
      <div className='datak'>
<p><Link to="/">Asosiy</Link> <span>/</span>  <Link to="/ResBuild">Rezume yaratish</Link></p>
      </div>
 <aside className='aside'>
  <p className='resume'>Rezume yaratish</p>
  <p className='loremms'>Online konstruktor orqali rezume yarating.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. quis nostrud exercitation ullamco laboris nis</p>
 <button className='yaratst'>
 <Link to="/ResBuild">Rezume yarat</Link>
 </button>
 <img className='info' src={info} alt="" />
 <img className='bro' src={bro} alt="" />
 </aside>
 <img className='texts' src={stt} alt="" />
 <img className='sestra' src={sestra} alt="" />
 <div className='this'>
<p className='three'>Professional rezume bu:</p>
<img className='number' src={g1} alt="" />
 </div>
 <button className='buttonnr'>
 <Link to="/ResBuild">Rezume yarat</Link>
 </button>

 <div className='foteer'>
 <Footer />
 </div>

    </div>
  );
}

export default Resume;