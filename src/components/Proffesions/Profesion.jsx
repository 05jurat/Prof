import React from 'react'
import './Profesion.scss'
import dok from '../../Images/dok.svg'
import tech from '../../Images/tech.svg'
import ar from '../../Images/ar.svg'
import { Link } from 'react-router-dom'
function Profesion() {
  return (
    <div className='professions'>
    <p className='profesi'>Talab yuqori kasplar</p>
    <div className='DOK'>
      <div> 
        <img src={dok} alt="" />
        <p className='dok'>Shifokor</p>
        <p className='mest'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari </p>
        <p className='salary'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
        <button><Link to="/Detail">Batafsil</Link></button>
      </div>
      <div>
      <img src={tech} alt="" />
      <p className='dok'>O'qituvchi</p>
      <p className='mest'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari </p>
      <p className='salary'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
      <button><Link to="/Detail">Batafsil</Link></button>
      </div>
      <div>
      <img src={ar} alt="" />
      <p className='dok'>Arxitektor</p>
      <p className='mest'>Ish joyi: Maktab, Universitet, Kollej va boshqa o'quv markazlari </p>
      <p className='salary'>Maoshi*: 1 500 000 - 3 000 000 sum</p>
      <button><Link to="/Detail">Batafsil</Link></button>
          </div>
    </div>
       <button className='buttons'><Link to="/List">Barcha kasplar</Link></button>
       </div>
  )
}

export default Profesion