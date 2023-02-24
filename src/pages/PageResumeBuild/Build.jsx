import './Build.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import ps from '../../Images/ps.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Build() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
      <div className='datasw'>
          <p className='resume'>Mening resume</p>
      </div>
<aside className='asidesl'>
  <p className='man'>Shaxsiy</p>
  <div className='account'>
    <div><p>Ismingiz</p> <input  type="text" placeholder='Yozing' /></div>
    <div><p>Familiya</p><input  type="text"placeholder='Yozing' /></div>
    <div><p>Telefon</p><input  type="text" placeholder='+998' /></div>
    <div><p>E-mail</p><input  type="text" placeholder='masalan@mail.uz' /></div>
    <div><p>Shahar</p><input  type="text" placeholder='Yozing' /></div>
    <div></div>
    <div><p>Tavallud kuni</p><input type="text" placeholder='30/12/2222' /></div>
    <img  src={ps} alt="" />
  </div>
  <div className='name'>
<div>  <input type="radio" value="Male" name="gender" />Erkak (o'g'ilbola)</div>
<div> <input type="radio" value="Famale" name="gender" />Ayol (qizbola)</div>
</div>
<hr className='taloms' />
<p className='limtt'>Ta'lim</p>
<div className='schoolsses'>
<div><input  type="radio" />Maktabda o'qiyman</div>
<div><input  type="radio" />Maktabni bitrdm</div>
</div>
<div className='regions'>
    <div><p>Viloyat</p> <input className='text' type="text" placeholder='Yozing' /></div>
    <div><p>Tuman</p><input className='text' type="text"placeholder='Yozing' /></div>
    </div>
    <div className='emails'>
    <div><p>Maktab</p> <input className='text1' type="text" placeholder='Yozing' /></div>
    <div><p>Sinf</p><input className='text1' type="text"placeholder='Yozing' /></div>
    <div><p>Harf - A,B,...</p><input className='text1' type="text"placeholder='Yozing' /></div>
    </div>
<hr className='hr' />
<p className='lengs'>Til bilish</p>
<div className='mother'>
    <div><p>Ona tilingiz</p> <input className='text1' type="text" placeholder='Yozing' /></div>
    <div><p>Ingliz tilingiz</p><input className='text1' type="text"placeholder='Yozing' /></div>
    <div><p>Boshqa</p><input className='text1' type="text"placeholder='Yozing' /></div>
    </div>
    <hr className='hr1' />
    <p className='experience'>Ish tajriba</p>
<div className='yes'>
<div><input  type="radio" /> Ishlaganman</div>
<div><input  type="radio" /> Yo'q ishlamaganman</div>
</div>
<div className='namfs'>
    <div><p>Ishhona nomi</p> <input className='text' type="text" placeholder='Yozing' /></div>
    <div><p>Qaysi tuman</p><input className='text' type="text"placeholder='Yozing' /></div>
    </div>
    <div className='sum'>
    <div><p>Qachon</p> <input  type="number" placeholder='23/3/2222' /></div>
    <div><p>Qancha vaqt</p><input  type="text"placeholder='Yozing' /></div>
    </div>
<p className='wrayting'>Ish haqida yozing</p>
<textarea placeholder='Yozing'></textarea>
<hr className='hr2' />
<p className='Kariera'>Kariera</p>
<div className='who'>
    <div><p>Kim bo'lib ishlashni hohlaysiz</p> <input  type="text" placeholder='Yozing' /></div>
    <div><p>Sohani yozing</p><input  type="text"placeholder='Yozing' /></div>
    </div>
    <hr className='hr3' />
<div className='buttonlkjh'>
<button>
      <Link to="/Ends">Oldindan ko'rish</Link>
</button>
<button className='one'>
      <Link to="/Ends">Rezume yaratish</Link>
</button>
</div>
</aside>


 <div className='fotesr'>
 <Footer/>
 </div>

    </div>
  );
}

export default Build;
