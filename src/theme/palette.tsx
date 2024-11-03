export const common = {
    white: "#fff",
    black: "#000",
  };
  
  
 export const textColor = {
    main: "#2E2E2E",
    secondary:'#666666',
    tertiary:'#808080'
  };
  
  export const primary = {
    main: "#0D3236",
  };
  
  const secondary = {
    main:'#5aa8b9',
    contrastText:'#fff'
  };
  
  const success = {
    main: "#12B76A",
  };
  
  const info = {
    main: "#06AED4",
  };
  
  const warning = {
    main: "#F79009",
  };

  export const error = {
    main: "#F04438",
  };
  
  const inherit = {
    main: "#220132",
  };
  
  const grey: any = {
    0: "#D1D5DB",
    100: "#f9fafb",
    200: "#f8f8fa",
    300: "#f7f7f9",
    400: "#f3f4f6",
    500: "#7a7a7b",
    600: "#4B5563",
    700: "#E5E7EB",
    800: "#1F2937",
    900: "#9CA3AF",
    1000: "#6B72801A",
  };
  
  export const paletteColor = {
      common,
      primary,
      secondary,
      success,
      error,
      warning,
      info,
      inherit,
      textColor,
      grey,
  };
  
  
  export const palette =  {
      light: {
        ...paletteColor,
        mode: "light",
      },
      dark: {
        ...paletteColor,
        mode: "dark",
      },
    };
  
  declare module "@mui/material/styles" {
    interface Palette {
      light?: any;
      dark?: any;
    }
  
    interface PaletteOptions {
      light?: any;
      dark?: any;
    }
  }
  