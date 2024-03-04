import './History.css'
import DisplayLi from './DisplayLi'
import { useConvertationStore } from '../store'
export default function History(){
  const convertations = useConvertationStore(state => state.convertations)
  const clearAll = useConvertationStore(state => state.clearAll)
  return(
    <div className="history">
      <div className="history-block">
        <div className='history-header'>
          <label>Історія конвертації</label>
          <div className="clear-button">
            <a href="#" onClick={()=>clearAll}>Очистити історію</a>
          </div>
        </div>
        <div>
          <ul className='convertation-list'>
          {convertations.map(e=>DisplayLi(e))}
          </ul>
        </div>
        <ul></ul>
      </div>
    </div>
  )
}