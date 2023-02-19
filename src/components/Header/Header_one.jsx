
import  './Header.scss';
import {  Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Header () {
  const {t, i18n} = useTranslation();
    return (
    <div className="Header"> 
      <p className='prof'>Prof<span>.uz</span></p>
    <ol>
      <li><Link  to='/Inbox'>Kasb tanlash</Link ></li>
      <li><Link   to='/Resume'>Rezume yarat</Link ></li>
      <li><Link   to='/Traning'>Treninglar</Link ></li>
      <li><Link   to='/Contact'>Broshyura</Link ></li>
      <li><Link   to='/About'>Biz haqimizda</Link ></li>
      </ol>
        <div className='Kirish'>
          <img className='person' src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png" alt="" />
          <select>
            <option>
           <Link to = '/Registr'>Kirish</Link>
              </option>
          </select>
        </div>
      
    </div>
   
    )
}

export default Header;