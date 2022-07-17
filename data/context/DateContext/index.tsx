import { createContext, Dispatch, SetStateAction } from "react";

export interface DateContextInterface {
  monthAndYear?: Date;
  setMonthAndYear?: Dispatch<SetStateAction<Date>>;
}

export const DateContext = createContext<DateContextInterface>({});
