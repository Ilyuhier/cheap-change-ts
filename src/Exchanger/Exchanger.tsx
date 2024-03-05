import './Exchanger.css'
import type { DatePickerProps } from 'antd';
import { DatePicker, Select, InputNumber, Result, Flex } from 'antd'
import { useEffect, useMemo, useState } from 'react';
import { dateFormat } from '../utils';
import dayjs, {Dayjs} from 'dayjs'
import { APIkey } from '../key';
import arrows from '../img/icon-arrows.svg'
import { useConvertationStore, convertation } from '../store';

export default function Exchanger(){
  const [courseDate, setCourseDate] = useState<Dayjs>(dayjs())
  const [courseData, setCourseData] = useState<any>()
  const [currency, setCurrency] = useState<string>('UAH')
  const [expectedCurrency, setExpectedCurrency] = useState<string>('USD')
  const [currencyValue, setCurrencyValue] = useState<number|null>(0)
  const [expectedcurrencyValue, setExpectedCurrencyValue] = useState<number|null>()
  const addConvertation = useConvertationStore(state => state.addConvertation)
  console.log(courseDate)
  useEffect(()=>{
    if(!currencyValue){
      return
    }
    const firstCurrencyRate  = courseData.conversion_rates[currency]
    const secondCurrencyRate = courseData.conversion_rates[expectedCurrency]
    const calculated = ((currencyValue / firstCurrencyRate) * secondCurrencyRate)
    setExpectedCurrencyValue(calculated)
  },[currency, currencyValue, expectedCurrency,courseData])
  useEffect(() => {
    async function fetchData(){
      try{
        const year = courseDate.get('year')
        const month = (courseDate.get('month')+1)
        const day = courseDate.get('date')
        const url = `https://v6.exchangerate-api.com/v6/${APIkey}/history/USD/${year}/${month}/${day}` //fix to ${day}
        const response = await fetch(url)
        const respData = await response.json()
        console.log(respData)
        setCourseData(respData)
    }
    catch(error){
      console.error('Ooops',error)
      throw error
    }
  }
  fetchData()
  },[courseDate]
  );
  function saveResult(){
    const result = {
      date: courseDate,
      currentValue: currencyValue,
      currentCurrency: currency,
      expectedValue: expectedcurrencyValue,
      expectedCurrency: expectedCurrency
    }
    addConvertation(result)
  }
  return(
    <div className="exchanger">
      <div className="exchanger-block">
        <label>Конвертер валют</label>
        <div className='input-line'>
          <div>
            <p>В мене є</p>
            <InputNumber size='large' style={{ width: 220, fontSize:20 }} min={0} defaultValue={0} onChange={(value)=>setCurrencyValue(value)}/>
            <Select
              defaultValue="UAH"
              size='large'
              style={{ width: 120 }}
              options={[
                { value: 'UAH', label: 'UAH' },
                { value: 'USD', label: 'USD' },
                { value: 'EUR', label: 'EUR' },
                { value: 'GBP', label: 'GBP' },
                { value: 'CNY', label: 'CNY' }
              ]}
              onChange={(value)=>setCurrency(value)}
            />
          </div>
          <img src={arrows} className='arrow'/>
          <div>
            <p>Хочу придбати:</p>
            <InputNumber size='large' style={{width: 220, fontSize:20 }} min={0} defaultValue={0} value={expectedcurrencyValue}/>
            <Select
              defaultValue="USD"
              size='large'
              style={{ width: 120 }}
              options={[
                { value: 'UAH', label: 'UAH' },
                { value: 'USD', label: 'USD' },
                { value: 'EUR', label: 'EUR' },
                { value: 'GBP', label: 'GBP' },
                { value: 'CNY', label: 'CNY' }
              ]}
              onChange={(value)=>setExpectedCurrency(value)}
            />
          </div>
        </div>
        <div className='bottom-line'>
          <DatePicker
            defaultValue={dayjs()}
            format={dateFormat}
            onChange={((date)=>setCourseDate(date))}
            maxDate={dayjs()}
          />
          <div className='save-button' >
            <a href='#' onClick={(e)=>{
              e.preventDefault() 
              saveResult()}}>Зберегти результат</a>
          </div>
        </div>
      </div>
    </div>
  )
}