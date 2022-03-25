import hotkeys from "hotkeys-js";
import {FC} from "react";

const observerMap: any = {}
export const addKeyObserver = (key: string, callback: Function) => {
  if (!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => executeCallbacks(key));
  }
  observerMap[key].push(callback);
}

export const removeKeyObserver = (key: string, callback: Function) => {
  observerMap[key] = observerMap[key].filter((item: FC<{}>) => item !== callback);
}


const executeCallbacks = (key: string) => {
  for(const ob of observerMap[key]) {
    ob();
  }
}
