import './Ends.scss';
import Header from '../../components/Header/Header_two';
import ish from '../../Images/ish.svg'
import Footer from '../../components/Footer/Footer';
import Data from '../../components/Datas/Data';
import Name from '../../components/Names_link/Name';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Ends() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
      <Data/>
 <aside>
 <Name/>
  <div className='Works'>
  <img className='ish' src={ish} alt="" />
  <p className='Resume'>Resume</p>
  <p className='Me'>Jur'at Mamadiyorov</p>
  <p className='day'>Tavallud kuni: 2005, 13-noyabr</p>
  <p className='addres'>Manzil: Samarqand viloyati Bulung'ur tumani</p>
  <p className='phone'>+998 123456789</p>
  <p className='email'>Email: jurat1232gmail.com</p>
  <p className='Education'>Ta'lim</p>
  <p className='school'>2011 - 2023 - Umumiy o’rta maktab, 4-maktab, Bulung'ur tumani</p>
  <p className='langs'>Til bilish</p>
  <p className='language'>O'zbek tili (ona til),  Rus tili, Ingliz tili (IELTS 5.0)</p>
  <p className='Kariera'>Kariera</p>
  <p className='camp'>Kampyuter dasturchisi bo'lish</p>
  <p className='Sertifikat'>Sertifikat</p>
  <input type="file" />
  <button><Link to="/the end">Send to</Link></button>
  </div>
  
 </aside>

 <div className='foter'>
 <Footer />
 </div>

    </div>
  );
}

export default Ends;