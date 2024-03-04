import { Dayjs } from 'dayjs'
import {create} from 'zustand'

export interface convertation{
  date: Dayjs;
  currentValue: number|null;
  currentCurrency: string;
  expectedValue: number|null|undefined;
  expectedCurrency: string;
}
interface convertationState {
  convertations: convertation[],
  addConvertation: (value: convertation) => void,
  clearAll:() => void
}
interface convertationAction {
  
}
export const useConvertationStore = create<convertationState>()((set) => ({
  convertations: [],
  addConvertation: (convertation) =>  set((state) => ({convertations: [...state.convertations, convertation] })),
  clearAll:()=>{}
}))