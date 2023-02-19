import './List.scss';
import Header from '../../components/Header/Header_two';
import Links from '../../components/Links/Link_three'
import Footer from '../../components/Footer/Footer';
import d from '../../Images/d.svg'
import d10 from '../../Images/img.svg'
import d2 from '../../Images/img1.svg'
import d3 from '../../Images/img2.svg'
import d4 from '../../Images/img4.svg'
import d5 from '../../Images/d5.svg'
import d6 from '../../Images/d6.svg'
import d7 from '../../Images/d7.svg'
import d8 from '../../Images/d8.svg'
import d9 from '../../Images/d9.svg'
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function List() {
  const [selects,setSelects] = useState();
  const [select,setSelect] = useState();
  const [selec,setSelec] = useState();
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
       
      <div className='gfd'>
        <Links />
      </div>
     
      <div className='badsal'>
        <div>
          <select className='select'value={selects} onChange={e => setSelects(e.target.value)}>
            <option>Barcha kasplar</option>
            <option></option>
            <option>Shifokor</option>
            <option>O'qituvchi</option>
            <option>Sportchi</option>
            <option>Dasturchi</option>
            <option>Tikuvchi</option>
            <option>Politsiya</option>
            <option>Arxitektor</option>
            <option>Haydovchi</option>
          </select>
          <p className='select_p'>{selects}</p>
        </div>
        <div>
        <select className='select_one'value={select} onChange={e => setSelect(e.target.value)}>
            <option>Butun O'zbekiston</option>
            <option></option>
            <option>Andijon</option>
            <option>Samarand</option>
            <option>Toshkent</option>
            <option>Buxoro</option>
            <option>Jizzax</option>
            <option>Namangan</option>
            <option>Xorazm</option>
            <option>Sirdaryo</option>
            <option>Surxondaryo</option>
          </select>
          <p className='selectp'>{select}</p>
        </div>
        <div>
        <select className='select_two'value={selec} onChange={e => setSelec(e.target.value)}>
            <option>Saralab ko'rsat</option>
            <option></option>
            <option>Talab yuqori kasplar</option>
            <option>Yuqori moash</option>
            <option>Kam moash</option>
            <option>Alfabit bo'yicha</option>
          </select>
          <p className='selectp'>{selec}</p>
        </div>
      </div>
       
      <div className='tgtgrtgtgt'>
        <div className='divuyt1'>
          <img src={d} alt="" />
          <p className='doctorb'>Shifokor </p>
          <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
          <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
          <Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1' >
        <img src={d3} alt="" />
        <p className='doctorb'>O'qituvchi </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d4} alt="" />
        <p className='doctorb'>Injener muhandis </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'> 
        <img src={d10} alt="" />
        <p className='doctorb'>Elektrotexnik </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d2} alt="" />
        <p className='doctorb'>Dasturchi </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d5} alt="" />
        <p className='doctorb'>Tikuvchi </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d6} alt="" />
        <p className='doctorb'>Sportchi </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d7} alt="" />
        <p className='doctorb'>Haydovchi </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d8} alt="" />
        <p className='doctorb'>Oshpaz </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d9} alt="" />
        <p className='doctorb'>Politsiya </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d4} alt="" />
        <p className='doctorb'>Arxitektor </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d7} alt="" />
        <p className='doctorb'>Haydovchi </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d} alt="" />
        <p className='doctorb'>Shifokor </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d9} alt="" />
        <p className='doctorb'>Politsiya </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
        <div className='divuyt1'>
        <img src={d} alt="" />
        <p className='doctorb'>Shifokor </p>
        <p className='gggggg'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari</p>
        <p className='olllinh'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button className='hgfds'>
<Link to="/Detail">Batafsil</Link>
        </button>
        </div>
      </div>
    
 <div className='footer'>
 <Footer />
 </div>

    </div>
  );
}

export default List;