import './About.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import domla from '../../Images//domla.svg'
import p from '../../Images/aira.svg'
import p1 from '../../Images/p2.svg'
import p2 from '../../Images/p3.svg'
import p3 from '../../Images/p4.svg'
import i1m from '../../Images/icon.svg'
import Data from '../../components/Datas/Data'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function About() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
     <Data/>
   <div>
<p className='test'>Test 20 ta savoldan iborat</p>
<p className='Lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
   <div className='note'>
<img className='undo' src={i1m} alt="" />
<p className='notes'>Eslatma</p>
<p className='Lorems'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </div>
   <button className='boshla'>
   <Link  to="/Test2">Testni boshla</Link>
   </button>
   <img className='tech' src={domla} alt="" />
<div className='triangle'><img src={p} alt="" /></div>
<div className='pyramid'><img src={p1} alt="" /></div>
<div className='star'><img src={p2} alt="" /></div>
<div className='interrogation'><img src={p3} alt="" /></div>
   </div>
 <div className='footer'>
 <Footer />
 </div>
    </div>
  );
}

export default About;

