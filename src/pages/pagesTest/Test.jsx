import './Test.scss';
import Header from '../../components/Header/Header_two';
import Footer from '../../components/Footer/Footer';
import p1 from '../../Images/p1.svg'
import Form from 'react-bootstrap/Form';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import Data from '../../components/Datas/Data'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Test() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      <header className='header'>
        <Header/>
      </header>
     <Data/>
 <div>
  <img className='slider' src={p1} alt="" />
  <div className='div'>
<p>Aytingchi, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Form>
<div className='form'>
  <div>
  <FormCheckInput/>
  <h6>Ba'zan</h6>
       </div>
  <div> 
  <FormCheckInput/>
  <h6>Ko'p holda</h6>
      </div>
  <div>
  <FormCheckInput/>
  <h6>Juda ko'p</h6>
      </div>
  <div>
  <FormCheckInput  />
  <h6>Doimo</h6>
      </div>
  </div>
 
  <button><Link to="/Result">Keyingisi</Link></button>
  </Form>

 </div>
 </div>
 <div>
 <div className='div_two'>
<p>Aytingchi, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Form>
<div className='form'>
  <div>
  <FormCheckInput/>
  <h6>Ba'zan</h6>
       </div>
  <div> 
  <FormCheckInput/>
  <h6>Ko'p holda</h6>
      </div>
  <div>
  <FormCheckInput/>
  <h6>Juda ko'p</h6>
      </div>
  <div>
  <FormCheckInput/>
  <h6>Doimo</h6>
      </div>
  </div>
  <div className='form'>
  <div>
  <FormCheckInput/>
  <h6>Juda qiziq</h6>
       </div>
  <div> 
  <FormCheckInput/>
  <h6>tez-tez</h6>
      </div>
  <div>
  <FormCheckInput/>
  <h6>Juda kam</h6>
      </div>
  <div>
  <FormCheckInput/>
  <h6>Bilmayman</h6>
      </div>
  </div>
  <button><Link to="/Result">Keyingisi</Link></button>
  </Form>
 </div>
 </div>
  {/* Savol */}
  <div className='question'>
<p>Bo'sh vaqtingizda nima qilasiz? <br />Bir yoki bir nechta hobby tanlash mumkin</p>
 <div className='question_one'>
  <div className='gridtr'>
    <div style={{backgroundColor:"#FFD6D6"}}><p>Rasm chizish</p> <FormCheckInput className='for'/></div>
    <div style={{backgroundColor:"#FFEEC2"}}><p>Kitob o'qish</p> <FormCheckInput className='for'/></div>
    <div style={{backgroundColor:"#6E7381"}}><p>Kompyuter </p> <FormCheckInput className='for'/></div>
    <div style={{backgroundColor:"#DBFFFF"}}><p>Yotib uxlash</p> <FormCheckInput className='for'/></div>
  </div>
  <div className='grid_one'>
<div style={{backgroundColor:"#D5FBCC"}}><p>Televizor ko'rish</p> <FormCheckInput className='for'/></div>
<div style={{backgroundColor:"#6E7381"}}><p>Futbol o'ynash</p> <FormCheckInput className='for'/></div>
<div style={{backgroundColor:"#DEE5FF"}}><p>Kompyuter </p> <FormCheckInput className='for'/></div>
<div style={{backgroundColor:"#FFE4E8"}}><p>Yotib uxlash</p> <FormCheckInput className='for'/></div>
<div style={{backgroundColor:"#EDE4FF"}}><p>Futbol o'ynash</p> <FormCheckInput className='for'/></div>
  </div>
  <button className='Left'><Link to="/Test">Oldingisi</Link></button>
  <button className='Raigth'><Link to="/Result">Keyingisi</Link></button>
 </div>
  </div>

 <div className='footer'>
 <Footer />
 </div>

    </div>

  );
}

export default Test;
