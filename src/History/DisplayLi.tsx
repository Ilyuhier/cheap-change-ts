import arrow from '../img/Arrow.svg'
import { convertation } from '../store'
export default function DisplayLi(li:convertation){
  return(
    <li><span>{li.date.get('year')}</span>   {li.currentValue} {li.currentCurrency} <img src={arrow}/> {li.expectedValue} {li.expectedCurrency}</li>
  )
}