import { atom } from "recoil";

export const isLoading = atom<boolean>({
    key:'isLoading',
    default:false
})