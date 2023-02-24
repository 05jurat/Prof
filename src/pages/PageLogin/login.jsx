
import Header from '../../components/Header/Header_two'
import './page_registrad.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Login() {
  const {t, i18n} = useTranslation();
  return (
    <div>
        <header className='header'>
        <Header/>
      </header>
      {/* Ro'yxatdan o'tish */}
      <div className='Registrs'>
      <p className='textP'>Tizimga kirish</p>
        <p className='closess'>X</p>
        <div className='lkjhgfd'>
          <p>Email</p>
          <input className='email' type="email" placeholder='example@mail.uz' />
        </div>
        <div className='lkjhgfd'>
          <p>Parol</p>
          <input className='email' type="pasword" placeholder='Yozing' />
        </div>
        <Link className='login_sd' to="/">Kirish</Link>
        <div className='login_ks'>
          <Link  to="/Registr">Hali a'zo emasmisiz?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
