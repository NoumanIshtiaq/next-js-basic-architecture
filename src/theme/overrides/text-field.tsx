const MuiTextField = (theme: any) => {
  return {
    styleOverrides: {
      root: {
        border: `1px solid ${theme?.palette?.primary?.main}`,
        "&:hover": {
          border: `1px solid ${theme?.palette?.secondary?.main}`,
        },
      },
    },
  };
};
export default MuiTextField;
