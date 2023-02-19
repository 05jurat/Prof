
import './page_registr.scss';
import Header from '../../components/Header/Header_two'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Register() {
  const {t, i18n} = useTranslation();
  return (
    <div>
        <header className='header'>
        <Header/>
      </header>
      {/* Ro'yxatdan o'tish */}
      <div className='Registr'>
        <p className='textP'>Ro'yxatdan o'tish</p>
        <p className='close'>X</p>
        <div className='grids'>
         <div>
          <p className='namert'>Ismingiz</p>
          <input type="text" placeholder='Yozing' />
          </div>
         <div>
          <p className='namert'>Familiya</p>
          <input type="text" placeholder='Yozing' />
          </div>
         <div>
          <p className='namert'>Viloyat</p>
          <input type="text" placeholder='Samarqand' />
          </div>
         <div>
          <p className='namert'>Tuman</p>
          <input type="text" placeholder='Bulungur tumani' />
          </div>
        </div>
        <div className='flexsde'>
<div>
  <p className='schoolop'>Maktab# </p>
  <input type="text" placeholder='4-maktab' />
</div>
<div>
<p className='schoolop'>Sinf</p>
<input type="text" placeholder='Yozing' />
</div>
<div>
<p className='schoolop'>Harf - A,B,...</p>
<input type="text" placeholder='Aa' />
</div>
        </div>
        <hr />
        <div className='gmaigfdl'>
          <p>Email</p>
          <input className='email' type="text" placeholder='Yozing' />
        </div>
        <div className='pasword'>
  <div>
    <p >Parol yarating</p>
    <input type="text" placeholder='Yozing' />
  </div>
  <div>
    <p >Parolni takrorlang</p>
    <input type="text" placeholder='Yozing' />
  </div>
        </div>
        <Link className='login_p' to="/">Kirish</Link>
        <div className='login_k'>
          <Link  to="/Contact">Hali a'zo emasmisiz?</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
