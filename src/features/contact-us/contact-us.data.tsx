import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const contactUsFormValidationSchema = Yup?.object()?.shape({
  firstName: Yup?.string()?.trim()?.required("First name is required"),
  lastName: Yup?.string()?.trim()?.required("First name is required"),
  email: Yup?.string()
    ?.trim()
    ?.email()
    ?.typeError("Invalid email type")
    ?.required("Email is required"),
  query: Yup?.string()?.trim()?.required("Message is required"),
  phoneNumber: Yup?.string()
    ?.trim()
    ?.matches(/^\+44[0-9]{10}$/, "Only UK Phone Number")
    ?.required("Phone number is required"),
});

export const contactUsFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  query: "",
  phoneNumber: "",
};

export const contactUsFormFields = [
  {
    id: 1,
    componentProps: {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter first name",
      required: true,
    },
    component: RHFTextField,
    md:6,
  },
  {
    id: 2,
    componentProps: {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter last name",
      required: true,
    },
    component: RHFTextField,
    md:6,
  },
  {
    id: 3,
    componentProps: {
      name: "email",
      label: "Email address",
      placeholder: "Enter Email Address",
      required: true,
    },
    component: RHFTextField,
    md:6,
  },
  {
    id: 4,
    componentProps: {
      name: "phoneNumber",
      label: "Phone number",
      placeholder: "Enter phone number",
      required: true,
    },
    component: RHFTextField,
    md:6,
  },
  {
    id: 5,
    componentProps: {
      name: "query",
      label: "Your Message",
      placeholder: "Enter your message",
      required: true,
      multiline: true,
      rows:6
    },
    component: RHFTextField,
  },
];
