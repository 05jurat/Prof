import './Test_two.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import info1 from '../../Images/info1.svg'
import info2 from '../../Images/info2.svg'
import d from '../../Images/d.svg'
import d1 from '../../Images/img2.svg'
import d3 from '../../Images/img4.svg'
import d4 from '../../Images/img1.svg'
import a1 from '../../Images/a1.svg'
import Data from '../../components/Datas/Data'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Test() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
      <Data/>
   <div>
    <p className='test'>Test natijasi</p>
    <p className='Hello'>Salom, Jur'at!, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   <img className='infor' src={info1} alt="" />
   <img className='info1' src={info2} alt="" />
   </div>
 <div>
  <p className='professionr'>Sizga mos kasplar</p>
  <div className='gridol'>
    <div>
       <img src={d} alt="" />
    <p className='doc'>Shifokor</p>
    <p className='worklj'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
    <p className='sum'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
   <button>
     <Link className='sil' to="/Detail">Batafsil</Link>
     </button>
    </div>
    <div> 
      <img src={d1} alt="" /> 
    <p className='doc'>O'qituvchi</p>
    <p className='worklj'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
    <p className='sum'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
    <button>
   <Link className='sil' to="/Detail">Batafsil</Link>
     </button>
    </div>
    <div> 
      <img  src={d3} alt="" />
    <p className='doc'>Arxitektor</p>
    <p className='worklj'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
    <p className='sum'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
    <button>
   <Link className='sil' to="/Detail">Batafsil</Link>
     </button>
    </div>
    <div> 
      <img src={d4} alt="" />
    <p className='doc'>Dasturchi</p>
    <p className='worklj'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
    <p className='sum'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
    <button>
   <Link className='sil' to="/Detail">Batafsil</Link>
     </button>
    </div>
  </div>
  <button className='button'>
  <Link  to="/List">Kasplar katalogi</Link>
  </button>
  <img className='srcs' src={a1} alt="" />
 </div>
 <div className='foter'>
 <Footer />
 </div>
    </div>
  );
}

export default Test;