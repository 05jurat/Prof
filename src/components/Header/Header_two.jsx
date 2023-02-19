import { useTranslation } from 'react-i18next';
import {  Link } from 'react-router-dom';
import  './Header_two.scss';
const Header = () => {
  const {t, i18n} = useTranslation();

  const handleChangeLng = (Langs) => {
      i18n.changeLanguage(Langs);
      localStorage.setItem("Langs", Langs);
  };

    return <div className="Header"> 
      <p className='prof'>Prof<span>.uz</span></p>
    <ol className='ol'>
    <li><Link  to='/Inbox'>Kasb tanlash</Link ></li>
      <li><Link   to='/Resume'>Rezume yarat</Link ></li>
      <li><Link   to='/Traning'>Treninglar</Link ></li>
      <li><Link   to='/Contact'>Broshyura</Link ></li>
      <li><Link   to='/About'>Biz haqimizda</Link ></li>
      <li>
        {/* <select onChange={ e => handleChangeLng(e.target.value)}>
        <option onClick={e =>handleChangeLng("uz")} value="uz" >Uzb</option>
        <option onClick={e =>handleChangeLng('rus')} value='rus' >Rus</option>
        </select> */}
        </li>
      </ol>
        <div className='kirish'>
          <img className='person' src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png" alt="" />
          <select>
            <option>
            <Link to = '/Registr'>Kirish</Link>
              </option>
          </select>
        </div>
    </div>
  
}

export default Header;