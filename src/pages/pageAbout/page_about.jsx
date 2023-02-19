import './pageAbout.scss'
import Header from '../../components/Header/Header_two';
import Link from '../../components/Links/Link_two'
import Footer from '../../components/Footer/Footer'
import { useTranslation } from 'react-i18next'
function About() {
  const {t, i18n} = useTranslation();
  return (
    <div >
        <Header/>
        <Link/>
      <div className='Malumot'> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p className='lorm'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      </p>
      
      <div className='kub'>
        <div></div>
        <div></div>
        <div></div>
              </div>
              
      </div>
    
    <div className='footer'>
    <Footer/>
    </div>

    </div>
  );
}

export default About;
