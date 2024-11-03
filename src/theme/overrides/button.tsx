export const MuiButton: any = (theme: any) => {
  return {
    variants: [
      {
        props: { variant: "dashed" },
        style: {
          color: theme?.palette?.primary?.darker,
          border: `1px dashed ${theme?.palette?.primary?.main}`,
        },
      },
    ],
    defaultProps: {
      disableElevation: true,
      variant: "contained",
      color: "success",
    },
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        disableElevation: true,
        '&:hover': {
            boxShadow: 'none',
          },
      },
      containedInherit: {
        color: theme?.palette?.secondary?.dark,
        backgroundColor: theme?.palette?.secondary?.lightest,
      },
      outlinedInherit: {
        color: theme?.palette?.secondary?.dark,
        border: `1px solid ${theme?.palette?.error?.main}`,
      },
    },
  };
};

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}
