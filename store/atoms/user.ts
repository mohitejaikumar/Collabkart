import { atom } from "recoil";


export const user = atom<string|null>({
    key: 'user', 
    default:null
  });