import './Header.css'
import account from '../img/Account.svg'
import Menu from '../Menu/Menu'
import {menuItems} from '../utils'
import Logo from '../Logo/Logo'

export default function Header(){
  return(
    <div className="header">
      <Logo/>
      <Menu menuArray={menuItems}/>
      <div className="header-account">
        <img src={account} className='account-img'/>
        <p>Особистий кабінет</p>
      </div>
    </div>
  )
}