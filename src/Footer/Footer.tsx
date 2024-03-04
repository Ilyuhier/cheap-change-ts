import './Footer.css'
import phone from '../img/phone.png'
import telephone from '../img/VectorPhone.svg'
import facebook from '../img/Facebook.svg'
import instagram from '../img/Instagram.svg'
import twitter from '../img/Twitter.svg'
import youtube from '../img/YouTube.svg'
import Menu from '../Menu/Menu'
import {menuItems} from '../utils'
import Logo from '../Logo/Logo'
export default function Footer(){
  return(
    <div className='footer'>
      <div className='adress-block'>
        <Logo/>
        <p>04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156<br/>Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
      </div>
      <div className='footer-button-list'>
      <Menu menuArray={menuItems}/>
      </div>
      <div className='phone-block'>
        <img src={phone} />
        <div>
          <span>3773</span>
          <p>Цілодобова підтримка</p>
        </div>
      </div>
      <div className='phone-block'>
        <img src={telephone} />
        <div>
          <span>8 800 111 22 33</span>
          <p>Безкоштовно для дзвінків в межах України</p>
        </div>
      </div>
      <div className='icons-list'>
        <img src={facebook} />
        <img src={instagram} />
        <img src={twitter} />
        <img src={youtube} />
      </div>
    </div>
  )
}