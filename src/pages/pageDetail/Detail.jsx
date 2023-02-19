import './Detail.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import Profesion from '../../components/Proffesions/Profesion'
import orqar1 from '../../Images/orqar1.svg'
import vrach1 from '../../Images/vrach.svg'
import info from '../../Images/info.svg'
import tish from '../../Images/tish.svg'
import xr from '../../Images/xr.svg'
import ak from '../../Images/ak.svg'
import trav from '../../Images/trav.svg'
import urla from '../../Images/urla.svg'
import proo from '../../Images/proo.svg'
import domla from '../../Images/domla.svg'
import togr from '../../Images/togr.svg'
import bad from '../../Images/bad.svg'
import good from '../../Images/good.svg'
import hanyo from '../../Images/hanyo.svg'
import group from '../../Images//Group.svg'
import group1 from '../../Images/Group1.svg'
import group2 from '../../Images/Group3.svg'
import i1 from '../../Images/i1.svg'
import i2 from '../../Images/i2.svg'
import i3 from '../../Images/i3.svg'
import i4 from '../../Images/i4.svg'
import i5 from '../../Images/i5.svg'
import i6 from '../../Images/i6.svg'
import video from '../../Images/Video.svg'
import d1 from '../../Images/d1.svg'
import d2 from '../../Images//d2.svg'
import d3 from '../../Images/d3.svg'
import d4 from '../../Images/d4.svg'
import Data from '../../components/Datas/Data'
import { useTranslation } from 'react-i18next';
function Detail() {
  const {t, i18n} = useTranslation();
  return (
    <div className='Detail' >
      <header className='header'>
        <Header/>
      </header>
      <Data/>
     <aside>
<img className='backs' src={orqar1} alt="" />
<p className='doctor'>Shifokor kaspi haqida</p>
<p className='vrach'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
   <img className='vrach_img' src={vrach1} alt="" />
   <img className='info' src={info} alt="" />
   </aside>

   <div className='childsr'>
   <p className='dest'>Shifokor turlari</p>
   <div className='doctors'>
    <div>
      <img src={tish} alt="" />
      <p className='stamatolg'>Stomatolog</p>
      <p className='zubi'>Tish davolovchi shifokor</p>
    </div>
    <div>
    <img src={xr} alt="" />
    <p className='stamatolg'>Xirurg</p>
    <p className='zubi'>Umumiy amaliyot shifokori</p>
    </div>
    <div>
    <img src={ak} alt="" />
    <p className='stamatolg'>Akusher</p>
    <p className='zubi'>Ayollar va tug'ruq</p>
    </div>
    <div>
    <img src={urla} alt="" />
    <p className='stamatolg'>Travmatolog</p>
    <p className='zubi'>Suyaklar va jarohat ishlari</p>
    </div>
    <div>
    <img src={trav} alt="" />
    <p className='stamatolg'>Urolog</p>
    <p className='zubi'>Erkaklar a'zosi shifokori</p>
    </div>
    <div>
    <img src={proo} alt="" />
    <p className='stamatolg'>Pediatr</p>
    <p className='zubi'>Yosh bolalar shifokori</p>
    </div>
   </div>
   
  
   </div>
   
   <div className='mainsr'>
<img src={domla} alt="" />
<div className='gla'>
<button><a href="#">Shifokor uchun</a></button>
    </div>
    <p className='news'>Shaxsiy qobiliyatlar</p>
    <p className='Lorems'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
     <div className='trues'> 
      <div className='divsr'><img src={togr} alt="" /></div> 
      <div className='divsr'><img src={togr} alt="" /></div>  
       <div className='divsr'><img src={togr} alt="" /></div>  
       <div className='divsr'><img src={togr} alt="" /></div>  
       <div className='divsr'><img src={togr} alt="" /></div> 
       </div>
       <div className='Textssr'>
        <div className='ps'><p>Insonlarga mehribonlik g'amxo'rlik</p></div>
        <div className='ps'><p>Yangiliklarga bo'lgan qiziqish va o'rganish</p></div>
        <div className='ps'><p>Biologiya va anatomiya fanlariga qiziqish</p></div>
        <div className='ps'><p>Yangiliklarga bo'lgan qiziqish va o'rganish</p></div>
        <div className='ps'><p>Qo'rqmaslik va jiddiylik o'zini tutish</p></div>
       </div>
   </div>
   
   <div className='name'>
<p className='plus'>Yaxshi va salbiy jihatlari</p>
<p className='estr'>Har bir kaspning ijobiy va salbiy tomonlari mavjud bo’ladi. Ammo shuni unutmangkisalbiy jihat sizni bu yo’ldan qaytarishi kerak emas.</p>
   <div className='smile'>
   <div><img  src={bad} alt="" /></div>
   <div><img  src={good} alt="" /></div>
   </div>
   </div>
   
   <div className='monthlys'>
<img  src={hanyo} alt="" />
<p className='textt'>Kaspiy faoliyat davomidagi oylik ish haqi miqdori</p>
<p className='infords'>* Информация 2021 </p>
<div className='grup'>
  <div><img src={group} alt="" /></div>
  <div><img className='grups' src={group1} alt="" /></div>
  <div><img className='grupp' src={group2} alt="" /></div>
</div>
   </div>
  
   <div className='doks'>
<p className='job_s'>Qayerlarda ishlaydi?</p>
<p className='text_t'>Asosan kasalxonalarda, ammo bundan tashqari tibbiyot sohasining boshqauv qismida masalan vazirlik va boshqarmalarda ham ishlashi mumkin, xususiy va davlat klinikalari va boshqalarda masalan:</p>
   <div className='gerb'>
    <div><img src={i1} alt="" /></div>
    <div><img src={i2} alt="" /></div>
    <div><img src={i3} alt="" /></div>
    <div><img src={i4} alt="" /></div>
    <div><img src={i5} alt="" /></div>
    <div><img src={i6} alt="" /></div>
   </div>
   <img className='video' src={video} alt="" />
   </div>
      
   <div className='dok_d'>
<p>Soha mutaxassislaridan ba'zilari </p>
<div className='dokd'>
  <div><img src={d1} alt="" /></div>
  <div><img src={d2} alt="" /></div>
  <div><img src={d3} alt="" /></div>
  <div><img src={d4} alt="" /></div>
</div>
   </div>
   <Profesion/>
 <div className='footer'>
 <Footer />
 </div>
    </div>
  );
}

export default Detail;
