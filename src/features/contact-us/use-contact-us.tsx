'use client'
import { useForm } from "react-hook-form";
import {
  contactUsFormDefaultValues,
  contactUsFormValidationSchema,
} from "./contact-us.data";
import { yupResolver } from "@hookform/resolvers/yup";
import { postDataAPI } from "@/lib/api-call";
import { API_ENPOINTS } from "@/constant/api-endpoints";
import { errorSnackbar, successSnackbar } from "@/lib/snackbar";
import { API_KEY } from "@/config";

export const useContactUs = () => {
  const methods = useForm({
    defaultValues: contactUsFormDefaultValues,
    resolver: yupResolver(contactUsFormValidationSchema),
  });

  const {handleSubmit,reset} = methods

  const submitContactUs = async (formData:any) => {

    const apiDataParameter = {
      url: API_ENPOINTS?.ENQUIRY,
      body:formData,
      headers: {
        "x-api-key":API_KEY
      }
    }
    
    try {
      const response:any = await postDataAPI(apiDataParameter)
      successSnackbar(response?.data?.message)
      reset?.();
    } catch (error:any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    methods, handleSubmit, submitContactUs
  }
};
