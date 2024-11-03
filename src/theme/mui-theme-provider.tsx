"use client";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";
import { components } from "./overrides";

export const MUIThemeProvider: any = ({ children }: any) => {
  const themeOptions: any = {
    palette: palette.light,
    typography,
    spacing: 10,
    shape: { borderRadius: 4 },
  };

  const theme = createTheme(themeOptions);
  theme.components = components?.(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{}} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
