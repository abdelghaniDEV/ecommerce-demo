import { atom } from "recoil";


export const showCartsatate = atom({
    key: 'showCartsatate', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });