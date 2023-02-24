
import { useTranslation } from 'react-i18next';
import {  Link } from 'react-router-dom';
import './Footer.scss'
const Footer = () => {
  const {t, i18n} = useTranslation();
    return (
        <div className='Footer'>
         <p className='prof'>Prof<span>.uz</span></p>
        <p className='Centr'>Xalq Ta'limi Vazirligi Copyright 2022 (c) Multimedia markazi email: prof@itsm.uz</p>
       <div className='flex'>
       <div>
       <nav>
         <ol>
         <li><Link   to='/About'>Biz haqimizda</Link ></li>
         <li><Link   to='/Contact'>Yordam</Link ></li>
           <li><Link to="/Ends">Shaxsiy ma'lumotlarim</Link></li>
           <li><a href="/ProMain">Parolni yangilash</a></li>
         </ol>
       </nav>
       </div>
      <div>
      <nav >
         <ol>
           <li><Link to="/Registr">Ro'yxatdan o'tish</Link></li>
           <li><Link to="/Login">Tizimga kirish</Link></li>
           <li><Link to="/List">Kasb tanlash</Link></li>
           <li><Link to="/Traning">Treninglar</Link></li>
         </ol>
       </nav>
      </div>
       <div>
       <nav >
         <ol>
           <li><Link to="#">xtv.uz</Link></li>
           <li><Link to="#">kitob.uz</Link></li>
           <li><Link to="#">ziyouz.com</Link></li>
           <li><Link to="#">ziyonet.uz</Link></li>
         </ol>
       </nav>
       </div>
       <div>
       <nav>
         <ol className='ol'>
           <li className='networks'>
             <a href="https://www.youtube.com/">/youtube</a></li>
           <li className='networks'>
             <a href="https://www.facebook.com/">/facebook</a></li>
           <li className='networks'>
             <a   href="https://www.instagram.com/">/instagram</a></li>
         </ol>
       </nav>
       </div>
       <div className='instagram'>
       <div>
       <img className='http' src="https://i.pinimg.com/originals/6a/42/04/6a4204f04496559aa27101d25983d0f0.png" alt="" />
       </div>
       <div>
       <img className='http' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="" />
       </div>
       <div>
       <img className='http' src="https://www.pngfind.com/pngs/m/125-1255478_logo-instagram-rosa-png-instagram-icon-png-pink.png" alt="" />
       </div>
       </div>
       </div>
        </div>
    )
  }

  export default Footer;