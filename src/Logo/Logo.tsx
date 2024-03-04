import './Logo.css'
import logo from '../img/Logo.svg'
export default function Logo(){
  return(
    <div className="logo">
        <img src={logo }/>
        <p>Чіп Чендж</p>
      </div>
  )
}