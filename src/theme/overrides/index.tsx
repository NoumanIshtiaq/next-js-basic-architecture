import { MuiButton } from "./button";
import MuiTextField from "./text-field";

export const components = (theme: any) => {
  return {
    MuiInputBase: MuiTextField?.(theme),
    MuiButton: MuiButton?.(theme),
  };
};
