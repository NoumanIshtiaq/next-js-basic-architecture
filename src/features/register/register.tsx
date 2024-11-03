"use client";
import { FormProvider } from "@/components/react-hook-form";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { ReactHookFormFieldsI } from "@/components/react-hook-form/react-hook-form.interface";
import { registerFormFields } from "./register.data";
import { useRegister } from "./use-register";

export const Register = () => {
  const { methods, handleSubmit, submitRegister } = useRegister();
  return (
    <>
      <Typography variant="h3" color="textColor" sx={{ my: 3 }}>
        Let's Register
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(submitRegister)}>
          <Grid2 container spacing={3}>
            {registerFormFields?.map((item: ReactHookFormFieldsI) => (
              <Grid2 size={{ xs: 12, md: item?.md }} key={item?.id}>
                <item.component {...item?.componentProps} />
              </Grid2>
            ))}
          </Grid2>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="large"
            sx={{ my: 1 }}
          >
            Register
          </Button>
        </FormProvider>
      </Box>
    </>
  );
};
