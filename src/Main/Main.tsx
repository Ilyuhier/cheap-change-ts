import './Main.css'
import image from '../img/image.jpg'

export default function Main(){
  return(
    <div className='main'>
      <div className='main-container'>
        <div className='main-info-container'>
          <h2>Конвертер валют</h2>
          <p>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
          <div className='main-button'>
            <a>Конвертувати валюту</a>
          </div>
        </div>
        <img src={image}/>
      </div>
    </div>
  )
}