
import './Blank.scss'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header_one'
import People from '../../Images/ME.svg'
import { useTranslation } from 'react-i18next'
function Blank() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <div className='Top'>
        <div className='Link'>
        <div><img className='fes' src="https://www.clipartmax.com/png/middle/416-4169142_facebook-logo-facebook-white-icon-png-2018.png" alt="" /></div>
        <div><img className='fes' src="https://toppng.com/uploads/preview/twitter-icon-white-transparent-11549537259z0sowbg17j.png" alt="" /></div>
        <div><img className='fes' src="https://toppng.com/uploads/preview/linkedin-white-icon-social-media-icon-png-and-vector-1a-logo-11563638575dvc3wfi8e6.png" alt="" /></div>
         <div > 
          <select className='Lengs'>
            <option>Uzbek</option>
            <option>Rus</option>
          </select>
         </div>
        </div>
        <div className='header'>
        <Header/>
        </div>
         <div className='coloros_div'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <div className='lorrm'>
        <p className='page'>Starter page</p>
        <p className='Lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div>
            <img className='People' src={People} alt="" />
            </div>
           </div>
      </div>
 <Footer /> 
    </div>
  );
}

export default Blank;
