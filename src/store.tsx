import { Dayjs } from 'dayjs'
import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

export interface convertation{
  date: Dayjs;
  currentValue: number|null;
  currentCurrency: string;
  expectedValue: number|null|undefined;
  expectedCurrency: string;
}
interface convertationState {
  convertations: convertation[]
}
interface convertationAction {
  addConvertation: (value: convertation) => void,
  clearAll:() => void
}
const convertations :convertationState = {
  convertations: []
}  

export const useConvertationStore = create<convertationState & convertationAction>()(immer((set) => ({
  ...convertations,
  addConvertation: (convertation) =>  set((state) => {
    if(state.convertations.length===10){
      state.convertations.splice(0,1)
      state.convertations.push(convertation)
    } else return ({convertations: [...state.convertations, convertation]})}),
  clearAll:()=>set(convertations)})))