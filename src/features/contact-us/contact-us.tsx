"use client";
import { FormProvider } from "@/components/react-hook-form";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { contactUsFormFields } from "./contact-us.data";
import { useContactUs } from "./use-contact-us";
import { ReactHookFormFieldsI } from "@/components/react-hook-form/react-hook-form.interface";

export const ContactUs = () => {
  const { methods, handleSubmit, submitContactUs } = useContactUs();
  return (
    <>
      <Typography variant="h3" color="textColor">
        Get In Touch
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(submitContactUs)}
        >
          <Grid2 container spacing={3}>
            {contactUsFormFields?.map((item: ReactHookFormFieldsI) => (
              <Grid2 size={{ xs: 12, md: item?.md }} key={item?.id}>
                <item.component {...item?.componentProps} />
              </Grid2>
            ))}
          </Grid2>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
              sx={{ my: 1 }}
            >
              Send
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </>
  );
};
