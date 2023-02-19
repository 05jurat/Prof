import './Traning.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import { Calendar }  from  'react-bootstrap-icons';
import { Eye }  from  'react-bootstrap-icons';
import it from '../../Images/it.svg'
import it1 from '../../Images/it1.svg'
import it2 from '../../Images/it2.svg'
import it3 from '../../Images/it3.svg'
import it4 from '../../Images/it4.svg'
import play from '../../Images/play.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Traning() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
      <div className='data'>
            <p className='pd'>Treninglar mashqlar</p>
      </div>
      <input type="text" className='search' placeholder='Qidirish...'/>
      <select className='filtr'>
        <option>Filter</option>
      </select>
 <aside className='asides'>

  <div>
  <img className='it' src={it} alt="" />
  <img className='play' src={play} alt="" />
  <Link className='work' to="/Traning2">Kasp tanlash sirlari</Link>
  <Calendar className='calendar'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it1} alt="" />
  <img className='play' src={play} alt="" />
   <Link className='work' to="/Traning2">IT mutaxassisi bolish haqida</Link>
   <Calendar className='calendar1'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it2} alt="" />
  <img className='play' src={play} alt="" />
  <Link className='work' to="/Traning2">IT mutaxassisi bolish haqida</Link>
   <Calendar className='calendar1'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it3} alt="" />
  <img className='play' src={play} alt="" />
  <Link className='work' to="/Traning2">Bola psixologiyasi haqida</Link>
   <Calendar className='calendar2'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it4} alt="" />
  <img className='play' src={play} alt="" />
  <Link className='work' to="/Traning2">Rasm chizish san’ati haqida</Link>
   <Calendar className='calendar3'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it} alt="" />
  <img className='play' src={play} alt="" />
   <Link className='work' to="/Traning2">IT mutaxassisi bolish haqida</Link>
   <Calendar className='calendar1'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it} alt="" />
  <img className='play' src={play} alt="" />
   <Link className='work' to="/Traning2">IT mutaxassisi bolish haqida</Link>
   <Calendar className='calendar1'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it} alt="" />
  <img className='play' src={play} alt="" />
   <Link className='work' to="/Traning2">IT mutaxassisi bolish haqida</Link>
   <Calendar className='calendar1'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

  <div>
  <img className='it' src={it} alt="" />
  <img className='play' src={play} alt="" />
   <Link className='work' to="/Traning2">IT mutaxassisi bolish haqida</Link>
   <Calendar className='calendar1'/>
  <p className='date'>09/02/2023</p> 
  <Eye className='eye'/>
  <p className='viwes'>2917 views</p>
  </div>

 </aside>

 <div className='foter'>
 <Footer />
 </div>

    </div>
  );
}

export default Traning;
