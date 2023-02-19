import './Main.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import avatar from '../../Images/avatar.svg'
import Data from '../../components/Datas/Data'
import Name from '../../components/Names_link/Name';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Main() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
    <Data/>
 <aside>
 <Name/>
  <div className='Personal'>
        <p className='Personals'>Shaxsiy ma'lumotlarim</p>
<div className='Name'>
  <div><p>Ismingiz</p><input placeholder='Yozing' type="text" /></div>
  <div><p>Familiya</p><input placeholder='Yozing' type="text" /></div>
  <div><p>Viloyat</p><input placeholder='Yozing' type="text" /></div>
  <div><p>Tuman</p><input placeholder='Yozing' type="text" /></div>
</div>
<div className='school'>
    <div><p>Maktab#</p> <input placeholder='Yozing'  type="text" /></div>
    <div><p>Sinf </p><input placeholder='Yozing'  type="text" /></div>
    <div><p>Harf - A,B,...</p> <input placeholder='Yozing'  type="text" /></div>
  </div>
  <p className='emil'>Email</p>
  <input placeholder='Yozing' className='emails' type="text" />
 <button className='Save'>
 <Link  to="/Ends">Saqlash</Link>
 </button>
  <div className='pasword'>
<p className='p'>Parolni yangilash</p>
<div className='parol'>
    <div><p>Yangi parol</p> <input type="text" className='cl' placeholder='Yozing'/></div>
    <div><p>Eski parol</p> <input type="text" className='cl' placeholder='Yozing'/></div>
    <button className='buttonsrf'>
  <Link  to="/the end">Saqlash</Link>
  </button>
  </div>
 
  
  </div>
  <img className='avatar' src={avatar} alt="" />
  </div>
 </aside>
 <div className='foter'>
 <Footer />
 </div>

    </div>
  );
}

export default Main;