import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// Defining the Root State Type
// https://fernandobelotto.github.io/react-redux/next/using-react-redux/static-typing/
