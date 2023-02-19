import './Kalkulyator.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import q from '../../Images/q.svg'
import q1 from '../../Images/q1.svg'
import q3 from '../../Images/q3.svg'
import q4 from '../../Images/q4.svg'
import q5 from '../../Images/q5.svg'
import q6 from '../../Images/q6.svg'
import q7 from '../../Images/q7.svg'
import g1 from '../../Images/g1.svg'
import g2 from '../../Images/g2.svg'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Kalkulyator() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
      <div className='data'>
<p>Kasp kalkulyatori</p>
      </div>

 <aside className='dd'>
  <p className='three' >O’zingizga maqul 3 ta fanni belgilang va munosib kaspni aniqlaymiz</p>
  <div className='subjects'>
    <div><FormCheckInput className='chek' /> <p>Fizika</p></div>
    <div><FormCheckInput className='chek'/>  <p>Jismoniy tarbiya</p></div>
    <div><FormCheckInput className='chek'/>  <p>Astranomiya</p></div>
    <div><FormCheckInput className='chek'/> <p>Geometriya</p></div>
    <div><FormCheckInput className='chek'/> <p>Geografiya</p></div>
    <div><FormCheckInput className='chek'/> <p>Ximiya</p></div>
    <div><FormCheckInput className='chek'/> <p>Matematika</p></div>
    <div><FormCheckInput className='chek'/> <p>Botanika</p></div>
    <div><FormCheckInput className='chek'/> <p>Botanika</p></div>
    <div><FormCheckInput className='chek'/> <p>Matematika</p></div>
    <div><FormCheckInput className='chek'/> <p>Informatika</p></div>
    <div><FormCheckInput className='chek'/> <p>Tasviriy san'at</p></div>
    <div><FormCheckInput className='chek'/> <p>Musiqa</p></div>
    <div><FormCheckInput className='chek'/> <p>Ona tili</p></div>
    <div><FormCheckInput className='chek'/> <p>Astranomiya</p></div>
    <div><FormCheckInput className='chek'/> <p>Jismoniy tarbiya</p></div>
  </div>
 </aside>
 <p className='you'>Sizga munosib kasplar</p>
 <select className='select'>
  <option>Moash bo'yicha</option>
  <option></option>
  <option></option>
 </select>
 {/* main */}
 <main>
  <div className='divuy'>
    <img  src={q} alt="" />
  <p className='tor'>Shifokor</p>
  <p className='boo'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
  <img className='g1' src={g1} alt="" />
  <button>
 <Link className='sil' to="/Detail">Batafsil</Link>
  </button>
  </div>

  <div className='divuy'>
  <img src={q1} alt="" />
  <p className='tor'>Arxitektor</p>
  <p className='boo'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
  <img className='g1' src={g1} alt="" />
  <button>
 <Link className='sil' to="/Detail">Batafsil</Link>
  </button>
  </div>

  <div className='divuy'>
  <img src={q3} alt="" />
  <p className='tor'>Tikuvchil</p>
  <p className='boo'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
  <img className='g1' src={g2} alt="" />
  <button>
 <Link className='sil' to="/Detail">Batafsil</Link>
  </button>
  </div>

  <div className='divuy'>
  <img src={q4} alt="" />
  <p className='tor'>Oshpaz</p>
  <p className='boo'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
  <img className='g1' src={g1} alt="" />
  <button>
 <Link className='sil' to="/Detail">Batafsil</Link>
  </button>
  </div>

  <div className='divuy'>
  <img src={q5} alt="" />
  <p className='tor'>Haydovchi</p>
  <p className='boo'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
  <img className='g1' src={g1} alt="" />
  <button>
 <Link className='sil' to="/Detail">Batafsil</Link>
  </button>
  </div>

  <div className='divuy'>
  <img src={q6} alt="" />
  <p className='tor'>Shifokor </p>
  <p className='boo'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
  <img className='g1' src={g2} alt="" />
  <button>
 <Link className='sil' to="/Detail">Batafsil</Link>
  </button>
  </div>

  <div className='divuy'>
  <img src={q7} alt="" />
  <p className='tor'>Dasturchi</p>
  <p className='boo'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
  <img className='g1' src={g1} alt="" />
  <button>
  <Link className='sil' to="/Detail">Batafsil</Link>
  </button>
  </div>
 </main>

 <div className='foteer'>
 <Footer />
 </div>

    </div>
  );
}

export default Kalkulyator;
