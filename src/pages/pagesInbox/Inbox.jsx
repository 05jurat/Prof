import './Inbox.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import Profesion from '../../components/Proffesions/Profesion'
import Girls from '../../Images/girls.svg'
import people from '../../Images/People.svg'
import Girls2 from '../../Images/girls2.svg'
import Girl from '../../Images/girl.svg'
import boy from '../../Images/child.svg'
import boy2 from '../../Images/child2.svg'
import talk from '../../Images/talk.svg'
import talk1 from '../../Images/talk1.svg'
import talk2 from '../../Images/talk2.svg'
import talk3 from '../../Images/talk3.svg'
import geek from '../../Images/geek.svg'
import blok from '../../Images/Block.svg'
import blok2 from '../../Images/Block2.svg'
import blok3 from '../../Images/Block3.svg'
import Stok from '../../Images/iStock.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Inbox() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
   
   <div className='grid'>
   <p className='top'>Kelajakda o’zingizga munosib kasbni aniqlang</p>
   <p className='loremipd'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
   <div className='flex'>

    <button className='testu'><Link  to="/Test">Test topshir</Link></button>
    <button className='kalk'><Link  to="/Kalkulyator">Kalkulyator </Link></button>
   </div>
      <img src={Girl} className ="girl" alt="" />
      <div className='divrs'>
    <p >Kim bo’laman?</p>
      </div>
   <div className='div1'>
    <p >Shifokor</p>
   </div>
   <div className='div2'>
    <p >O'qituvchi</p>
   </div>
   <div className='div3'>
    <p>Dasturchi </p>
   </div>
   </div>
  
   <div>
   <div className='idea'>
<div className='boys'>
<img src={Stok} alt="" />
   <div>
        <p>Mening kelajagim o’z qo’limda</p>
   </div>
</div>
<div className='text'>
  <p>Loyiha haqida</p>
</div>
<div className='textsr'>
<p className='text_t' >Qobiliyat va imkoniyatlaringiz darajasini aniqlang</p>
<p className='Text_sayt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
</div>
<div className='Linkstrdfef'>
<div className='seven'>
<img src={people} alt="" />
<p className='jobs'>Ota onalarga</p>
</div>
<div className='seven'>
<img src={people} alt="" />
<p className='jobs'>Bitiruvchilarga</p>
</div>
<div className='seven'>
<img src={people} alt="" />
  <p className='jobs'>Ustozlarga</p>
</div>
</div>
   </div>
   </div>
 
   <div className='Child_job'>
   <p>Kelajakni hozirdan quring</p>
   <div className='boox'>
    <div><img src={Girls} alt="" /></div>
    <div><img src={boy}alt="" /></div>
    <div><img src={Girls2}alt="" /></div>
    <div><img src={boy2}alt="" /></div>
   </div>
   <div className='boks'>
    <img src={talk} alt="" />
   </div>
   <div className='boks1'>
    <img src={talk1} alt="" />
   </div>
   <div className='boks2'>
    <img src={talk2} alt="" />
   </div>
   <div className='boks3'>
    <img src={talk3} alt="" />
   </div>
   </div>
   <div className='geeks'>
   <img src={geek} alt="" />
   </div>
   <div className='tests'>
   <div>
    <img src={blok} alt="" />
   </div>
   <div>
    <img src={blok2} alt="" />
   </div>
   </div>
   <div className='JobsE' >
    <img src={blok3} alt="" />
   </div>
  <Profesion/>

 <div className='footer'>
 <Footer />
 </div>

    </div>
  );
}

export default Inbox;
