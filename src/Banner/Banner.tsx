import './Banner.css'
import card from '../img/standard-mastercard-card-debit_1280x720.png'

export default function Banner(){
  return(
    <div className="banner">
      <div className='banner-info-block banner-container'>
        <h1>Чіп Чендж</h1>
        <p>Обмінник валют - навчальний</p>
        <div className='banner-button'>
          <span>Конвертер валют</span>
        </div>  
      </div>
      <div className='banner-container'>
      <img src={card} className='card-img' />
      </div>
    </div>
  )
}