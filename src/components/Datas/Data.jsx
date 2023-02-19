import React from 'react'
import { Link } from 'react-router-dom'
import './Data.scss'
export default function Data() {
  return (
    <div className='datas'>
<p><Link to="/">Asosiy</Link> <span>/</span>  <Link to="/List">Kasplar</Link> <span>/</span> <Link to="/Detail">Shifokor</Link></p>
      </div>
  )
}
