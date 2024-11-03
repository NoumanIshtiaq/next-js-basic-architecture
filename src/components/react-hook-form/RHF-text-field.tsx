"use client";

import { useFormContext, Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import CustomLabel from "./custom-label";

const RHFTextField = (props: any) => {
  const { name, required, ...other } = props;

  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {other?.label && (
            <CustomLabel label={other?.label} required={required} />
          )}
          <TextField
            {...field}
            fullWidth
            error={!!error}
            helperText={
              <Typography sx={{ ml: -1 }}>{error?.message}</Typography>
            }
            // sx={{
            //   backgroundColor: "transparent",
            //   "& .MuiOutlinedInput-root ": {
            //     "& fieldset": {
            //       textAlign: "right",
            //       borderColor: "textColor.tertiary",
            //       borderRadius: "8px",
            //     },

            //     "&:hover fieldset": {
            //       borderColor: "textColor.tertiary",
            //     },
            //     "& .MuiInputBase-input": {
            //       color: "textColor",
            //     },
            //     "&.Mui-focused fieldset": {
            //       borderColor: "textColor.tertiary",
            //     },
            //     "& .MuiInputBase-input::placeholder": {
            //       fontSize: "14px",
            //     },
            //   },
            // }}
            {...other}
            label=""
          />
        </>
      )}
    />
  );
};

export default RHFTextField;
