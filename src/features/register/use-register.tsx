'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postDataAPI } from "@/lib/api-call";
import { API_ENPOINTS } from "@/constant/api-endpoints";
import { errorSnackbar, successSnackbar } from "@/lib/snackbar";
import { API_KEY } from "@/config";
import { registerFormDefaultValues, registerFormValidationSchema } from "./register.data";

export const useRegister = () => {
  const methods = useForm({
    defaultValues: registerFormDefaultValues,
    resolver: yupResolver(registerFormValidationSchema),
  });

  const {handleSubmit,reset} = methods

  const submitRegister = async (formData:any) => {

    const apiDataParameter = {
      url: API_ENPOINTS?.SIGN_UP,
      body:formData,
    
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
    methods, handleSubmit, submitRegister
  }
};
